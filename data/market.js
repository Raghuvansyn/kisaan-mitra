/**
 * KisaanMitra — Mock Market & Price Data
 * Realistic MSP + Mandi prices for 8 key crops × 5 regions.
 * Based on actual 2025-26 MSP and indicative June 2026 mandi rates.
 */

const MARKET_DATA = {
  crops: {
    wheat: {
      name: 'Wheat',
      nameHi: 'गेहूं',
      icon: '🌾',
      msp: 2585,
      unit: '₹/quintal',
      season: 'Rabi',
      seasonHi: 'रबी',
      harvestMonth: 'March-April',
      harvestMonthHi: 'मार्च-अप्रैल',
      regionalPrices: {
        punjab: { min: 2150, max: 2320, modal: 2250, trend: 'down', trendIcon: '📉' },
        maharashtra: { min: 2100, max: 2280, modal: 2180, trend: 'down', trendIcon: '📉' },
        up: { min: 2080, max: 2250, modal: 2150, trend: 'down', trendIcon: '📉' },
        karnataka: { min: 2200, max: 2400, modal: 2300, trend: 'stable', trendIcon: '➡️' },
        rajasthan: { min: 2100, max: 2300, modal: 2200, trend: 'down', trendIcon: '📉' }
      },
      advice: {
        en: 'Wheat prices are below MSP in most mandis. Consider selling through government procurement centres (FCI) to get guaranteed MSP of ₹2,585/qtl. Store in clean, dry godowns if waiting for better prices.',
        hi: 'अधिकतर मंडियों में गेहूं की कीमत MSP से कम है। गारंटीड MSP ₹2,585/क्विंटल पाने के लिए सरकारी खरीद केंद्रों (FCI) से बेचें। बेहतर कीमत का इंतज़ार हो तो साफ, सूखे गोदाम में रखें।'
      }
    },
    rice: {
      name: 'Rice (Paddy)',
      nameHi: 'धान (चावल)',
      icon: '🍚',
      msp: 2369,
      unit: '₹/quintal',
      season: 'Kharif',
      seasonHi: 'खरीफ',
      harvestMonth: 'October-November',
      harvestMonthHi: 'अक्टूबर-नवंबर',
      regionalPrices: {
        punjab: { min: 3200, max: 3800, modal: 3500, trend: 'up', trendIcon: '📈' },
        maharashtra: { min: 3100, max: 3600, modal: 3350, trend: 'up', trendIcon: '📈' },
        up: { min: 3000, max: 3500, modal: 3250, trend: 'stable', trendIcon: '➡️' },
        karnataka: { min: 3300, max: 3900, modal: 3600, trend: 'up', trendIcon: '📈' },
        rajasthan: { min: 3100, max: 3700, modal: 3400, trend: 'stable', trendIcon: '➡️' }
      },
      advice: {
        en: 'Rice prices are well above MSP — good time to sell stored stock. Basmati varieties fetching premium of ₹4,000-6,000/qtl. Organic certified rice can get 20-30% premium in specialty markets.',
        hi: 'चावल की कीमत MSP से काफी ऊपर है — भंडारित स्टॉक बेचने का अच्छा समय। बासमती किस्मों को ₹4,000-6,000/क्विंटल प्रीमियम मिल रहा है। जैविक प्रमाणित चावल को विशेष बाज़ारों में 20-30% प्रीमियम मिल सकता है।'
      }
    },
    tomato: {
      name: 'Tomato',
      nameHi: 'टमाटर',
      icon: '🍅',
      msp: null,
      mspNote: 'No MSP (perishable crop)',
      mspNoteHi: 'कोई MSP नहीं (जल्दी खराब होने वाली फसल)',
      unit: '₹/quintal',
      season: 'Year-round',
      seasonHi: 'साल भर',
      harvestMonth: 'Multiple cycles',
      harvestMonthHi: 'कई चक्र',
      regionalPrices: {
        punjab: { min: 1200, max: 1800, modal: 1500, trend: 'stable', trendIcon: '➡️' },
        maharashtra: { min: 1000, max: 1600, modal: 1300, trend: 'down', trendIcon: '📉' },
        up: { min: 1100, max: 1700, modal: 1400, trend: 'stable', trendIcon: '➡️' },
        karnataka: { min: 1300, max: 2000, modal: 1650, trend: 'up', trendIcon: '📈' },
        rajasthan: { min: 1200, max: 1900, modal: 1550, trend: 'stable', trendIcon: '➡️' }
      },
      advice: {
        en: 'Tomato prices stable now but monsoon crop may crash prices in Aug-Sep. Consider staggered planting to avoid market glut. Process into sun-dried tomatoes or pickle for value addition.',
        hi: 'टमाटर की कीमत अभी स्थिर है लेकिन मानसून फसल से अगस्त-सितंबर में कीमत गिर सकती है। बाज़ार में भरमार से बचने के लिए अलग-अलग समय पर लगाएं। सूखे टमाटर या अचार बनाकर मूल्य बढ़ाएं।'
      }
    },
    onion: {
      name: 'Onion',
      nameHi: 'प्याज',
      icon: '🧅',
      msp: null,
      mspNote: 'No MSP (perishable crop)',
      mspNoteHi: 'कोई MSP नहीं (जल्दी खराब होने वाली फसल)',
      unit: '₹/quintal',
      season: 'Rabi/Kharif/Late Kharif',
      seasonHi: 'रबी/खरीफ/देर खरीफ',
      harvestMonth: 'Multiple seasons',
      harvestMonthHi: 'कई मौसम',
      regionalPrices: {
        punjab: { min: 1800, max: 2800, modal: 2300, trend: 'up', trendIcon: '📈' },
        maharashtra: { min: 1600, max: 3200, modal: 2400, trend: 'up', trendIcon: '📈' },
        up: { min: 1700, max: 2600, modal: 2150, trend: 'up', trendIcon: '📈' },
        karnataka: { min: 1900, max: 3000, modal: 2450, trend: 'up', trendIcon: '📈' },
        rajasthan: { min: 1500, max: 2500, modal: 2000, trend: 'stable', trendIcon: '➡️' }
      },
      advice: {
        en: 'Onion prices are rising as summer stock depletes. Good time to sell stored Rabi onions. Store remaining stock in well-ventilated onion storage structures. Kharif planting: start nursery now for July transplanting.',
        hi: 'गर्मी का स्टॉक खत्म होने से प्याज की कीमत बढ़ रही है। भंडारित रबी प्याज बेचने का अच्छा समय। शेष स्टॉक हवादार प्याज भंडारण ढांचे में रखें। खरीफ बुवाई: जुलाई रोपाई के लिए अभी नर्सरी शुरू करें।'
      }
    },
    cotton: {
      name: 'Cotton',
      nameHi: 'कपास',
      icon: '🏵️',
      msp: 7710,
      unit: '₹/quintal',
      season: 'Kharif',
      seasonHi: 'खरीफ',
      harvestMonth: 'October-January',
      harvestMonthHi: 'अक्टूबर-जनवरी',
      regionalPrices: {
        punjab: { min: 6500, max: 7200, modal: 6850, trend: 'down', trendIcon: '📉' },
        maharashtra: { min: 6400, max: 7000, modal: 6700, trend: 'down', trendIcon: '📉' },
        up: { min: 6600, max: 7100, modal: 6800, trend: 'down', trendIcon: '📉' },
        karnataka: { min: 6500, max: 7100, modal: 6800, trend: 'down', trendIcon: '📉' },
        rajasthan: { min: 6300, max: 6900, modal: 6600, trend: 'down', trendIcon: '📉' }
      },
      advice: {
        en: 'Cotton prices are below MSP (₹7,710) in all regions. Sell remaining stock through CCI (Cotton Corporation of India) government procurement at MSP. For new season: focus on organic cotton — premium of ₹500-1000/qtl in APMC organic yards.',
        hi: 'सभी क्षेत्रों में कपास की कीमत MSP (₹7,710) से कम है। CCI (भारतीय कपास निगम) सरकारी खरीद के ज़रिए MSP पर बेचें। नए मौसम के लिए: जैविक कपास पर ध्यान दें — APMC जैविक यार्ड में ₹500-1000/क्विंटल प्रीमियम।'
      }
    },
    soybean: {
      name: 'Soybean',
      nameHi: 'सोयाबीन',
      icon: '🫘',
      msp: 5328,
      unit: '₹/quintal',
      season: 'Kharif',
      seasonHi: 'खरीफ',
      harvestMonth: 'October-November',
      harvestMonthHi: 'अक्टूबर-नवंबर',
      regionalPrices: {
        punjab: { min: 4400, max: 4900, modal: 4650, trend: 'down', trendIcon: '📉' },
        maharashtra: { min: 4300, max: 4800, modal: 4550, trend: 'down', trendIcon: '📉' },
        up: { min: 4200, max: 4700, modal: 4450, trend: 'down', trendIcon: '📉' },
        karnataka: { min: 4500, max: 5000, modal: 4750, trend: 'stable', trendIcon: '➡️' },
        rajasthan: { min: 4100, max: 4600, modal: 4350, trend: 'down', trendIcon: '📉' }
      },
      advice: {
        en: 'Soybean prices significantly below MSP (₹5,328). Explore NAFED procurement for MSP. New Kharif season: sow with monsoon onset. Use Beejamrit seed treatment + Rhizobium culture for organic soybean. Yellow mosaic resistant varieties recommended.',
        hi: 'सोयाबीन की कीमत MSP (₹5,328) से काफी कम है। MSP के लिए NAFED खरीद से बेचें। नए खरीफ मौसम: मानसून शुरू होने पर बोएं। जैविक सोयाबीन के लिए बीजामृत + राइज़ोबियम कल्चर से बीज उपचार करें। पीला मोज़ेक प्रतिरोधी किस्मों की सिफारिश।'
      }
    },
    maize: {
      name: 'Maize',
      nameHi: 'मक्का',
      icon: '🌽',
      msp: 2400,
      unit: '₹/quintal',
      season: 'Kharif',
      seasonHi: 'खरीफ',
      harvestMonth: 'September-October',
      harvestMonthHi: 'सितंबर-अक्टूबर',
      regionalPrices: {
        punjab: { min: 1900, max: 2100, modal: 2000, trend: 'down', trendIcon: '📉' },
        maharashtra: { min: 1850, max: 2050, modal: 1950, trend: 'down', trendIcon: '📉' },
        up: { min: 1800, max: 2000, modal: 1900, trend: 'down', trendIcon: '📉' },
        karnataka: { min: 1950, max: 2150, modal: 2050, trend: 'stable', trendIcon: '➡️' },
        rajasthan: { min: 1750, max: 1950, modal: 1850, trend: 'down', trendIcon: '📉' }
      },
      advice: {
        en: 'Maize prices below MSP (₹2,400) across India. Sell through government procurement where available. Sweet corn and baby corn varieties fetch ₹8,000-15,000/qtl — consider diversification. For Kharif: watch for fall armyworm — use neem oil + sand in whorl treatment.',
        hi: 'पूरे भारत में मक्का MSP (₹2,400) से कम है। जहां उपलब्ध हो सरकारी खरीद से बेचें। स्वीट कॉर्न और बेबी कॉर्न ₹8,000-15,000/क्विंटल मिलता है — विविधीकरण पर विचार करें। खरीफ के लिए: फॉल आर्मीवर्म से सावधान — गोभ में नीम तेल + रेत डालें।'
      }
    },
    potato: {
      name: 'Potato',
      nameHi: 'आलू',
      icon: '🥔',
      msp: null,
      mspNote: 'No MSP (perishable crop)',
      mspNoteHi: 'कोई MSP नहीं (जल्दी खराब होने वाली फसल)',
      unit: '₹/quintal',
      season: 'Rabi',
      seasonHi: 'रबी',
      harvestMonth: 'February-March',
      harvestMonthHi: 'फरवरी-मार्च',
      regionalPrices: {
        punjab: { min: 1100, max: 1450, modal: 1280, trend: 'stable', trendIcon: '➡️' },
        maharashtra: { min: 1200, max: 1500, modal: 1350, trend: 'stable', trendIcon: '➡️' },
        up: { min: 1000, max: 1350, modal: 1180, trend: 'down', trendIcon: '📉' },
        karnataka: { min: 1300, max: 1600, modal: 1450, trend: 'stable', trendIcon: '➡️' },
        rajasthan: { min: 1100, max: 1400, modal: 1250, trend: 'stable', trendIcon: '➡️' }
      },
      advice: {
        en: 'Potato prices are stable but low — cold storage costs eating into margins. Sell gradually to avoid market flood. Process into chips/dehydrated potato for value addition. For organic potatoes: PGS certification can fetch 30-40% premium in urban markets.',
        hi: 'आलू की कीमत स्थिर लेकिन कम है — शीतगृह लागत मुनाफे में कमी कर रही है। बाज़ार में भरमार से बचने के लिए धीरे-धीरे बेचें। चिप्स/सूखा आलू बनाकर मूल्य बढ़ाएं। जैविक आलू के लिए: PGS प्रमाणन से शहरी बाज़ारों में 30-40% प्रीमियम मिल सकता है।'
      }
    }
  },
  // Government procurement information
  procurement: {
    en: {
      title: 'Government Procurement Options',
      options: [
        'FCI (Food Corporation of India) — for wheat and rice at MSP',
        'NAFED — for oilseeds and pulses at MSP',
        'CCI (Cotton Corporation of India) — for cotton at MSP',
        'State Cooperative Societies — varies by state',
        'eNAM (National Agriculture Market) — online mandi platform'
      ]
    },
    hi: {
      title: 'सरकारी खरीद विकल्प',
      options: [
        'FCI (भारतीय खाद्य निगम) — MSP पर गेहूं और चावल के लिए',
        'NAFED — MSP पर तिलहन और दलहन के लिए',
        'CCI (भारतीय कपास निगम) — MSP पर कपास के लिए',
        'राज्य सहकारी समितियां — राज्य अनुसार',
        'eNAM (राष्ट्रीय कृषि बाज़ार) — ऑनलाइन मंडी प्लेटफॉर्म'
      ]
    }
  },
  // Organic premium information
  organicPremium: {
    en: {
      title: 'Organic/Natural Farming Price Advantage',
      points: [
        'PGS-India certified produce gets 20-40% premium',
        'NPOP certified for export can get 50-100% premium',
        'Direct-to-consumer through FPOs can bypass middlemen',
        'Organic mandis operational in several states',
        'Jaivik Kheti portal (jaivikkheti.in) for online organic sales'
      ]
    },
    hi: {
      title: 'जैविक/प्राकृतिक खेती मूल्य लाभ',
      points: [
        'PGS-India प्रमाणित उपज पर 20-40% प्रीमियम',
        'निर्यात के लिए NPOP प्रमाणित पर 50-100% प्रीमियम',
        'FPO के ज़रिए सीधे उपभोक्ता को बेचकर बिचौलियों से बचें',
        'कई राज्यों में जैविक मंडी संचालित',
        'जैविक खेती पोर्टल (jaivikkheti.in) से ऑनलाइन जैविक बिक्री'
      ]
    }
  }
};

// Helper: Get all crop names for keyword matching
const CROP_KEYWORDS = {
  wheat: ['wheat', 'gehun', 'गेहूं', 'gehu', 'atta', 'आटा'],
  rice: ['rice', 'chawal', 'चावल', 'dhan', 'धान', 'paddy'],
  tomato: ['tomato', 'tamatar', 'टमाटर', 'tamaatar'],
  onion: ['onion', 'pyaz', 'प्याज', 'pyaaz', 'kanda'],
  cotton: ['cotton', 'kapas', 'कपास', 'kapaas', 'rui'],
  soybean: ['soybean', 'soyabean', 'सोयाबीन', 'soya'],
  maize: ['maize', 'makka', 'मक्का', 'corn', 'bhutta', 'भुट्टा'],
  potato: ['potato', 'aloo', 'आलू', 'aaloo']
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MARKET_DATA, CROP_KEYWORDS };
}
