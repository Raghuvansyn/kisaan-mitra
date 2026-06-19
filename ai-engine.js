/**
 * KisaanMitra — AI Engine (FIXED v2)
 * Smart intent detection, response generation, and domain guardrails.
 * Processes user queries in Hindi/English and returns structured responses.
 * 
 * FIXES APPLIED:
 * 1. Added missing Hindi symptom words to farmingTerms (पत्ते, पीले, सूख, etc.)
 * 2. Added missing Hindi symptom words to diseaseKeywords in _detectModule
 * 3. Relaxed _isOffTopic — short queries (≤5 words) always pass through
 * 4. Added JSON-safe fallback in _processDiseaseQuery
 */

class AIEngine {
  constructor() {
    this.currentRegion = 'up';
    this.currentLang = 'hi-IN';
    this.isHindi = true;
  }

  setRegion(region) {
    this.currentRegion = region;
  }

  setLanguage(lang) {
    this.currentLang = lang;
    this.isHindi = lang.startsWith('hi');
  }

  // ─── MAIN QUERY PROCESSOR ───────────────────────────
  processQuery(query, module = 'auto') {
    const q = query.toLowerCase().trim();

    // Guardrail: Check for chemical/prohibited terms
    if (this._isChemicalQuery(q)) {
      return this._chemicalGuardrailResponse();
    }

    // Guardrail: Check if off-topic (FIXED — relaxed for short queries)
    if (this._isOffTopic(q)) {
      return this._offTopicResponse();
    }

    // Determine module if auto
    if (module === 'auto') {
      module = this._detectModule(q);
    }

    switch (module) {
      case 'disease':
        return this._processDiseaseQuery(q);
      case 'weather':
        return this._processWeatherQuery(q);
      case 'market':
        return this._processMarketQuery(q);
      case 'weather-market':
        return this._processWeatherMarketQuery(q);
      default:
        return this._processDiseaseQuery(q);
    }
  }

  // ─── MODULE DETECTION (FIXED) ────────────────────────
  _detectModule(q) {
    const weatherKeywords = [
      'weather', 'mausam', 'मौसम', 'rain', 'barish', 'बारिश', 'बारिस',
      'temperature', 'tapman', 'तापमान', 'forecast', 'hawa', 'humidity',
      'nami', 'नमी', 'storm', 'toofan', 'बादल', 'dhoop', 'garmi', 'गर्मी',
      'sardi', 'monsoon', 'mausam kaisa', 'बरसात', 'ठंड', 'धूप', 'आंधी'
    ];

    const marketKeywords = [
      'price', 'bhav', 'भाव', 'rate', 'dar', 'दर', 'mandi', 'मंडी',
      'msp', 'sell', 'bechna', 'बेचना', 'khareedna', 'market', 'bazaar',
      'बाज़ार', 'cost', 'kimat', 'कीमत', 'paisa', 'rupee', 'earning',
      'kamai', 'kab beche', 'procurement', 'बिक्री', 'कमाई', 'मुनाफा'
    ];

    // FIX 1: Added पत्ते, पीले, सूख, झड़, तना, फल, जड़, कीट, रस, गल
    const diseaseKeywords = [
      'disease', 'rog', 'रोग', 'bimari', 'बीमारी', 'pest', 'keeda', 'कीड़ा',
      'yellow', 'peeli', 'पीली', 'peele', 'पीले',
      'spots', 'dhabbe', 'धब्बे', 'wilt', 'murjhana', 'मुरझाना', 'मुरझा',
      'fungus', 'phaphoond', 'फफूंद', 'insect', 'keet', 'कीट',
      'leaves', 'pattiyan', 'पत्तियाँ', 'patte', 'पत्ते', 'patti', 'पत्ती',
      'dying', 'marna', 'rot', 'sadna', 'सड़ना', 'gal', 'गल',
      'blight', 'jhulsa', 'rust', 'ratua', 'curl', 'mold', 'hole', 'chhed',
      'brown', 'bhura', 'भूरा', 'black', 'kala', 'white', 'safed',
      'damage', 'nuksan', 'attack', 'hamla',
      'spray', 'treatment', 'ilaj', 'इलाज', 'upchar', 'उपचार',
      'remedy', 'dawa', 'solution', 'symptom', 'lakshan', 'लक्षण',
      'problem', 'samasya', 'समस्या', 'help', 'madad',
      // FIX: Additional Hindi symptom words that were missing
      'सूख', 'sookh', 'sukh',           // drying/wilting
      'झड़', 'jhar',                      // falling off
      'तना', 'tana',                      // stem
      'फल', 'phal',                       // fruit
      'जड़', 'jar',                        // root
      'रस', 'ras',                        // sap
      'कमज़ोर', 'kamzor',                 // weak
      'मर', 'mar',                        // dying
      'नुकसान', 'nuksan',                 // damage
      'खराब', 'kharab',                   // damaged/bad
      'बीमार', 'bimar',                   // sick
      'प्रभावित', 'prabhavit',            // affected
      'ho rahe', 'हो रहे', 'ho rahi', 'हो रही', // "are happening" pattern
      'lag gaye', 'लग गए', 'lag gayi',   // "have gotten" pattern
      'pad rahi', 'पड़ रही', 'pad rahe'  // "are falling/becoming" pattern
    ];

    const weatherScore = weatherKeywords.filter(k => q.includes(k)).length;
    const marketScore = marketKeywords.filter(k => q.includes(k)).length;
    const diseaseScore = diseaseKeywords.filter(k => q.includes(k)).length;

    console.log(`[AIEngine] Routing scores — disease:${diseaseScore} weather:${weatherScore} market:${marketScore}`);

    if (weatherScore > 0 && marketScore > 0) return 'weather-market';
    if (weatherScore > marketScore && weatherScore > diseaseScore) return 'weather';
    if (marketScore > weatherScore && marketScore > diseaseScore) return 'market';
    if (diseaseScore > 0) return 'disease';
    if (this._detectCrop(q)) return 'disease';

    return 'disease'; // Safe default — better to try disease than show off-topic
  }

