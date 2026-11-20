// DigiMaa crash reports (v1.2.13) – anonymous by design, parent opt-in, OFF by default. © Net Zero Strategic, LLC
// Privacy design (COPPA / GDPR+ePrivacy / UK Children's Code / DPDP / LGPD / CCPA / Apple Kids / Google Play Families):
//  - Nothing is sent unless BOTH (a) MON.DSN is configured and (b) a parent turned the setting on on this device.
//  - No SDK. No cookies, no device/advertising/install/user IDs, no IP stored by us, no user agent, no URLs, no breadcrumbs.
//  - Sent fields (allowlist, see MON.build): error type, scrubbed message, app file:line frames, app version, platform, UI language.
//  - Message scrubber removes quoted text, URLs, emails, numbers, and every string the user typed (child names, routines, steps).
//  - Native builds (App Store / Google Play) never send: they rely on Apple's and Google's built-in crash reports instead.
const MON={
 // Sentry-compatible DSN, EU data region recommended, e.g. 'https://<key>@o<org>.ingest.de.sentry.io/<project>'.
 // Left EMPTY on purpose: no account exists yet, so nothing is ever sent.
 DSN:'',
 ALLOW_NATIVE:false, // Apple Kids Category / Play Families: keep false; use App Store Connect + Play Console crash reports.
 MAX_PER_SESSION:5,KEY:'crashReports',sent:0,seen:{},
 FILES:['app.js','speech.js','adapt.js','subscription.js','monitor.js','sw.js','index.html','i18n.js','i18n-ob.js','i18n-sub.js','i18n-ux.js','i18n-ux2.js','i18n-hs.js','i18n-nag.js','i18n-mon.js'],
 TYPES:['Error','TypeError','ReferenceError','RangeError','SyntaxError','URIError','EvalError','AggregateError','DOMException','NotAllowedError','AbortError','InvalidStateError','NotSupportedError','QuotaExceededError','SecurityError','UnhandledRejection'],
 native(){return !!(window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform())},
 configured(){return !!this.parse()&&(this.ALLOW_NATIVE||!this.native())},
 enabled(){try{return this.configured()&&JSON.parse(localStorage.getItem(this.KEY))===true}catch(e){return false}},
 set(on){try{localStorage.setItem(this.KEY,JSON.stringify(!!on))}catch(e){}},
 parse(){const m=/^https:\/\/([0-9a-f]{16,64})@([a-z0-9.-]+)\/(\d+)$/i.exec(this.DSN||'');return m?{key:m[1],host:m[2],project:m[3]}:null},
 // Every string the user typed or that came from a share link, so it can be blanked from messages.
 secrets(){const out=new Set();const walk=v=>{if(typeof v==='string'){v.split(/[\s,.;:!?()"'“”‘’«»。、，]+/).concat([v]).forEach(w=>{w=w.trim();if(w.length>=2)out.add(w)})}else if(v&&typeof v==='object')Object.values(v).forEach(walk)};
  try{['routines','kids','kidActive','country'].forEach(k=>{const r=localStorage.getItem(k);if(r)try{walk(JSON.parse(r))}catch(e){walk(r)}})}catch(e){}
  try{const u=new URL(location.href);u.searchParams.forEach(v=>walk(v));if(u.hash)walk(decodeURIComponent(u.hash.slice(1)))}catch(e){}
  try{const k=document.getElementById('kid');if(k&&k.value)walk(k.value)}catch(e){}
  return [...out].sort((a,b)=>b.length-a.length)},
 scrub(s,sec){s=String(s==null?'':s).slice(0,1000);
  // 1) every string the user typed (longest first), whole-word for Latin text; 2) URLs, emails, quoted text, numbers.
  for(const w of sec||[]){if(w.length<2)continue;const e=w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
   s=s.replace(new RegExp(/^[\x20-\x7E]+$/.test(w)?'(^|[^A-Za-z0-9_])'+e+'(?![A-Za-z0-9_])':e,/^[\x20-\x7E]+$/.test(w)?'gi':'g'),(m,p)=>(typeof p==='string'?p:'')+'<text>')}
  s=s.replace(/https?:\/\/\S+|blob:\S+|data:\S+|file:\S+/gi,'<url>').replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g,'<email>')
   .replace(/"[^"]*"|'[^']*'|`[^`]*`|“[^”]*”|‘[^’]*’|«[^»]*»/g,'<text>').replace(/\d+/g,'<n>');
  // Anything that is not plain ASCII code-ish text (user content in any of the 16 languages) is dropped.
  s=s.replace(/[^\x20-\x7E]+/g,'<text>').replace(/<text>(\s*<text>)+/g,'<text>').replace(/\s+/g,' ').trim();
  return s.slice(0,160)},
 frames(stack){const out=[];String(stack||'').split('\n').forEach(line=>{
   const m=/([A-Za-z0-9_.-]+\.(?:js|html))(?:\?[^:\s)]*)?:(\d+):(\d+)/.exec(line);if(!m)return;
   const f=m[1];const fn=(/^\s*at\s+([A-Za-z_$][\w$.]{0,40})\s+\(/.exec(line)||/^([A-Za-z_$][\w$.]{0,40})@/.exec(line.trim())||[])[1];
   out.push({filename:this.FILES.includes(f)?f:'other',function:fn&&/^[\w$.]+$/.test(fn)?fn:'?',lineno:+m[2],colno:+m[3],in_app:this.FILES.includes(f)})});
  return out.slice(0,20).reverse()},
 uuid(){const b=new Uint8Array(16);crypto.getRandomValues(b);return [...b].map(x=>x.toString(16).padStart(2,'0')).join('')}, // fresh per event, never stored
 build(err,kind){const sec=this.secrets();let type=err&&err.name||'Error';if(!this.TYPES.includes(type))type='Error';if(kind==='rejection'&&!(err instanceof Error))type='UnhandledRejection';
  const msg=this.scrub(err&&err.message!=null?err.message:(typeof err==='string'?err:''),sec);
  const plat=this.native()?(Capacitor.getPlatform()==='ios'?'ios':'android'):'web';
  let lang='en';try{const l=JSON.parse(localStorage.getItem('lang'));if(typeof l==='string'&&/^[a-z]{2}$/.test(l))lang=l}catch(e){}
  return {event_id:this.uuid(),timestamp:Math.floor(Date.now()/1000),platform:'javascript',level:'error',
   release:'digimaa@'+(typeof APP_VER!=='undefined'?APP_VER:'?'),environment:plat,
   tags:{platform:plat,lang},
   exception:{values:[{type,value:msg,stacktrace:{frames:this.frames(err&&err.stack)}}]}}},
 // Final allowlist gate: anything else is dropped even if a future change adds it upstream.
 clean(ev){const x=ev.exception.values[0];return {event_id:ev.event_id,timestamp:ev.timestamp,platform:'javascript',level:'error',release:ev.release,environment:ev.environment,
   tags:{platform:ev.tags.platform,lang:ev.tags.lang},
   exception:{values:[{type:x.type,value:x.value,stacktrace:{frames:x.stacktrace.frames.map(f=>({filename:f.filename,function:f.function,lineno:f.lineno,colno:f.colno,in_app:f.in_app}))}}]}}},
 envelope(ev){return JSON.stringify({event_id:ev.event_id})+'\n'+JSON.stringify({type:'event'})+'\n'+JSON.stringify(ev)+'\n'},
 report(err,kind){try{if(!this.enabled()||this.sent>=this.MAX_PER_SESSION)return null;const d=this.parse();
   const ev=this.clean(this.build(err,kind));const sig=ev.exception.values[0].type+ev.exception.values[0].value;if(this.seen[sig])return null;this.seen[sig]=1;this.sent++;
   const url=`https://${d.host}/api/${d.project}/envelope/?sentry_key=${d.key}&sentry_version=7`;
   // text/plain = no CORS preflight; omit credentials = no cookies; no-referrer = page URL is not sent.
   fetch(url,{method:'POST',body:this.envelope(ev),headers:{'Content-Type':'text/plain;charset=UTF-8'},credentials:'omit',referrerPolicy:'no-referrer',keepalive:true,mode:'cors'}).catch(()=>{});
   return ev}catch(e){return null}},
 init(){if(this._i)return;this._i=1;
  window.addEventListener('error',e=>{if(e&&(e.error||e.message))this.report(e.error||{name:'Error',message:e.message,stack:(e.filename||'')+':'+(e.lineno||0)+':'+(e.colno||0)})});
  window.addEventListener('unhandledrejection',e=>this.report(e&&e.reason,'rejection'))},
 // Parent-only setting on the home screen (hidden entirely until a DSN is configured).
 renderSetting(){try{const home=document.getElementById('home');if(!home)return;let w=document.getElementById('monWrap');
  if(!this.configured()){if(w)w.remove();return}
  if(!w){w=document.createElement('div');w.id='monWrap';w.innerHTML='<label class="row"><input type="checkbox" id="monChk"> <span id="monLbl"></span></label><p class="muted small" id="monHelp"></p>';
   const anchor=document.getElementById('useWeather');(anchor&&anchor.closest('label')||home.lastElementChild).after(w);
   document.getElementById('monChk').onchange=e=>this.set(e.target.checked)}
  const tt=k=>(typeof t==='function'?t(k):I18N.en[k]);document.getElementById('monLbl').textContent=tt('monSet');document.getElementById('monHelp').textContent=tt('monHelp');
  document.getElementById('monChk').checked=this.enabled()}catch(e){}}
};
MON.init();
