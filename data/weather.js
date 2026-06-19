/**
 * KisaanMitra — Mock Regional Weather Data
 * Realistic 3-day forecasts for 5 major Indian farming regions.
 * Data reflects typical June monsoon conditions.
 */

const WEATHER_DATA = {
  punjab: {
    region: 'Punjab',
    regionHi: 'पंजाब',
    icon: '🌾',
    currentSeason: 'Kharif Preparation / Pre-Monsoon',
    currentSeasonHi: 'खरीफ तैयारी / मानसून पूर्व',
    forecast: [
      {
        day: 'Today',
        dayHi: 'आज',
        date: new Date().toLocaleDateString('en-IN'),
        tempMax: 41,
        tempMin: 28,
        humidity: 52,
        rainfall: 0,
        condition: 'Hot & Partly Cloudy',
        conditionHi: 'गर्म और आंशिक बादल',
        icon: '🌤️',
        wind: '18 km/h NW'
      },
      {
        day: 'Tomorrow',
        dayHi: 'कल',
        date: new Date(Date.now() + 86400000).toLocaleDateString('en-IN'),
        tempMax: 39,
        tempMin: 27,
        humidity: 61,
        rainfall: 8,
        condition: 'Thunderstorm likely',
        conditionHi: 'आंधी-तूफान की संभावना',
        icon: '⛈️',
        wind: '22 km/h W'
      },
      {
        day: 'Day After',
        dayHi: 'परसों',
        date: new Date(Date.now() + 172800000).toLocaleDateString('en-IN'),
        tempMax: 37,
        tempMin: 26,
        humidity: 65,
        rainfall: 15,
        condition: 'Light rain, cloudy',
        conditionHi: 'हल्की बारिश, बादल',
        icon: '🌧️',
        wind: '15 km/h W'
      }
    ],
    advisory: {
      en: [
        '🌱 Ideal time to prepare fields for paddy transplanting',
        '💧 Pre-monsoon showers expected — hold off heavy irrigation',
        '🌾 Begin nursery preparation for basmati rice',
        '⚠️ Watch for pre-monsoon dust storms — protect young seedlings',
        '🐛 Rising humidity may trigger stem borer activity — install light traps'
      ],
      hi: [
        '🌱 धान की रोपाई के लिए खेत तैयार करने का सही समय',
        '💧 मानसून पूर्व बारिश की उम्मीद — भारी सिंचाई रोकें',
        '🌾 बासमती चावल की नर्सरी तैयारी शुरू करें',
        '⚠️ मानसून पूर्व धूल भरी आंधी से बचें — पौध की रक्षा करें',
        '🐛 बढ़ती नमी से तना छेदक सक्रिय हो सकता है — प्रकाश जाल लगाएं'
      ]
    },
    suitableCrops: ['Rice (Paddy)', 'Cotton', 'Maize', 'Sugarcane', 'Moong'],
    suitableCropsHi: ['धान', 'कपास', 'मक्का', 'गन्ना', 'मूंग']
  },
  maharashtra: {
    region: 'Maharashtra',
    regionHi: 'महाराष्ट्र',
    icon: '🌿',
    currentSeason: 'Kharif Season — Monsoon Onset',
    currentSeasonHi: 'खरीफ मौसम — मानसून शुरू',
    forecast: [
      {
        day: 'Today',
        dayHi: 'आज',
        date: new Date().toLocaleDateString('en-IN'),
        tempMax: 32,
        tempMin: 24,
        humidity: 78,
        rainfall: 25,
        condition: 'Moderate rain',
        conditionHi: 'मध्यम बारिश',
        icon: '🌧️',
        wind: '20 km/h SW'
      },
      {
        day: 'Tomorrow',
        dayHi: 'कल',
        date: new Date(Date.now() + 86400000).toLocaleDateString('en-IN'),
        tempMax: 30,
        tempMin: 23,
        humidity: 84,
        rainfall: 40,
        condition: 'Heavy rain expected',
        conditionHi: 'भारी बारिश की संभावना',
        icon: '⛈️',
        wind: '25 km/h SW'
      },
      {
        day: 'Day After',
        dayHi: 'परसों',
        date: new Date(Date.now() + 172800000).toLocaleDateString('en-IN'),
        tempMax: 29,
        tempMin: 22,
        humidity: 86,
        rainfall: 35,
        condition: 'Continued rain',
        conditionHi: 'बारिश जारी',
        icon: '🌧️',
        wind: '18 km/h SW'
      }
    ],
    advisory: {
      en: [
        '🌱 Excellent time for soybean and cotton sowing with monsoon onset',
        '💧 Heavy rain expected — ensure field drainage is clear',
        '⚠️ High humidity increases risk of fungal diseases — keep Trichoderma ready',
        '🌿 Apply Jeevamrit before sowing for soil bio-activation',
        '🐛 Monsoon triggers fall armyworm in maize — watch for early signs'
      ],
      hi: [
        '🌱 मानसून शुरू होने से सोयाबीन और कपास बोने का उत्तम समय',
        '💧 भारी बारिश की उम्मीद — खेत की जल निकासी साफ़ रखें',
        '⚠️ अधिक नमी से फफूंद रोगों का खतरा — ट्राइकोडर्मा तैयार रखें',
        '🌿 बुवाई से पहले मिट्टी के जैव-सक्रियण के लिए जीवामृत डालें',
        '🐛 मानसून में मक्का में फॉल आर्मीवर्म सक्रिय — शुरुआती लक्षण देखें'
      ]
    },
    suitableCrops: ['Soybean', 'Cotton', 'Maize', 'Onion (nursery)', 'Jowar'],
    suitableCropsHi: ['सोयाबीन', 'कपास', 'मक्का', 'प्याज (नर्सरी)', 'ज्वार']
  },
  up: {
    region: 'Uttar Pradesh',
    regionHi: 'उत्तर प्रदेश',
    icon: '🌻',
    currentSeason: 'Pre-Monsoon / Early Kharif',
    currentSeasonHi: 'मानसून पूर्व / शुरुआती खरीफ',
    forecast: [
      {
        day: 'Today',
        dayHi: 'आज',
        date: new Date().toLocaleDateString('en-IN'),
        tempMax: 43,
        tempMin: 30,
        humidity: 48,
        rainfall: 0,
        condition: 'Very hot, hazy',
        conditionHi: 'बहुत गर्म, धुंधला',
        icon: '🌡️',
        wind: '12 km/h E'
      },
      {
        day: 'Tomorrow',
        dayHi: 'कल',
        date: new Date(Date.now() + 86400000).toLocaleDateString('en-IN'),
        tempMax: 42,
        tempMin: 29,
        humidity: 55,
        rainfall: 0,
        condition: 'Hot, building clouds',
        conditionHi: 'गर्म, बादल बन रहे हैं',
        icon: '⛅',
        wind: '14 km/h SE'
      },
      {
        day: 'Day After',
        dayHi: 'परसों',
        date: new Date(Date.now() + 172800000).toLocaleDateString('en-IN'),
        tempMax: 38,
        tempMin: 27,
        humidity: 68,
        rainfall: 20,
        condition: 'Thunderstorms, rain',
        conditionHi: 'आंधी-तूफान, बारिश',
        icon: '⛈️',
        wind: '28 km/h W'
      }
    ],
    advisory: {
      en: [
        '🌡️ Extreme heat — avoid field work between 11 AM to 4 PM',
        '💧 Irrigate sugarcane and vegetable crops in early morning only',
        '🌱 Prepare rice nurseries in irrigated plots — monsoon arriving soon',
        '🌾 Good time to apply Panchagavya to standing sugarcane crop',
        '⚠️ Post-thunderstorm humidity may trigger potato late blight in stored tubers'
      ],
      hi: [
        '🌡️ भीषण गर्मी — सुबह 11 से शाम 4 बजे के बीच खेत का काम न करें',
        '💧 गन्ना और सब्ज़ी फसलों को सिर्फ सुबह जल्दी सिंचाई करें',
        '🌱 सिंचित भूखंडों में धान की नर्सरी तैयार करें — मानसून जल्द आ रहा है',
        '🌾 खड़ी गन्ने की फसल में पंचगव्य डालने का अच्छा समय',
        '⚠️ तूफान के बाद की नमी से भंडारित आलू में पिछेता झुलसा हो सकता है'
      ]
    },
    suitableCrops: ['Rice (Paddy)', 'Sugarcane', 'Maize', 'Moong', 'Urad'],
    suitableCropsHi: ['धान', 'गन्ना', 'मक्का', 'मूंग', 'उड़द']
  },
  karnataka: {
    region: 'Karnataka',
    regionHi: 'कर्नाटक',
    icon: '☕',
    currentSeason: 'SW Monsoon Active / Kharif',
    currentSeasonHi: 'दक्षिण-पश्चिम मानसून सक्रिय / खरीफ',
    forecast: [
      {
        day: 'Today',
        dayHi: 'आज',
        date: new Date().toLocaleDateString('en-IN'),
        tempMax: 28,
        tempMin: 21,
        humidity: 88,
        rainfall: 45,
        condition: 'Heavy rain',
        conditionHi: 'भारी बारिश',
        icon: '🌧️',
        wind: '30 km/h SW'
      },
      {
        day: 'Tomorrow',
        dayHi: 'कल',
        date: new Date(Date.now() + 86400000).toLocaleDateString('en-IN'),
        tempMax: 27,
        tempMin: 20,
        humidity: 92,
        rainfall: 60,
        condition: 'Very heavy rain',
        conditionHi: 'बहुत भारी बारिश',
        icon: '⛈️',
        wind: '35 km/h SW'
      },
      {
        day: 'Day After',
        dayHi: 'परसों',
        date: new Date(Date.now() + 172800000).toLocaleDateString('en-IN'),
        tempMax: 26,
        tempMin: 20,
        humidity: 90,
        rainfall: 50,
        condition: 'Heavy rain continues',
        conditionHi: 'भारी बारिश जारी',
        icon: '🌧️',
        wind: '28 km/h SW'
      }
    ],
    advisory: {
      en: [
        '⛈️ Heavy monsoon — avoid sowing until rain intensity reduces',
        '💧 Ensure drainage channels are functional — waterlogging risk high',
        '🌿 Good time for paddy transplanting in lowland areas after rain break',
        '⚠️ Very high humidity — spray Pseudomonas on rice as preventive for blast',
        '☕ Coffee/Areca gardens: ensure mulching to prevent soil erosion'
      ],
      hi: [
        '⛈️ भारी मानसून — बारिश की तीव्रता कम होने तक बुवाई से बचें',
        '💧 जल निकासी नाली काम कर रही हो — जलभराव का खतरा अधिक',
        '🌿 बारिश रुकने के बाद तराई क्षेत्रों में धान रोपाई का अच्छा समय',
        '⚠️ बहुत अधिक नमी — ब्लास्ट रोकथाम के लिए धान पर स्यूडोमोनास छिड़कें',
        '☕ कॉफी/सुपारी बाग: मिट्टी कटाव रोकने के लिए मल्चिंग करें'
      ]
    },
    suitableCrops: ['Rice (Paddy)', 'Ragi', 'Maize', 'Groundnut', 'Red gram'],
    suitableCropsHi: ['धान', 'रागी', 'मक्का', 'मूंगफली', 'तुअर दाल']
  },
  rajasthan: {
    region: 'Rajasthan',
    regionHi: 'राजस्थान',
    icon: '🏜️',
    currentSeason: 'Pre-Monsoon / Extreme Summer',
    currentSeasonHi: 'मानसून पूर्व / अत्यधिक गर्मी',
    forecast: [
      {
        day: 'Today',
        dayHi: 'आज',
        date: new Date().toLocaleDateString('en-IN'),
        tempMax: 45,
        tempMin: 32,
        humidity: 22,
        rainfall: 0,
        condition: 'Extreme heat, dust',
        conditionHi: 'अत्यधिक गर्मी, धूल',
        icon: '🌡️',
        wind: '25 km/h W'
      },
      {
        day: 'Tomorrow',
        dayHi: 'कल',
        date: new Date(Date.now() + 86400000).toLocaleDateString('en-IN'),
        tempMax: 44,
        tempMin: 31,
        humidity: 28,
        rainfall: 0,
        condition: 'Very hot, dust storm possible',
        conditionHi: 'बहुत गर्म, धूल भरी आंधी संभव',
        icon: '🌪️',
        wind: '35 km/h W'
      },
      {
        day: 'Day After',
        dayHi: 'परसों',
        date: new Date(Date.now() + 172800000).toLocaleDateString('en-IN'),
        tempMax: 42,
        tempMin: 30,
        humidity: 35,
        rainfall: 5,
        condition: 'Hot, trace rain possible',
        conditionHi: 'गर्म, मामूली बारिश संभव',
        icon: '🌤️',
        wind: '20 km/h SW'
      }
    ],
    advisory: {
      en: [
        '🌡️ Extreme heat alert — protect animals and workers from heat stroke',
        '💧 Water conservation critical — use drip irrigation for all crops',
        '🏜️ Prepare for Kharif: clean wells and water harvesting structures before monsoon',
        '🌱 Plan bajra (pearl millet) and guar sowing for when first rains arrive',
        '🐛 Dry conditions favour white grub in soil — apply neem cake in fields'
      ],
      hi: [
        '🌡️ अत्यधिक गर्मी चेतावनी — पशुओं और श्रमिकों को लू से बचाएं',
        '💧 जल संरक्षण ज़रूरी — सभी फसलों के लिए ड्रिप सिंचाई करें',
        '🏜️ खरीफ की तैयारी: मानसून से पहले कुएं और जल संचय ढांचे साफ करें',
        '🌱 पहली बारिश आने पर बाजरा और ग्वार बोने की योजना बनाएं',
        '🐛 सूखी स्थिति में मिट्टी में सफेद ग्रब पनपते हैं — खेत में नीम खली डालें'
      ]
    },
    suitableCrops: ['Bajra (Pearl Millet)', 'Guar', 'Moth', 'Sesame', 'Castor'],
    suitableCropsHi: ['बाजरा', 'ग्वार', 'मोठ', 'तिल', 'अरंडी']
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WEATHER_DATA };
}