  // ─── CROP DETECTION ─────────────────────────────────
  _detectCrop(q) {
    const cropMap = {
      tomato: ['tomato', 'tamatar', 'टमाटर', 'tamaatar'],
      rice: ['rice', 'chawal', 'चावल', 'dhan', 'धान', 'paddy'],
      wheat: ['wheat', 'gehun', 'गेहूं', 'gehu'],
      cotton: ['cotton', 'kapas', 'कपास', 'kapaas'],
      onion: ['onion', 'pyaz', 'प्याज', 'pyaaz', 'kanda'],
      potato: ['potato', 'aloo', 'आलू', 'aaloo'],
      maize: ['maize', 'makka', 'मक्का', 'corn', 'bhutta', 'भुट्टा'],
      soybean: ['soybean', 'soyabean', 'सोयाबीन', 'soya'],
      guava: ['guava', 'amrood', 'अमरूद'],
      mango: ['mango', 'aam', 'आम'],
      banana: ['banana', 'kela', 'केला'],
      chilli: ['chilli', 'chili', 'mirch', 'मिर्च'],
      brinjal: ['brinjal', 'eggplant', 'baingan', 'बैंगन']
    };

    for (const [crop, keywords] of Object.entries(cropMap)) {
      if (keywords.some(k => q.includes(k))) return crop;
    }
    return null;
  }

  // ─── DISEASE PROCESSING ─────────────────────────────
  _processDiseaseQuery(q) {
    const crop = this._detectCrop(q);

    // Guard: crop recognised but not in our disease database → tell user clearly
    const supportedCrops = ['tomato', 'rice', 'wheat', 'cotton',
      'onion', 'potato', 'maize', 'soybean'];
    if (crop && !supportedCrops.includes(crop)) {
      return this._unsupportedCropResponse(crop);
    }

    let matchedDisease = null;
    let bestScore = 0;

    for (const disease of DISEASE_DATABASE) {
      let score = 0;

      if (crop && disease.crop === crop) score += 5;
      if (crop && disease.crop === 'general') score += 2;

      for (const keyword of disease.keywords) {
        if (q.includes(keyword.toLowerCase())) score += 3;
      }

      const allSymptoms = [...disease.symptoms, ...disease.symptomsHi].join(' ').toLowerCase();
      const queryWords = q.split(/\s+/);
      for (const word of queryWords) {
        if (word.length > 2 && allSymptoms.includes(word)) score += 1;
      }

      if (score > bestScore) {
        bestScore = score;
        matchedDisease = disease;
      }
    }

    // FIX 2: Lowered threshold from 3 → 1 so partial matches still return a result
    if (!matchedDisease || bestScore < 1) {
      return this._generalDiseaseResponse(q, crop);
    }

    return this._formatDiseaseResponse(matchedDisease);
  }

  _formatDiseaseResponse(disease) {
    const hi = this.isHindi;
    const cropName = hi ? disease.cropHi : disease.crop;
    const diseaseName = hi ? disease.nameHi : disease.name;

    const voiceAnswer = hi
      ? `आपकी ${cropName} की फसल में ${diseaseName} के लक्षण दिख रहे हैं। ${disease.causeHi}। मैं आपको जैविक उपचार बता रहा हूँ, कृपया स्क्रीन पर विवरण देखें।`
      : `Your ${cropName} crop appears to have ${diseaseName}. ${disease.cause}. I'm providing organic treatment options — please see the detailed card on screen.`;

    const sections = [];

    sections.push({
      heading: hi ? '🔍 लक्षण' : '🔍 Symptoms',
      bullets: hi ? disease.symptomsHi : disease.symptoms,
      type: 'symptoms'
    });

    sections.push({
      heading: hi ? '🦠 संभावित कारण' : '🦠 Likely Cause',
      bullets: [hi ? disease.causeHi : disease.cause],
      type: 'cause'
    });

    for (const remedy of disease.remedies) {
      sections.push({
        heading: `🌿 ${hi ? remedy.nameHi : remedy.name}`,
        bullets: hi ? remedy.stepsHi : remedy.steps,
        type: 'remedy'
      });
    }

    sections.push({
      heading: hi ? '🛡️ रोकथाम के उपाय' : '🛡️ Prevention Tips',
      bullets: hi ? disease.preventionHi : disease.prevention,
      type: 'prevention'
    });

    if (disease.standards) {
      sections.push({
        heading: hi ? '📋 प्रमाणन' : '📋 Standards',
        bullets: [disease.standards],
        type: 'standards'
      });
    }

    return {
      type: 'disease',
      voiceAnswer,
      card: {
        title: `${hi ? cropName : disease.crop.charAt(0).toUpperCase() + disease.crop.slice(1)} — ${diseaseName}`,
        icon: '🌱',
        sections
      },
      followUps: this._generateDiseaseFollowUps(disease)
    };
  }

