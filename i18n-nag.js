// Time-up reminders ("nag mode", v1.2.12). Merged into I18N. © Net Zero Strategic, LLC
// {s} = the step (its own sentence, final punctuation removed), {w} = same with a lower-case first letter (English only),
// {d} = "Press done." / "Say I am done." in the routine's language. nagName joins the child's name and the reminder.
// Neutral, non-repeating reminder phrases in one steady voice (no parent stages).
const NAGT={
en:{nagWhen:"When time is up",nagMove:"Move on by itself",nagStep:"Remind until Done",nagName:"{n}, {m}",
 nNag:["{s}. {d}","Time to {w}. {d}","Still on {w}? {d}","{s}, then {d}","Let's {w} now. {d}","Reminder: {w}. {d}"]},
es:{nagWhen:"Cuando se acabe el tiempo",nagMove:"Pasar al siguiente solo",nagStep:"Recordar hasta pulsar Listo",nagName:"{n}, {m}",
 nNag:["{s}. {d}","Es hora de: {s}. {d}","¿Sigues con {s}? {d}","{s}, y luego {d}","Vamos: {s}. {d}","Recordatorio: {s}. {d}"]},
fr:{nagWhen:"Quand le temps est écoulé",nagMove:"Passer à la suite tout seul",nagStep:"Rappeler jusqu'à Fini",nagName:"{n}, {m}",
 nNag:["{s}. {d}","C'est l'heure : {s}. {d}","Toujours à : {s} ? {d}","{s}, puis {d}","On y va : {s}. {d}","Rappel : {s}. {d}"]},
de:{nagWhen:"Wenn die Zeit um ist",nagMove:"Von selbst weitergehen",nagStep:"Erinnern bis Fertig",nagName:"{n}! {m}",
 nNag:["{s}. {d}","Zeit für: {s}. {d}","Noch bei: {s}? {d}","{s}, dann {d}","Los: {s}. {d}","Erinnerung: {s}. {d}"]},
pt:{nagWhen:"Quando o tempo acabar",nagMove:"Passar sozinho para o próximo",nagStep:"Lembrar até apertar Pronto",nagName:"{n}, {m}",
 nNag:["{s}. {d}","Está na hora: {s}. {d}","Ainda em {s}? {d}","{s}, depois {d}","Vamos: {s}. {d}","Lembrete: {s}. {d}"]},
it:{nagWhen:"Quando il tempo è finito",nagMove:"Passa avanti da solo",nagStep:"Ricorda fino a Fatto",nagName:"{n}, {m}",
 nNag:["{s}. {d}","È ora di: {s}. {d}","Sei ancora a: {s}? {d}","{s}, poi {d}","Dai: {s}. {d}","Promemoria: {s}. {d}"]},
hi:{nagWhen:"समय पूरा होने पर",nagMove:"अपने आप आगे बढ़ें",nagStep:"हो गया दबाने तक याद दिलाएँ",nagName:"{n}, {m}",
 nNag:["{s}। {d}","समय हो गया है: {s}। {d}","अभी भी {s}? {d}","{s}, फिर {d}","चलो, {s}। {d}","याद दिला रहे हैं: {s}। {d}"]},
ta:{nagWhen:"நேரம் முடிந்ததும்",nagMove:"தானாக அடுத்த படிக்குச் செல்",nagStep:"முடிந்தது அழுத்தும் வரை நினைவூட்டு",nagName:"{n}, {m}",
 nNag:["{s}. {d}","நேரம் ஆச்சு: {s}. {d}","இன்னும் {s} தானா? {d}","{s}, பிறகு {d}","வா, {s}. {d}","நினைவூட்டல்: {s}. {d}"]},
te:{nagWhen:"సమయం అయిపోయాక",nagMove:"తనంతట తానే ముందుకు వెళ్లు",nagStep:"అయిపోయింది నొక్కే వరకు గుర్తు చేయి",nagName:"{n}, {m}",
 nNag:["{s}. {d}","సమయం అయింది: {s}. {d}","ఇంకా {s} నా? {d}","{s}, తర్వాత {d}","రా, {s}. {d}","గుర్తు: {s}. {d}"]},
kn:{nagWhen:"ಸಮయ ಮುಗಿದಾಗ",nagMove:"ತಾನಾಗಿ ಮುಂದೆ ಹೋಗು",nagStep:"ಆಯ್ತು ಒತ್ತುವವರೆಗೆ ನೆನಪಿಸು",nagName:"{n}, {m}",
 nNag:["{s}. {d}","ಸಮಯ ಆಯ್ತು: {s}. {d}","ಇನ್ನೂ {s} ನಾ? {d}","{s}, ನಂತರ {d}","ಬಾ, {s}. {d}","ನೆನಪು: {s}. {d}"]},
ml:{nagWhen:"സമയം കഴിഞ്ഞാൽ",nagMove:"തനിയെ അടുത്തതിലേക്ക് പോകുക",nagStep:"കഴിഞ്ഞു അമർത്തുംവരെ ഓർമ്മിപ്പിക്കുക",nagName:"{n}, {m}",
 nNag:["{s}. {d}","സമയമായി: {s}. {d}","ഇപ്പോഴും {s} ആണോ? {d}","{s}, ശേഷം {d}","വാ, {s}. {d}","ഓർമ്മപ്പെടുത്തൽ: {s}. {d}"]},
zh:{nagWhen:"时间到了以后",nagMove:"自动进入下一步",nagStep:"一直提醒，直到按完成",nagName:"{n}，{m}",
 nNag:["{s}。{d}","该做了：{s}。{d}","还在做{s}吗？{d}","{s}，然后{d}","来：{s}。{d}","提醒：{s}。{d}"]},
ja:{nagWhen:"時間になったら",nagMove:"自動で次へ進む",nagStep:"できたを押すまで知らせる",nagName:"{n}、{m}",
 nNag:["{s}。{d}","時間だよ。{s}。{d}","まだ{s}？{d}","{s}、それから{d}","さあ、{s}。{d}","リマインダー：{s}。{d}"]},
ko:{nagWhen:"시간이 끝나면",nagMove:"자동으로 다음 단계로",nagStep:"완료를 누를 때까지 알림",nagName:"{n}, {m}",
 nNag:["{s}. {d}","할 시간이야. {s}. {d}","아직 {s}이야? {d}","{s}, 그리고 {d}","자, {s}. {d}","알림: {s}. {d}"]},
ar:{nagWhen:"عند انتهاء الوقت",nagMove:"الانتقال تلقائيا",nagStep:"التذكير حتى الضغط على تم",nagName:"{n}، {m}",
 nNag:["{s}. {d}","حان الوقت: {s}. {d}","أما زلت في {s}؟ {d}","{s}، ثم {d}","هيا: {s}. {d}","تذكير: {s}. {d}"]},
ru:{nagWhen:"Когда время выйдет",nagMove:"Сразу к следующему шагу",nagStep:"Напоминать до «Готово»",nagName:"{n}, {m}",
 nNag:["{s}. {d}","Пора: {s}. {d}","Всё ещё {s}? {d}","{s}, затем {d}","Давай: {s}. {d}","Напоминание: {s}. {d}"]}
};
for(const l in NAGT)if(I18N[l])Object.assign(I18N[l],NAGT[l]);
