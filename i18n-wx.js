// City for the weather/jacket reminder (v1.2.14). Merged into I18N. {c} = the city found. © Net Zero Strategic, LLC
// wRain / wHot: spoken weather reminders (rain → raincoat/umbrella; hot → light clothes, sunscreen, water). {t} = degrees.
// Agent-written translations: hi/ta/te/kn/ml (and ideally all non-English) need native-speaker review before store launch.
const WXT={
en:["City for weather","Type your city once. Only the city name goes to Open-Meteo to get the temperature. No GPS, no location permission.","Weather for: {c}","City not found. Try another spelling.","Couldn't check the city right now. Try again later."],
es:["Ciudad para el tiempo","Escribe tu ciudad una vez. Solo el nombre de la ciudad se envía a Open-Meteo para saber la temperatura. Sin GPS ni permiso de ubicación.","Tiempo de: {c}","Ciudad no encontrada. Prueba otra forma de escribirla.","No se pudo comprobar la ciudad ahora. Inténtalo más tarde."],
fr:["Ville pour la météo","Saisissez votre ville une fois. Seul le nom de la ville est envoyé à Open-Meteo pour connaître la température. Pas de GPS, pas d'autorisation de localisation.","Météo pour : {c}","Ville introuvable. Essayez une autre orthographe.","Impossible de vérifier la ville pour l'instant. Réessayez plus tard."],
de:["Stadt für das Wetter","Geben Sie Ihre Stadt einmal ein. Nur der Stadtname geht an Open-Meteo, um die Temperatur abzurufen. Kein GPS, keine Standortberechtigung.","Wetter für: {c}","Stadt nicht gefunden. Versuchen Sie eine andere Schreibweise.","Die Stadt konnte gerade nicht geprüft werden. Bitte später erneut versuchen."],
pt:["Cidade para o clima","Digite sua cidade uma vez. Só o nome da cidade vai para a Open-Meteo para saber a temperatura. Sem GPS e sem permissão de localização.","Clima de: {c}","Cidade não encontrada. Tente outra grafia.","Não foi possível verificar a cidade agora. Tente mais tarde."],
it:["Città per il meteo","Scrivi la tua città una volta. Solo il nome della città viene inviato a Open-Meteo per conoscere la temperatura. Niente GPS, nessun permesso di posizione.","Meteo per: {c}","Città non trovata. Prova a scriverla in un altro modo.","Impossibile verificare la città ora. Riprova più tardi."],
hi:["मौसम के लिए शहर","अपना शहर एक बार लिखें। तापमान जानने के लिए सिर्फ़ शहर का नाम Open-Meteo को भेजा जाता है। न GPS, न लोकेशन की अनुमति।","मौसम: {c}","शहर नहीं मिला। दूसरी वर्तनी आज़माएँ।","अभी शहर नहीं जाँच सके। बाद में फिर कोशिश करें।"],
ta:["வானிலைக்கான நகரம்","உங்கள் நகரத்தை ஒருமுறை உள்ளிடுங்கள். வெப்பநிலையை அறிய நகரத்தின் பெயர் மட்டுமே Open-Meteo-க்கு அனுப்பப்படும். GPS இல்லை, இருப்பிட அனுமதி இல்லை.","வானிலை: {c}","நகரம் கிடைக்கவில்லை. வேறு எழுத்துக்கூட்டலில் முயலுங்கள்.","இப்போது நகரத்தைச் சரிபார்க்க முடியவில்லை. பிறகு முயலுங்கள்."],
te:["వాతావరణం కోసం నగరం","మీ నగరాన్ని ఒక్కసారి టైప్ చేయండి. ఉష్ణోగ్రత తెలుసుకోవడానికి నగరం పేరు మాత్రమే Open-Meteoకి పంపబడుతుంది. GPS లేదు, లొకేషన్ అనుమతి లేదు.","వాతావరణం: {c}","నగరం దొరకలేదు. వేరే స్పెల్లింగ్ ప్రయత్నించండి.","ఇప్పుడు నగరాన్ని తనిఖీ చేయలేకపోయాం. తర్వాత మళ్లీ ప్రయత్నించండి."],
kn:["ಹವಾಮಾನಕ್ಕಾಗಿ ನಗರ","ನಿಮ್ಮ ನಗರವನ್ನು ಒಮ್ಮೆ ಟೈಪ್ ಮಾಡಿ. ತಾಪಮಾನ ತಿಳಿಯಲು ನಗರದ ಹೆಸರನ್ನು ಮಾತ್ರ Open-Meteoಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. GPS ಇಲ್ಲ, ಸ್ಥಳದ ಅನುಮತಿ ಇಲ್ಲ.","ಹವಾಮಾನ: {c}","ನಗರ ಸಿಗಲಿಲ್ಲ. ಬೇರೆ ಕಾಗುಣಿತ ಪ್ರಯತ್ನಿಸಿ.","ಈಗ ನಗರವನ್ನು ಪರಿಶೀಲಿಸಲಾಗಲಿಲ್ಲ. ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ."],
ml:["കാലാവസ്ഥയ്ക്കുള്ള നഗരം","നിങ്ങളുടെ നഗരം ഒരിക്കൽ ടൈപ്പ് ചെയ്യുക. താപനില അറിയാൻ നഗരത്തിന്റെ പേര് മാത്രം Open-Meteo-യിലേക്ക് അയയ്ക്കും. GPS ഇല്ല, ലൊക്കേഷൻ അനുമതി ഇല്ല.","കാലാവസ്ഥ: {c}","നഗരം കണ്ടെത്തിയില്ല. മറ്റൊരു സ്പെല്ലിംഗ് ശ്രമിക്കുക.","ഇപ്പോൾ നഗരം പരിശോധിക്കാനായില്ല. പിന്നീട് വീണ്ടും ശ്രമിക്കുക."],
zh:["天气所在城市","只需输入一次您的城市。只会把城市名称发送给 Open-Meteo 来获取气温。不用 GPS，也不需要定位权限。","天气：{c}","找不到该城市，请换一种写法。","暂时无法查询城市，请稍后再试。"],
ja:["天気の都市","お住まいの都市を一度だけ入力してください。気温を調べるために都市名だけを Open-Meteo に送ります。GPS や位置情報の許可は使いません。","天気：{c}","都市が見つかりません。別のつづりで試してください。","今は都市を確認できません。後でもう一度お試しください。"],
ko:["날씨용 도시","도시를 한 번만 입력하세요. 기온을 알기 위해 도시 이름만 Open-Meteo로 보냅니다. GPS도, 위치 권한도 쓰지 않습니다.","날씨: {c}","도시를 찾을 수 없습니다. 다른 철자로 해 보세요.","지금은 도시를 확인할 수 없습니다. 나중에 다시 시도하세요."],
ar:["المدينة للطقس","اكتب مدينتك مرة واحدة. يُرسَل اسم المدينة فقط إلى Open-Meteo لمعرفة درجة الحرارة. بلا GPS وبلا إذن موقع.","الطقس في: {c}","لم يتم العثور على المدينة. جرّب تهجئة أخرى.","تعذّر التحقق من المدينة الآن. حاول لاحقًا."],
ru:["Город для погоды","Введите город один раз. В Open-Meteo отправляется только название города, чтобы узнать температуру. Без GPS и без доступа к геолокации.","Погода: {c}","Город не найден. Попробуйте другое написание.","Сейчас не удалось проверить город. Попробуйте позже."]
};
for(const l in WXT)if(I18N[l]){const v=WXT[l];Object.assign(I18N[l],{cityQ:v[0],cityHelp:v[1],cityFound:v[2],cityNone:v[3],cityErr:v[4]})}
const WXR={
en:["It may rain today. Take a raincoat or an umbrella.", "It will be hot today, about {t} degrees. Wear light clothes, put on sunscreen and take water."],
es:["Hoy puede llover. Lleva un impermeable o un paraguas.", "Hoy hará calor, unos {t} grados. Ponte ropa ligera, crema solar y lleva agua."],
fr:["Il peut pleuvoir aujourd'hui. Prends un imperméable ou un parapluie.", "Il va faire chaud aujourd'hui, environ {t} degrés. Mets des vêtements légers, de la crème solaire et prends de l'eau."],
de:["Heute kann es regnen. Nimm eine Regenjacke oder einen Schirm mit.", "Heute wird es heiß, etwa {t} Grad. Zieh leichte Sachen an, creme dich mit Sonnencreme ein und nimm Wasser mit."],
pt:["Pode chover hoje. Leve uma capa de chuva ou um guarda-chuva.", "Hoje vai fazer calor, uns {t} graus. Use roupa leve, passe protetor solar e leve água."],
it:["Oggi potrebbe piovere. Prendi un impermeabile o un ombrello.", "Oggi farà caldo, circa {t} gradi. Metti vestiti leggeri, la crema solare e porta l'acqua."],
hi:["आज बारिश हो सकती है। रेनकोट या छाता ले लो।", "आज गर्मी होगी, लगभग {t} डिग्री। हल्के कपड़े पहनो, सनस्क्रीन लगाओ और पानी ले लो।"],
ta:["இன்று மழை பெய்யலாம். மழைக்கோட்டு அல்லது குடை எடுத்துக்கொள்.", "இன்று வெயில் அதிகமாக இருக்கும், சுமார் {t} டிகிரி. லேசான உடை அணி, சன்ஸ்கிரீன் தடவு, தண்ணீர் எடுத்துக்கொள்."],
te:["ఈరోజు వర్షం పడవచ్చు. రెయిన్‌కోట్ లేదా గొడుగు తీసుకెళ్లు.", "ఈరోజు ఎండ ఎక్కువగా ఉంటుంది, సుమారు {t} డిగ్రీలు. తేలికపాటి బట్టలు వేసుకో, సన్‌స్క్రీన్ రాసుకో, నీళ్లు తీసుకెళ్లు."],
kn:["ಇಂದು ಮಳೆ ಬರಬಹುದು. ರೇನ್‌ಕೋಟ್ ಅಥವಾ ಛತ್ರಿ ತೆಗೆದುಕೊ.", "ಇಂದು ಬಿಸಿಲು ಹೆಚ್ಚು, ಸುಮಾರು {t} ಡಿಗ್ರಿ. ಹಗುರವಾದ ಬಟ್ಟೆ ಹಾಕಿಕೊ, ಸನ್‌ಸ್ಕ್ರೀನ್ ಹಚ್ಚಿಕೊ, ನೀರು ತೆಗೆದುಕೊ."],
ml:["ഇന്ന് മഴ പെയ്തേക്കാം. റെയിൻകോട്ടോ കുടയോ എടുക്കൂ.", "ഇന്ന് നല്ല ചൂടായിരിക്കും, ഏകദേശം {t} ഡിഗ്രി. ലഘുവായ വസ്ത്രം ധരിക്കൂ, സൺസ്ക്രീൻ പുരട്ടൂ, വെള്ളം എടുക്കൂ."],
zh:["今天可能下雨。带上雨衣或雨伞。", "今天会很热，大约 {t} 度。穿轻薄的衣服，涂防晒霜，带上水。"],
ja:["きょうは雨がふるかもしれないよ。レインコートかかさを持っていこう。", "きょうは暑くなるよ、だいたい {t} 度。すずしい服を着て、日焼け止めをぬって、水を持っていこう。"],
ko:["오늘 비가 올 수 있어요. 우비나 우산을 챙기세요.", "오늘은 더워요, 약 {t}도예요. 가벼운 옷을 입고, 선크림을 바르고, 물을 챙기세요."],
ar:["قد تمطر اليوم. خذ معطف مطر أو مظلة.", "سيكون الجو حارًا اليوم، حوالي {t} درجة. البس ملابس خفيفة، وضع واقي الشمس، وخذ ماءً."],
ru:["Сегодня может быть дождь. Возьми дождевик или зонт.", "Сегодня будет жарко, около {t} градусов. Надень лёгкую одежду, намажься солнцезащитным кремом и возьми воду."]
};
for(const l in WXR)if(I18N[l])Object.assign(I18N[l],{wRain:WXR[l][0],wHot:WXR[l][1]});