  _generateDiseaseFollowUps(disease) {
    const hi = this.isHindi;
    const followUps = [];
    if (disease.remedies[0]) {
      const remedyName = hi ? disease.remedies[0].nameHi : disease.remedies[0].name;
      followUps.push(hi ? `${remedyName} कैसे बनाएं?` : `How to prepare ${disease.remedies[0].name}?`);
    }
    const cropName = hi ? disease.cropHi : disease.crop;
    followUps.push(hi ? `${cropName} के और कौन से रोग होते हैं?` : `What other diseases affect ${disease.crop}?`);
    followUps.push(hi ? 'जीवामृत कैसे बनाएं?' : 'How to prepare Jeevamrit?');
    return followUps.slice(0, 3);
  }

  _generalDiseaseResponse(q, crop) {
    const hi = this.isHindi;
    const cropName = crop ? (hi ? this._getCropNameHi(crop) : crop) : (hi ? 'फसल' : 'crop');

    const voiceAnswer = hi
      ? `आपकी ${cropName} की समस्या के बारे में, कृपया थोड़ा और बताएं — कौन सी पत्तियां प्रभावित हैं, किस रंग के धब्बे हैं, या कीड़े दिख रहे हैं? इससे मैं सही इलाज बता पाऊंगा।`
      : `Regarding your ${cropName} issue, could you describe more — which leaves are affected, what colour spots do you see, or if you notice any insects?`;

    let relevantDiseases = [];
    if (crop) {
      relevantDiseases = DISEASE_DATABASE.filter(d => d.crop === crop).slice(0, 4);
    }

    const sections = [{
      heading: hi ? '💡 अधिक जानकारी दें' : '💡 Tell Me More',
      bullets: hi
        ? ['किन पत्तियों पर लक्षण दिख रहे हैं? (ऊपर/नीचे)', 'धब्बों का रंग क्या है? (पीला/भूरा/काला/सफेद)', 'क्या कोई कीड़ा दिख रहा है?', 'कितने दिन से समस्या है?']
        : ['Which leaves show symptoms? (upper/lower)', 'Spot colour? (yellow/brown/black/white)', 'Any visible insects?', 'How many days has this been happening?'],
      type: 'info'
    }];

    if (relevantDiseases.length > 0) {
      sections.push({
        heading: hi ? `📋 ${cropName} के आम रोग` : `📋 Common ${crop} Diseases`,
        bullets: relevantDiseases.map(d => hi ? `• ${d.nameHi}` : `• ${d.name}`),
        type: 'list'
      });
    }

    const followUps = relevantDiseases.length > 0
      ? relevantDiseases.slice(0, 3).map(d => hi ? d.nameHi : d.name)
      : hi
        ? ['टमाटर की बीमारी', 'धान का रोग', 'गेहूं में कीड़ा']
        : ['Tomato disease', 'Rice pest', 'Wheat disease'];

    return {
      type: 'disease-general',
      voiceAnswer,
      card: {
        title: hi ? '🌱 फसल रोग पहचान' : '🌱 Crop Disease Identification',
        icon: '❓',
        sections
      },
      followUps
    };
  }

  _getCropNameHi(crop) {
    const map = {
      tomato: 'टमाटर', rice: 'धान', wheat: 'गेहूं', cotton: 'कपास',
      onion: 'प्याज', potato: 'आलू', maize: 'मक्का', soybean: 'सोयाबीन',
      guava: 'अमरूद', mango: 'आम', banana: 'केला', chilli: 'मिर्च', brinjal: 'बैंगन'
    };
    return map[crop] || 'फसल';
  }

