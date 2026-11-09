// Busy-parent + multi-child strings. Order = UX2K.
const UX2K=['quick','schoolM','behind','minsLeft','doneBy','kids','addKid'];
const UX2T={
en:["⚡ School morning – start now","School morning","We're running a bit behind. Let's keep moving!","{m} minutes left until it's time to go.","Out the door by (optional)","Children","Add child"],
es:["⚡ Mañana de cole – empezar ya","Mañana de cole","Vamos un poco tarde. ¡Sigamos!","Quedan {m} minutos para salir.","Salir de casa a las (opcional)","Niños","Añadir niño"],
fr:["⚡ Matin d'école – commencer","Matin d'école","On a un peu de retard. Continuons !","Plus que {m} minutes avant de partir.","Départ à (facultatif)","Enfants","Ajouter un enfant"],
de:["⚡ Schulmorgen – jetzt starten","Schulmorgen","Wir sind etwas spät dran. Weiter geht's!","Noch {m} Minuten, bis es losgeht.","Aus dem Haus um (optional)","Kinder","Kind hinzufügen"],
pt:["⚡ Manhã de escola – começar já","Manhã de escola","Estamos um pouco atrasados. Vamos continuar!","Faltam {m} minutos para sair.","Sair de casa às (opcional)","Crianças","Adicionar criança"],
it:["⚡ Mattina di scuola – inizia ora","Mattina di scuola","Siamo un po' in ritardo. Andiamo avanti!","Mancano {m} minuti all'uscita.","Uscire alle (facoltativo)","Bambini","Aggiungi bambino"],
hi:["⚡ स्कूल की सुबह – अभी शुरू करें","स्कूल की सुबह","हम थोड़ा पीछे हैं। चलो, आगे बढ़ते रहें!","निकलने में {m} मिनट बाकी हैं।","घर से निकलने का समय (वैकल्पिक)","बच्चे","बच्चा जोड़ें"],
ta:["⚡ பள்ளிக் காலை – இப்போதே தொடங்கு","பள்ளிக் காலை","கொஞ்சம் தாமதமாகிறது. தொடர்ந்து செல்வோம்!","கிளம்ப இன்னும் {m} நிமிடங்கள்.","வீட்டை விட்டுக் கிளம்பும் நேரம் (விருப்பம்)","குழந்தைகள்","குழந்தையைச் சேர்"],
te:["⚡ స్కూల్ ఉదయం – ఇప్పుడే మొదలుపెట్టు","స్కూల్ ఉదయం","కొంచెం ఆలస్యమవుతోంది. ముందుకు సాగుదాం!","బయలుదేరడానికి {m} నిమిషాలు ఉన్నాయి.","ఇంటి నుండి బయలుదేరే సమయం (ఐచ్ఛికం)","పిల్లలు","పిల్లను జోడించు"],
kn:["⚡ ಶಾಲೆಯ ಬೆಳಿಗ್ಗೆ – ಈಗಲೇ ಶುರು","ಶಾಲೆಯ ಬೆಳಿಗ್ಗೆ","ಸ್ವಲ್ಪ ತಡವಾಗುತ್ತಿದೆ. ಮುಂದುವರಿಯೋಣ!","ಹೊರಡಲು {m} ನಿಮಿಷ ಉಳಿದಿದೆ.","ಮನೆಯಿಂದ ಹೊರಡುವ ಸಮಯ (ಐಚ್ಛಿಕ)","ಮಕ್ಕಳು","ಮಗು ಸೇರಿಸು"],
ml:["⚡ സ്കൂൾ രാവിലെ – ഇപ്പോൾ തുടങ്ങൂ","സ്കൂൾ രാവിലെ","കുറച്ച് വൈകുന്നു. നമുക്ക് തുടരാം!","പോകാൻ {m} മിനിറ്റ് ബാക്കി.","വീട്ടിൽ നിന്ന് ഇറങ്ങുന്ന സമയം (ഓപ്ഷണൽ)","കുട്ടികൾ","കുട്ടിയെ ചേർക്കൂ"],
zh:["⚡ 上学早晨 – 马上开始","上学早晨","我们有点晚了，继续加油！","离出门还有 {m} 分钟。","出门时间（可选）","孩子","添加孩子"],
ja:["⚡ 登校の朝 – すぐスタート","登校の朝","ちょっと遅れ気味。どんどん進もう！","出発まであと {m} 分。","家を出る時刻（任意）","子ども","子どもを追加"],
ko:["⚡ 등교 아침 – 바로 시작","등교 아침","조금 늦어지고 있어. 계속 가 보자!","나갈 때까지 {m}분 남았어.","집에서 나가는 시간 (선택)","아이들","아이 추가"],
ar:["⚡ صباح المدرسة – ابدأ الآن","صباح المدرسة","تأخرنا قليلا. لنواصل!","بقي {m} دقيقة على وقت الخروج.","الخروج من البيت الساعة (اختياري)","الأطفال","إضافة طفل"],
ru:["⚡ Школьное утро – начать сейчас","Школьное утро","Мы немного отстаём. Продолжаем!","До выхода осталось {m} мин.","Выйти из дома в (необязательно)","Дети","Добавить ребёнка"]};
for(const l in UX2T)UX2K.forEach((k,n)=>I18N[l][k]=UX2T[l][n]);
// Temperature setting: [label, auto]
const TEMPT={en:["Temperature","Auto (where you are)"],es:["Temperatura","Automática (según tu ubicación)"],fr:["Température","Auto (selon le lieu)"],de:["Temperatur","Automatisch (nach Standort)"],
pt:["Temperatura","Automática (pelo local)"],it:["Temperatura","Automatica (in base al luogo)"],hi:["तापमान","अपने आप (आप जहाँ हैं)"],ta:["வெப்பநிலை","தானியங்கி (இருக்குமிடம்)"],te:["ఉష్ణోగ్రత","ఆటోమేటిక్ (మీరున్న చోటు)"],
kn:["ತಾಪಮಾನ","ಸ್ವಯಂ (ನೀವಿರುವ ಸ್ಥಳ)"],ml:["താപനില","സ്വയം (നിങ്ങളുള്ള സ്ഥലം)"],zh:["温度","自动（按所在地）"],ja:["気温の単位","自動（現在地）"],ko:["온도","자동 (현재 위치)"],ar:["درجة الحرارة","تلقائي (حسب موقعك)"],ru:["Температура","Авто (по местоположению)"]};
for(const l in TEMPT){I18N[l].tempSet=TEMPT[l][0];I18N[l].tAuto=TEMPT[l][1]}
I18N.en.askResendT="Almost ready!";I18N.en.askResendB="Ask Mom to send the routine link again, then open it and add it to your Home Screen.";
// Shower safety (v1.2.6): timed in-shower reminders (phone stays outside; no Done inside the shower). Order = SHK.
const SHK=['shSoap','shRinse','shFace','shOff','shOut','shNote'];
const SHT={
en:["Put soap all over your body.","Rinse off all the soap.","Wash your face.","Turn the water all the way off.","Step out of the shower carefully.","🚿 Leave the phone outside the shower. Shower steps are timed; Done comes back when you are out."],
es:["Ponte jabón por todo el cuerpo.","Enjuágate todo el jabón.","Lávate la cara.","Cierra el agua del todo.","Sal de la ducha con cuidado.","🚿 Deja el teléfono fuera de la ducha. Los pasos de la ducha van con tiempo; Listo vuelve cuando salgas."],
fr:["Mets du savon sur tout ton corps.","Rince bien tout le savon.","Lave-toi le visage.","Ferme complètement l'eau.","Sors de la douche prudemment.","🚿 Laisse le téléphone hors de la douche. Les étapes de la douche sont minutées ; Fini revient quand tu es sorti."],
de:["Seif deinen ganzen Körper ein.","Spül die ganze Seife ab.","Wasch dein Gesicht.","Dreh das Wasser ganz zu.","Steig vorsichtig aus der Dusche.","🚿 Lass das Handy außerhalb der Dusche. Die Duschschritte laufen nach Zeit; Fertig kommt zurück, wenn du draußen bist."],
pt:["Passe sabonete no corpo todo.","Enxágue todo o sabonete.","Lave o rosto.","Feche bem o chuveiro.","Saia do chuveiro com cuidado.","🚿 Deixe o celular fora do chuveiro. Os passos do banho são cronometrados; Pronto volta quando você sair."],
it:["Metti il sapone su tutto il corpo.","Sciacqua via tutto il sapone.","Lavati la faccia.","Chiudi bene l'acqua.","Esci dalla doccia con attenzione.","🚿 Lascia il telefono fuori dalla doccia. I passi della doccia sono a tempo; Fatto torna quando sei fuori."],
hi:["पूरे शरीर पर साबुन लगाओ।","सारा साबुन धो लो।","अपना चेहरा धो लो।","पानी पूरी तरह बंद करो।","ध्यान से शावर से बाहर आओ।","🚿 फ़ोन शावर के बाहर रखो। शावर के काम समय से चलते हैं; बाहर आने पर हो गया दबाओ।"],
ta:["உடல் முழுவதும் சோப்பு போடு.","சோப்பை முழுவதும் கழுவு.","முகத்தைக் கழுவு.","தண்ணீரை முழுவதுமாக நிறுத்து.","கவனமாக ஷவரிலிருந்து வெளியே வா.","🚿 போனை ஷவருக்கு வெளியே வை. ஷவர் படிகள் நேரப்படி நடக்கும்; வெளியே வந்ததும் முடிந்தது அழுத்து."],
te:["ఒళ్ళంతా సబ్బు రాసుకో.","సబ్బు అంతా కడుక్కో.","ముఖం కడుక్కో.","నీళ్ళు పూర్తిగా ఆపు.","జాగ్రత్తగా షవర్ నుండి బయటకు రా.","🚿 ఫోన్ షవర్ బయట ఉంచు. షవర్ పనులు సమయం ప్రకారం జరుగుతాయి; బయటకు వచ్చాక అయిపోయింది నొక్కు."],
kn:["ಮೈ ತುಂಬಾ ಸೋಪು ಹಚ್ಚಿಕೋ.","ಸೋಪನ್ನು ಪೂರ್ತಿ ತೊಳೆದುಕೋ.","ಮುಖ ತೊಳೆದುಕೋ.","ನೀರನ್ನು ಪೂರ್ತಿ ನಿಲ್ಲಿಸು.","ಜಾಗ್ರತೆಯಾಗಿ ಶವರ್‌ನಿಂದ ಹೊರಗೆ ಬಾ.","🚿 ಫೋನನ್ನು ಶವರ್‌ನ ಹೊರಗೆ ಇಡು. ಶವರ್ ಹಂತಗಳು ಸಮಯದಂತೆ ನಡೆಯುತ್ತವೆ; ಹೊರಗೆ ಬಂದ ಮೇಲೆ ಆಯ್ತು ಒತ್ತು."],
ml:["ദേഹം മുഴുവൻ സോപ്പ് തേക്കൂ.","സോപ്പ് മുഴുവൻ കഴുകിക്കളയൂ.","മുഖം കഴുകൂ.","വെള്ളം മുഴുവനായി നിർത്തൂ.","ശ്രദ്ധയോടെ ഷവറിൽ നിന്ന് പുറത്തിറങ്ങൂ.","🚿 ഫോൺ ഷവറിന് പുറത്ത് വെക്കൂ. ഷവർ ഘട്ടങ്ങൾ സമയമനുസരിച്ച് നടക്കും; പുറത്തിറങ്ങിയ ശേഷം കഴിഞ്ഞു അമർത്തൂ."],
zh:["全身抹上肥皂。","把肥皂全部冲干净。","洗洗脸。","把水完全关掉。","小心走出淋浴间。","🚿 手机放在淋浴间外面。淋浴步骤会按时提醒；出来后再按完成。"],
ja:["体じゅうに石けんをつけよう。","石けんを全部洗い流そう。","顔を洗おう。","お湯をしっかり止めよう。","気をつけてシャワーから出よう。","🚿 スマホはシャワーの外に置いてね。シャワーの手順は時間で進むよ。出たらできたを押してね。"],
ko:["온몸에 비누칠을 해.","비누를 모두 헹궈.","세수해.","물을 완전히 잠가.","조심해서 샤워실에서 나와.","🚿 휴대폰은 샤워실 밖에 둬. 샤워 단계는 시간에 맞춰 진행돼. 나온 뒤에 완료를 눌러."],
ar:["ضع الصابون على جسمك كله.","اشطف الصابون كله.","اغسل وجهك.","أغلق الماء تماما.","اخرج من الدش بحذر.","🚿 اترك الهاتف خارج الدش. خطوات الدش بمؤقت؛ اضغط تم بعد أن تخرج."],
ru:["Намыль всё тело.","Смой всё мыло.","Умой лицо.","Полностью закрой воду.","Осторожно выйди из душа.","🚿 Оставь телефон вне душа. Шаги в душе идут по таймеру; Готово появится, когда выйдешь."]};
for(const l in SHT)if(I18N[l])SHK.forEach((k,j)=>{I18N[l][k]=SHT[l][j]});