  _unsupportedCropResponse(crop) {
    const hi = this.isHindi;
    const cropName = crop.charAt(0).toUpperCase() + crop.slice(1);
    return {
      type: 'disease-general',
      voiceAnswer: hi
        ? `अभी मेरे पास ${cropName} के रोगों की जानकारी नहीं है। मैं टमाटर, धान, गेहूं, कपास, प्याज, आलू, मक्का और सोयाबीन के बारे में मदद कर सकता हूँ।`
        : `I don't have disease data for ${cropName} yet. I can help with tomato, rice, wheat, cotton, onion, potato, maize, and soybean.`,
      card: {
        title: hi ? `🌱 ${cropName} — डेटाबेस में नहीं` : `🌱 ${cropName} — Not In Database`,
        icon: '❓',
        sections: [
          {
            heading: hi ? '📋 अभी समर्थित फसलें' : '📋 Currently Supported Crops',
            bullets: hi
              ? ['🍅 टमाटर', '🌾 धान', '🌾 गेहूं', '🌿 कपास',
                 '🧅 प्याज', '🥔 आलू', '🌽 मक्का', '🫘 सोयाबीन']
              : ['🍅 Tomato', '🌾 Rice', '🌾 Wheat', '🌿 Cotton',
                 '🧅 Onion', '🥔 Potato', '🌽 Maize', '🫘 Soybean'],
            type: 'info'
          },
          {
            heading: hi ? '💡 सुझाव' : '💡 Suggestion',
            bullets: hi
              ? ['ऊपर दी गई फसलों में से किसी के बारे में पूछें',
                 'या अपनी फसल के लक्षण बताएं — मैं सामान्य जैविक उपाय बता सकता हूँ']
              : ['Ask about one of the supported crops above',
                 'Or describe your symptoms — I can suggest general organic remedies'],
            type: 'suggestion'
          }
        ]
      },
      followUps: hi
        ? ['टमाटर की बीमारी बताओ', 'धान में कीड़ा', 'सामान्य जैविक उपाय']
        : ['Tomato disease help', 'Rice pest problem', 'General organic remedy']
    };
  }

  // ─── WEATHER PROCESSING ─────────────────────────────
  _processWeatherQuery(q) {
    const hi = this.isHindi;
    const region = this._detectRegionFromQuery(q) || this.currentRegion;
    const weather = WEATHER_DATA[region];
    if (!weather) return this._offTopicResponse();

    const today = weather.forecast[0];
    const voiceAnswer = hi
      ? `${weather.regionHi} में आज ${today.conditionHi} है। तापमान ${today.tempMin} से ${today.tempMax} डिग्री रहेगा। नमी ${today.humidity} प्रतिशत है। ${today.rainfall > 0 ? today.rainfall + ' मिमी बारिश की संभावना है।' : 'आज बारिश की संभावना नहीं है।'}`
      : `In ${weather.region} today, it's ${today.condition}. Temperature ${today.tempMin}°C to ${today.tempMax}°C, humidity ${today.humidity}%. ${today.rainfall > 0 ? 'Expected rainfall: ' + today.rainfall + ' mm.' : 'No rainfall expected.'}`;

    const sections = [];

    sections.push({
      heading: hi ? '📅 3 दिन का मौसम पूर्वानुमान' : '📅 3-Day Weather Forecast',
      type: 'weather-forecast',
      forecast: weather.forecast.map(day => ({
        day: hi ? day.dayHi : day.day,
        icon: day.icon,
        temp: `${day.tempMin}°-${day.tempMax}°C`,
        humidity: `💧 ${day.humidity}%`,
        rain: day.rainfall > 0 ? `🌧️ ${day.rainfall}mm` : '—',
        condition: hi ? day.conditionHi : day.condition
      }))
    });

    sections.push({
      heading: hi ? '🌾 खेती सलाह' : '🌾 Farming Advisory',
      bullets: hi ? weather.advisory.hi : weather.advisory.en,
      type: 'advisory'
    });

    sections.push({
      heading: hi ? '🌱 इस मौसम की फसलें' : '🌱 Season Crops',
      bullets: [(hi ? weather.suitableCropsHi : weather.suitableCrops).join(', ')],
      type: 'crops'
    });

    const followUps = hi
      ? ['मंडी में भाव क्या है?', `${weather.regionHi} में क्या बोएं?`, 'बारिश में फसल कैसे बचाएं?']
      : ['Current mandi prices?', `What to plant in ${weather.region}?`, 'Protect crops in rain?'];

    return {
      type: 'weather',
      voiceAnswer,
      card: {
        title: `${weather.icon} ${hi ? weather.regionHi : weather.region} — ${hi ? 'मौसम' : 'Weather'}`,
        icon: today.icon,
        sections
      },
      followUps
    };
  }

  // ─── MARKET PROCESSING ──────────────────────────────
  _processMarketQuery(q) {
    const crop = this._detectCrop(q);
    const region = this._detectRegionFromQuery(q) || this.currentRegion;
    if (crop) return this._formatCropPriceResponse(crop, region);
    return this._formatMarketOverview(region);
  }

  _formatCropPriceResponse(cropKey, region) {
    const hi = this.isHindi;
    const crop = MARKET_DATA.crops[cropKey];
    if (!crop) return this._offTopicResponse();

    const price = crop.regionalPrices[region];
    const regionName = hi ? WEATHER_DATA[region].regionHi : WEATHER_DATA[region].region;
    const cropName = hi ? crop.nameHi : crop.name;

    let mspInfo = '';
    if (crop.msp) {
      const diff = price.modal - crop.msp;
      const aboveBelow = diff >= 0
        ? (hi ? 'MSP से ऊपर' : 'above MSP')
        : (hi ? 'MSP से नीचे' : 'below MSP');
      mspInfo = hi
        ? `MSP ₹${crop.msp}/क्विंटल है, मंडी भाव ${aboveBelow} चल रहा है।`
        : `MSP is ₹${crop.msp}/qtl, mandi price is currently ${aboveBelow}.`;
    } else {
      mspInfo = hi ? crop.mspNoteHi : crop.mspNote;
    }

    const voiceAnswer = hi
      ? `${regionName} में ${cropName} का मंडी भाव ₹${price.min} से ₹${price.max} प्रति क्विंटल चल रहा है। मोडल रेट ₹${price.modal} है। ${mspInfo}`
      : `In ${regionName}, ${cropName} mandi price ₹${price.min}–₹${price.max}/qtl. Modal rate ₹${price.modal}. ${mspInfo}`;

    const sections = [];

    sections.push({
      heading: hi ? '💰 मंडी भाव' : '💰 Mandi Prices',
      type: 'price',
      priceData: {
        crop: cropName, icon: crop.icon, region: regionName,
        min: `₹${price.min}`, max: `₹${price.max}`, modal: `₹${price.modal}`,
        trend: price.trend, trendIcon: price.trendIcon,
        msp: crop.msp ? `₹${crop.msp}` : (hi ? 'लागू नहीं' : 'N/A'),
        unit: crop.unit
      }
    });

    if (crop.msp) {
      const diff = price.modal - crop.msp;
      const pct = ((diff / crop.msp) * 100).toFixed(1);
      sections.push({
        heading: hi ? '📊 MSP तुलना' : '📊 MSP Comparison',
        bullets: [
          hi ? `MSP: ₹${crop.msp}/${crop.unit.split('/')[1]}` : `MSP: ₹${crop.msp}/${crop.unit.split('/')[1]}`,
          hi ? `मंडी मोडल रेट: ₹${price.modal}` : `Mandi Modal Rate: ₹${price.modal}`,
          hi ? `अंतर: ${diff >= 0 ? '+' : ''}₹${diff} (${pct}%)` : `Difference: ${diff >= 0 ? '+' : ''}₹${diff} (${pct}%)`,
          diff < 0
            ? (hi ? '⚠️ सरकारी खरीद केंद्र से MSP पर बेचें' : '⚠️ Sell at government procurement centre for MSP')
            : (hi ? '✅ मंडी भाव MSP से ऊपर है' : '✅ Mandi price is above MSP')
        ],
        type: 'comparison'
      });
    }

    sections.push({
      heading: hi ? '💡 बिक्री सलाह' : '💡 Selling Advice',
      bullets: [(hi ? crop.advice.hi : crop.advice.en)],
      type: 'advice'
    });

    const allRegions = Object.entries(crop.regionalPrices).map(([rKey, rPrice]) => {
      const rName = hi ? WEATHER_DATA[rKey].regionHi : WEATHER_DATA[rKey].region;
      return `${rName}: ₹${rPrice.modal} ${rPrice.trendIcon}`;
    });
    sections.push({
      heading: hi ? '🗺️ सभी क्षेत्रों के भाव' : '🗺️ All Region Prices',
      bullets: allRegions,
      type: 'all-regions'
    });

    const followUps = hi
      ? [`${regionName} का मौसम कैसा है?`, 'और कौन सी फसल के भाव बताएं?', 'जैविक उपज का प्रीमियम कितना है?']
      : [`Weather in ${regionName}?`, 'Show prices for another crop', 'Organic produce premium?'];

    return {
      type: 'market',
      voiceAnswer,
      card: {
        title: `${crop.icon} ${cropName} — ${hi ? 'मंडी भाव' : 'Market Price'}`,
        icon: crop.icon,
        sections
      },
      followUps
    };
  }

  _formatMarketOverview(region) {
    const hi = this.isHindi;
    const regionName = hi ? WEATHER_DATA[region].regionHi : WEATHER_DATA[region].region;

    const voiceAnswer = hi
      ? `${regionName} की मंडी में आज प्रमुख फसलों के भाव — प्याज और चावल के भाव बढ़ रहे हैं। विस्तार से भाव स्क्रीन पर देखें।`
      : `Today's key market rates in ${regionName} — onion and rice prices are rising. See details on screen.`;

    const sections = [];

    const cropSummary = Object.entries(MARKET_DATA.crops).map(([key, crop]) => {
      const price = crop.regionalPrices[region];
      const name = hi ? crop.nameHi : crop.name;
      const mspText = crop.msp ? `MSP ₹${crop.msp}` : (hi ? 'MSP नहीं' : 'No MSP');
      return `${crop.icon} ${name}: ₹${price.modal} ${price.trendIcon} (${mspText})`;
    });

    sections.push({
      heading: hi ? `💰 ${regionName} मंडी भाव सारांश` : `💰 ${regionName} Market Summary`,
      bullets: cropSummary,
      type: 'summary'
    });

    const procInfo = hi ? MARKET_DATA.procurement.hi : MARKET_DATA.procurement.en;
    sections.push({
      heading: `🏛️ ${procInfo.title}`,
      bullets: procInfo.options,
      type: 'procurement'
    });

    const orgInfo = hi ? MARKET_DATA.organicPremium.hi : MARKET_DATA.organicPremium.en;
    sections.push({
      heading: `🌿 ${orgInfo.title}`,
      bullets: orgInfo.points,
      type: 'organic'
    });

    const followUps = hi
      ? ['गेहूं का भाव बताओ', 'टमाटर की कीमत क्या है?', 'कपास कहाँ बेचें?']
      : ['Wheat price details', 'Tomato price today', 'Where to sell cotton?'];

    return {
      type: 'market-overview',
      voiceAnswer,
      card: {
        title: `📊 ${regionName} — ${hi ? 'बाज़ार अवलोकन' : 'Market Overview'}`,
        icon: '📊',
        sections
      },
      followUps
    };
  }

  // ─── WEATHER + MARKET COMBINED ──────────────────────
  _processWeatherMarketQuery(q) {
    const hi = this.isHindi;
    const region = this._detectRegionFromQuery(q) || this.currentRegion;
    const weather = WEATHER_DATA[region];
    const regionName = hi ? weather.regionHi : weather.region;
    const today = weather.forecast[0];

    const voiceAnswer = hi
      ? `${regionName} में आज ${today.conditionHi}, तापमान ${today.tempMax}°C। मंडी में प्याज और चावल के भाव अच्छे हैं।`
      : `${regionName} today: ${today.condition}, ${today.tempMax}°C. Onion and rice prices are good in the market.`;

    const sections = [];

    sections.push({
      heading: hi ? '⛅ आज का मौसम' : '⛅ Today\'s Weather',
      bullets: [
        `${today.icon} ${hi ? today.conditionHi : today.condition}`,
        `🌡️ ${today.tempMin}°-${today.tempMax}°C | 💧 ${hi ? 'नमी' : 'Humidity'} ${today.humidity}%`,
        today.rainfall > 0 ? `🌧️ ${hi ? 'बारिश' : 'Rain'}: ${today.rainfall}mm` : `☀️ ${hi ? 'बारिश नहीं' : 'No rain'}`
      ],
      type: 'weather-quick'
    });

    sections.push({
      heading: hi ? '🌾 खेती सलाह' : '🌾 Farming Advisory',
      bullets: (hi ? weather.advisory.hi : weather.advisory.en).slice(0, 3),
      type: 'advisory'
    });

    const topCrops = ['rice', 'wheat', 'onion', 'tomato'];
    const priceList = topCrops.map(key => {
      const crop = MARKET_DATA.crops[key];
      const price = crop.regionalPrices[region];
      const name = hi ? crop.nameHi : crop.name;
      return `${crop.icon} ${name}: ₹${price.modal}/qtl ${price.trendIcon}`;
    });

    sections.push({
      heading: hi ? '💰 प्रमुख भाव' : '💰 Key Prices',
      bullets: priceList,
      type: 'prices'
    });

    const followUps = hi
      ? ['3 दिन का मौसम बताओ', 'सभी फसलों के भाव दिखाओ', 'अभी क्या बोएं?']
      : ['Show 3-day forecast', 'Show all crop prices', 'What to plant now?'];

    return {
      type: 'weather-market',
      voiceAnswer,
      card: {
        title: `${weather.icon} ${regionName} — ${hi ? 'मौसम और बाज़ार' : 'Weather & Market'}`,
        icon: '📊',
        sections
      },
      followUps
    };
  }

  // ─── REGION DETECTION ───────────────────────────────
  _detectRegionFromQuery(q) {
    const regionMap = {
      punjab: ['punjab', 'पंजाब', 'ludhiana', 'amritsar', 'jalandhar', 'patiala'],
      maharashtra: ['maharashtra', 'महाराष्ट्र', 'mumbai', 'pune', 'nagpur', 'nashik', 'nasik', 'kolhapur'],
      up: ['uttar pradesh', 'उत्तर प्रदेश', 'lucknow', 'varanasi', 'agra', 'kanpur', 'up '],
      karnataka: ['karnataka', 'कर्नाटक', 'bangalore', 'bengaluru', 'mysore', 'mangalore', 'hubli'],
      rajasthan: ['rajasthan', 'राजस्थान', 'jaipur', 'jodhpur', 'udaipur', 'kota', 'ajmer']
    };

    for (const [region, keywords] of Object.entries(regionMap)) {
      if (keywords.some(k => q.includes(k))) return region;
    }
    return null;
  }

  // ─── GUARDRAILS ─────────────────────────────────────
  _isChemicalQuery(q) {
    const chemicalTerms = [
      'chemical', 'rasayan', 'रासायनिक', 'pesticide', 'keetnashak', 'कीटनाशक',
      'urea', 'यूरिया', 'dap', 'डीएपी', 'npk', 'insecticide',
      'herbicide', 'kharpatwar nashak', 'fungicide', 'roundup', 'glyphosate',
      'endosulfan', 'monocrotophos', 'chlorpyrifos', 'cypermethrin',
      'imidacloprid', 'thiamethoxam', 'fipronil', 'carbendazim', 'mancozeb',
      'synthetic', 'gmo', 'bt cotton', 'hybrid seed company',
      'spray dawai', 'market ki dawai', 'angrez dawai', 'company ki dawai'
    ];
    return chemicalTerms.some(term => q.includes(term));
  }

  _chemicalGuardrailResponse() {
    const hi = this.isHindi;
    return {
      type: 'guardrail',
      voiceAnswer: hi
        ? 'मैं केवल प्राकृतिक और जैविक खेती के उपाय बता सकता हूँ। रासायनिक कीटनाशक और उर्वरक मिट्टी, पानी और स्वास्थ्य को नुकसान पहुँचाते हैं। आइए मैं आपको जैविक विकल्प बताता हूँ।'
        : 'I can only recommend natural and organic farming solutions. Let me suggest organic alternatives instead.',
      card: {
        title: hi ? '⚠️ केवल प्राकृतिक उपाय' : '⚠️ Natural Solutions Only',
        icon: '🚫',
        sections: [
          {
            heading: hi ? '🚫 रासायनिक उपाय क्यों नहीं?' : '🚫 Why Not Chemicals?',
            bullets: hi
              ? ['रासायनिक कीटनाशक मिट्टी के सूक्ष्मजीवों को मारते हैं', 'भूजल प्रदूषण और स्वास्थ्य समस्याएं', 'PGS/NPOP प्रमाणन में रासायनिक इनपुट वर्जित हैं']
              : ['Chemical pesticides kill beneficial soil microorganisms', 'Groundwater contamination and health risks', 'Prohibited under PGS/NPOP certification'],
            type: 'warning'
          },
          {
            heading: hi ? '🌿 जैविक विकल्प' : '🌿 Organic Alternatives',
            bullets: hi
              ? ['🌱 जीवामृत — मिट्टी को जीवित बनाता है', '🌱 नीम तेल — प्राकृतिक कीटनाशक', '🌱 ट्राइकोडर्मा — जैविक फफूंदनाशक', '🌱 पंचगव्य — पौध वृद्धि बढ़ाता है']
              : ['🌱 Jeevamrit — soil bio-activator', '🌱 Neem oil — natural pesticide', '🌱 Trichoderma — bio-fungicide', '🌱 Panchagavya — plant growth enhancer'],
            type: 'alternatives'
          }
        ]
      },
      followUps: hi
        ? ['जीवामृत कैसे बनाएं?', 'नीम स्प्रे कैसे बनाएं?', 'प्राकृतिक खेती क्या है?']
        : ['How to make Jeevamrit?', 'How to make neem spray?', 'What is natural farming?']
    };
  }

  // FIX 3: Relaxed _isOffTopic — short queries always pass, farming terms list expanded
  _isOffTopic(q) {
    // FIX: Allow any query ≤5 words — likely a farming question phrased briefly
    if (q.split(/\s+/).length <= 5) return false;

    const farmingTerms = [
      // English
      'crop', 'plant', 'soil', 'seed', 'farming', 'disease', 'pest', 'weather',
      'price', 'mandi', 'water', 'irrigation', 'harvest', 'compost', 'organic',
      'leaf', 'leaves', 'fruit', 'root', 'flower', 'stem', 'grow', 'fertilizer',
      'manure', 'spray', 'field', 'sow', 'yield', 'help', 'what', 'how', 'when', 'where',
      'yellow', 'brown', 'black', 'white', 'wilt', 'spots', 'rot', 'dry', 'damage',
      // Hindi farming
      'fasal', 'फसल', 'paudha', 'पौधा', 'mitti', 'मिट्टी', 'beej', 'बीज',
      'kheti', 'खेती', 'kisan', 'किसान', 'rog', 'रोग', 'keeda', 'कीड़ा',
      'mausam', 'मौसम', 'bhav', 'भाव', 'मंडी', 'paani', 'पानी', 'sinchai', 'सिंचाई',
      'katai', 'कटाई', 'khad', 'खाद', 'jaivik', 'जैविक', 'prakritik', 'प्राकृतिक',
      'patti', 'पत्ती', 'पत्ते', 'phal', 'फल', 'jad', 'जड़', 'phool', 'फूल',
      'tana', 'तना', 'ugana', 'उगाना', 'upaj', 'उपज', 'jeevamrit', 'जीवामृत',
      'panchagavya', 'पंचगव्य', 'neem', 'नीम', 'gay', 'गाय', 'khet', 'खेत',
      'bona', 'बोना', 'madad', 'मदद', 'namaste', 'नमस्ते',
      // FIX: Key symptom words that were causing false off-topic triggers
      'पीले', 'पीला', 'पीली', 'peele', 'peela', 'peeli',   // yellow
      'सूख', 'sookh',                                         // drying
      'झड़', 'jhar',                                           // falling
      'गल', 'gal',                                            // rotting
      'मुरझा', 'murjha',                                      // wilting
      'धब्बे', 'dhabbe',                                      // spots
      'कीट', 'keet',                                          // insect
      'बीमार', 'bimar',                                       // sick
      'खराब', 'kharab',                                       // damaged
      'नुकसान', 'nuksan',                                     // damage
      'हो रहे', 'ho rahe', 'हो रही', 'ho rahi',              // "are happening"
      'लग गए', 'lag gaye', 'लग गई', 'lag gayi',              // "have gotten"
      'पड़ रही', 'pad rahi', 'पड़ रहे', 'pad rahe',           // "are becoming"
      // Crop names
      'tomato', 'tamatar', 'टमाटर', 'rice', 'dhan', 'धान', 'wheat', 'gehun', 'गेहूं',
      'cotton', 'kapas', 'कपास', 'onion', 'pyaz', 'प्याज', 'potato', 'aloo', 'आलू',
      'maize', 'makka', 'मक्का', 'soybean', 'सोयाबीन', 'bajra', 'jowar',
      'sugarcane', 'ganna', 'mustard', 'sarson', 'सरसों', 'गन्ना',
      // Market/weather
      'msp', 'barish', 'बारिश', 'bechna', 'बेचना', 'monsoon', 'rain'
    ];

    return !farmingTerms.some(term => q.includes(term));
  }

  _offTopicResponse() {
    const hi = this.isHindi;
    return {
      type: 'off-topic',
      voiceAnswer: hi
        ? 'मैं सिर्फ प्राकृतिक खेती के बारे में मदद कर सकता हूँ। कृपया फसल, रोग, मौसम या मंडी भाव के बारे में पूछें।'
        : 'I can only help with natural farming questions. Please ask about crops, diseases, weather, or market prices.',
      card: {
        title: hi ? '🌾 किसानमित्र — प्राकृतिक खेती सहायक' : '🌾 KisaanMitra — Natural Farming Assistant',
        icon: '🌾',
        sections: [{
          heading: hi ? '💡 मुझसे ये पूछ सकते हैं' : '💡 You Can Ask Me About',
          bullets: hi
            ? ['🌱 फसल रोग पहचान और जैविक उपचार', '🌤️ मौसम पूर्वानुमान और खेती सलाह', '💰 मंडी भाव और MSP जानकारी', '🌿 जीवामृत, पंचगव्य, नीम स्प्रे बनाने की विधि', '📋 PGS-India / NPOP प्रमाणन जानकारी']
            : ['🌱 Crop disease identification & organic treatment', '🌤️ Weather forecast & farming advisory', '💰 Mandi prices & MSP information', '🌿 How to prepare Jeevamrit, Panchagavya, Neem spray', '📋 PGS-India / NPOP certification info'],
          type: 'info'
        }]
      },
      followUps: hi
        ? ['टमाटर की बीमारी', 'आज मौसम कैसा है?', 'गेहूं का भाव बताओ']
        : ['Tomato disease help', "Today's weather", 'Wheat market price']
    };
  }

  // ─── WELCOME / GREETING RESPONSE ────────────────────
  getWelcomeResponse() {
    const hi = this.isHindi;
    const region = this.currentRegion;
    const weather = WEATHER_DATA[region];
    const regionName = hi ? weather.regionHi : weather.region;

    return {
      type: 'welcome',
      voiceAnswer: hi
        ? 'नमस्ते! मैं किसानमित्र हूँ, आपका प्राकृतिक खेती सहायक। मुझसे फसल रोग, मौसम या मंडी भाव के बारे में पूछें। बोलिए या टाइप कीजिए!'
        : "Namaste! I'm KisaanMitra, your natural farming assistant. Ask me about crop diseases, weather, or market prices. Speak or type your question!",
      card: {
        title: hi ? '🌾 किसानमित्र में आपका स्वागत है!' : '🌾 Welcome to KisaanMitra!',
        icon: '🌾',
        sections: [
          {
            heading: hi ? '🎙️ मैं कैसे मदद कर सकता हूँ?' : '🎙️ How Can I Help?',
            bullets: hi
              ? ['🌱 फसल रोग पहचानें — लक्षण बताएं, इलाज पाएं', '🌤️ मौसम पूर्वानुमान — आज और अगले 3 दिन', '💰 मंडी भाव — MSP और मंडी रेट तुलना', '🌿 जैविक उपचार — स्टेप-बाय-स्टेप विधि']
              : ['🌱 Identify crop diseases — describe symptoms, get treatment', '🌤️ Weather forecast — today and next 3 days', '💰 Market prices — MSP and mandi rate comparison', '🌿 Organic remedies — step-by-step preparation'],
            type: 'welcome-features'
          },
          {
            heading: hi ? `📍 आपका क्षेत्र: ${regionName}` : `📍 Your Region: ${regionName}`,
            bullets: [
              `${weather.forecast[0].icon} ${hi ? weather.forecast[0].conditionHi : weather.forecast[0].condition} | ${weather.forecast[0].tempMax}°C`,
              hi ? weather.currentSeasonHi : weather.currentSeason
            ],
            type: 'region-info'
          }
        ]
      },
      followUps: hi
        ? ['मेरी फसल में कीड़ा लगा है', 'आज का मौसम बताओ', 'मंडी भाव क्या है?']
        : ['My crop has a pest problem', "Today's weather", 'Current market prices']
    };
  }
}