/**
 * KisaanMitra — Crop Disease Knowledge Base
 * 30+ crop-disease entries with organic/natural remedies only.
 * All treatments align with PGS-India and NPOP standards.
 */

const DISEASE_DATABASE = [
  // ═══════════════════════════════════════════
  // TOMATO DISEASES
  // ═══════════════════════════════════════════
  {
    id: 'tomato-chlorosis',
    crop: 'tomato',
    cropHi: 'टमाटर',
    name: 'Nitrogen Deficiency / Chlorosis',
    nameHi: 'नाइट्रोजन की कमी / पत्तियों का पीलापन',
    keywords: ['yellow', 'peeli', 'पीली', 'पीलापन', 'chlorosis', 'nitrogen', 'yellowing', 'pale', 'halki', 'हल्की'],
    symptoms: [
      'Lower leaves turn uniformly yellow, starting from the bottom',
      'Stunted growth, thin stems',
      'Leaves may fall off if severe'
    ],
    symptomsHi: [
      'निचली पत्तियाँ समान रूप से पीली हो जाती हैं, नीचे से शुरू होती हैं',
      'पौधे की वृद्धि रुक जाती है, तने पतले हो जाते हैं',
      'गंभीर होने पर पत्तियाँ गिर सकती हैं'
    ],
    cause: 'Lack of nitrogen in soil due to poor organic matter or waterlogging',
    causeHi: 'मिट्टी में जैविक पदार्थ की कमी या जलभराव के कारण नाइट्रोजन की कमी',
    remedies: [
      {
        name: 'Jeevamrit Foliar Spray',
        nameHi: 'जीवामृत पर्णीय छिड़काव',
        steps: [
          'Mix 10 kg fresh cow dung + 10 litre cow urine in 200 litre water',
          'Add 2 kg jaggery (gur) + 2 kg gram flour (besan)',
          'Add handful of soil from under a banyan/peepal tree',
          'Stir daily, ferment for 7 days in shade',
          'Dilute 5 litres in 100 litres water, spray on leaves every 15 days'
        ],
        stepsHi: [
          '200 लीटर पानी में 10 किलो ताजा गोबर + 10 लीटर गोमूत्र मिलाएं',
          '2 किलो गुड़ + 2 किलो बेसन डालें',
          'बरगद/पीपल के पेड़ के नीचे की मुट्ठी भर मिट्टी डालें',
          'रोज़ हिलाएं, 7 दिन छाया में किण्वित करें',
          '100 लीटर पानी में 5 लीटर मिलाकर हर 15 दिन पत्तियों पर छिड़कें'
        ]
      },
      {
        name: 'Vermicompost Top Dressing',
        nameHi: 'वर्मीकम्पोस्ट टॉप ड्रेसिंग',
        steps: [
          'Apply 2-3 kg vermicompost per plant around the root zone',
          'Mix lightly into top soil',
          'Water immediately after application',
          'Repeat every 20-25 days during growing season'
        ],
        stepsHi: [
          'प्रत्येक पौधे की जड़ के आसपास 2-3 किलो वर्मीकम्पोस्ट डालें',
          'ऊपरी मिट्टी में हल्के से मिलाएं',
          'डालने के तुरंत बाद पानी दें',
          'बढ़ने के मौसम में हर 20-25 दिन दोहराएं'
        ]
      },
      {
        name: 'Panchagavya Drench',
        nameHi: 'पंचगव्य ड्रेंच',
        steps: [
          'Mix cow dung, cow urine, milk, curd, and ghee in equal parts',
          'Ferment for 15-20 days, stirring twice daily',
          'Dilute 3% solution (3 litres in 100 litres water)',
          'Apply as soil drench around roots every 15 days'
        ],
        stepsHi: [
          'गोबर, गोमूत्र, दूध, दही और घी बराबर मात्रा में मिलाएं',
          '15-20 दिन किण्वित करें, दिन में दो बार हिलाएं',
          '3% घोल बनाएं (100 लीटर पानी में 3 लीटर)',
          'हर 15 दिन जड़ों के आसपास मिट्टी में डालें'
        ]
      }
    ],
    prevention: [
      'Maintain soil organic carbon above 0.5% through regular composting',
      'Practice green manuring with dhaincha/sunhemp before planting',
      'Mulch with dry leaves/straw to retain soil moisture and nutrients',
      'Avoid waterlogging — ensure proper drainage'
    ],
    preventionHi: [
      'नियमित खाद बनाकर मिट्टी का जैविक कार्बन 0.5% से ऊपर रखें',
      'बोने से पहले ढैंचा/सनहेम्प से हरी खाद करें',
      'सूखी पत्तियों/पुआल से मल्चिंग करें',
      'जलभराव से बचें — उचित जल निकासी सुनिश्चित करें'
    ],
    standards: 'PGS-India approved inputs. NPOP compliant.'
  },
  {
    id: 'tomato-early-blight',
    crop: 'tomato',
    cropHi: 'टमाटर',
    name: 'Early Blight (Alternaria)',
    nameHi: 'अगेती झुलसा रोग (अल्टरनेरिया)',
    keywords: ['blight', 'jhulsa', 'झुलसा', 'spots', 'dhabbe', 'धब्बे', 'brown', 'bhure', 'भूरे', 'rings', 'concentric', 'early blight'],
    symptoms: [
      'Dark brown spots with concentric rings (target-like) on lower leaves',
      'Spots enlarge and merge, causing leaf drop',
      'Can affect stems and fruits too'
    ],
    symptomsHi: [
      'निचली पत्तियों पर गहरे भूरे धब्बे जिनमें गोल छल्ले दिखते हैं',
      'धब्बे बड़े होकर मिल जाते हैं, पत्तियाँ गिर जाती हैं',
      'तने और फलों पर भी असर हो सकता है'
    ],
    cause: 'Fungus Alternaria solani, spreads in warm humid weather (24-29°C)',
    causeHi: 'अल्टरनेरिया सोलेनी फफूंद, गर्म नम मौसम (24-29°C) में फैलता है',
    remedies: [
      {
        name: 'Neem Oil Spray',
        nameHi: 'नीम तेल स्प्रे',
        steps: [
          'Mix 30 ml neem oil + 10 ml liquid soap in 15 litres water',
          'Spray on both sides of leaves early morning or evening',
          'Repeat every 7-10 days',
          'Start spraying preventively when humidity rises'
        ],
        stepsHi: [
          '15 लीटर पानी में 30 मिली नीम तेल + 10 मिली तरल साबुन मिलाएं',
          'सुबह जल्दी या शाम को पत्तियों के दोनों तरफ छिड़कें',
          'हर 7-10 दिन दोहराएं',
          'नमी बढ़ने पर रोकथाम के लिए छिड़काव शुरू करें'
        ]
      },
      {
        name: 'Trichoderma + Pseudomonas Mix',
        nameHi: 'ट्राइकोडर्मा + स्यूडोमोनास मिश्रण',
        steps: [
          'Mix 10 gm Trichoderma viride + 10 gm Pseudomonas fluorescens per litre water',
          'Spray on foliage at first sign of spots',
          'Also mix in soil at transplanting time (25 gm per plant)',
          'These are bio-agents approved under NPOP'
        ],
        stepsHi: [
          'प्रति लीटर पानी में 10 ग्राम ट्राइकोडर्मा विरिडी + 10 ग्राम स्यूडोमोनास मिलाएं',
          'धब्बे दिखने पर पत्तियों पर छिड़कें',
          'रोपाई के समय मिट्टी में भी मिलाएं (25 ग्राम प्रति पौधा)',
          'ये NPOP स्वीकृत जैव-एजेंट हैं'
        ]
      },
      {
        name: 'Buttermilk (Chaas) Spray',
        nameHi: 'छाछ स्प्रे',
        steps: [
          'Mix 1 litre fresh buttermilk in 10 litres water',
          'Add 10 gm turmeric (haldi) powder',
          'Spray on leaves every 7 days',
          'Lactic acid bacteria help suppress fungal growth'
        ],
        stepsHi: [
          '10 लीटर पानी में 1 लीटर ताजी छाछ मिलाएं',
          '10 ग्राम हल्दी पाउडर डालें',
          'हर 7 दिन पत्तियों पर छिड़कें',
          'लैक्टिक एसिड बैक्टीरिया फफूंद को रोकने में मदद करते हैं'
        ]
      }
    ],
    prevention: [
      'Remove and destroy infected plant debris after harvest',
      'Practice 3-year crop rotation — don\'t plant Solanaceae family repeatedly',
      'Stake plants for good air circulation',
      'Mulch to prevent soil splash onto leaves'
    ],
    preventionHi: [
      'फसल कटाई के बाद संक्रमित पौधों के अवशेष हटाकर नष्ट करें',
      '3 साल का फसल चक्र अपनाएं — बार-बार सोलेनेसी परिवार न लगाएं',
      'हवा के अच्छे संचार के लिए पौधों को सहारा दें',
      'पत्तियों पर मिट्टी के छींटे रोकने के लिए मल्चिंग करें'
    ],
    standards: 'NPOP approved bio-inputs.'
  },
  {
    id: 'tomato-late-blight',
    crop: 'tomato',
    cropHi: 'टमाटर',
    name: 'Late Blight (Phytophthora)',
    nameHi: 'पिछेती झुलसा रोग (फाइटोफ्थोरा)',
    keywords: ['late blight', 'phytophthora', 'water soaked', 'pani wale', 'grey', 'safed', 'white mold', 'rot', 'sadan'],
    symptoms: [
      'Water-soaked dark patches on leaves, especially during cool wet weather',
      'White-grey fungal growth on underside of leaves',
      'Fruits develop dark greasy spots, rot quickly'
    ],
    symptomsHi: [
      'ठंडे गीले मौसम में पत्तियों पर पानी भरे गहरे धब्बे',
      'पत्तियों के नीचे सफेद-भूरी फफूंद उगती है',
      'फलों पर गहरे चिकने धब्बे आते हैं, जल्दी सड़ जाते हैं'
    ],
    cause: 'Phytophthora infestans fungus, favoured by cool (15-22°C) and wet conditions',
    causeHi: 'फाइटोफ्थोरा इन्फेस्टंस फफूंद, ठंडे (15-22°C) और गीले मौसम में पनपता है',
    remedies: [
      {
        name: 'Dashparni Ark Spray',
        nameHi: 'दशपर्णी अर्क स्प्रे',
        steps: [
          'Collect leaves of neem, karanj, sitaphal, dhatura, aak, tulsi, besharam, nirgundi, castor, and any one more local plant',
          'Crush 2 kg mixed leaves, soak in 10 litre cow urine + 10 litre water',
          'Add 500 gm green chilli paste + 250 gm garlic paste',
          'Ferment for 30-40 days, stirring every 3 days',
          'Filter and dilute: 500 ml in 15 litres water, spray on leaves'
        ],
        stepsHi: [
          'नीम, करंज, सीताफल, धतूरा, आक, तुलसी, बेशरम, निर्गुण्डी, अरंडी और एक स्थानीय पौधे की पत्तियाँ इकट्ठा करें',
          '2 किलो मिली-जुली पत्तियाँ कूटें, 10 लीटर गोमूत्र + 10 लीटर पानी में भिगोएं',
          '500 ग्राम हरी मिर्च पेस्ट + 250 ग्राम लहसुन पेस्ट डालें',
          '30-40 दिन किण्वित करें, हर 3 दिन हिलाएं',
          'छानकर 15 लीटर पानी में 500 मिली मिलाकर छिड़कें'
        ]
      },
      {
        name: 'Bordeaux Mixture (Organic approved)',
        nameHi: 'बोर्डो मिश्रण (जैविक स्वीकृत)',
        steps: [
          'Dissolve 100 gm copper sulphate in 5 litres water (Solution A)',
          'Dissolve 100 gm freshly slaked lime in 5 litres water (Solution B)',
          'Pour Solution A slowly into Solution B while stirring (NOT reverse)',
          'Spray immediately — does not store well',
          'Note: Copper-based fungicides are permitted under NPOP in limited quantities'
        ],
        stepsHi: [
          '5 लीटर पानी में 100 ग्राम तूतिया (कॉपर सल्फेट) घोलें (घोल A)',
          '5 लीटर पानी में 100 ग्राम ताजा बुझा चूना घोलें (घोल B)',
          'हिलाते हुए घोल A को घोल B में धीरे-धीरे डालें (उल्टा नहीं)',
          'तुरंत छिड़कें — रखने पर खराब हो जाता है',
          'नोट: कॉपर आधारित फफूंदनाशक NPOP के तहत सीमित मात्रा में अनुमत हैं'
        ]
      }
    ],
    prevention: [
      'Avoid overhead irrigation — use drip or furrow',
      'Plant in well-drained raised beds',
      'Remove and destroy infected plants immediately',
      'Use disease-free seeds and seedlings'
    ],
    preventionHi: [
      'ऊपर से सिंचाई से बचें — ड्रिप या नाली सिंचाई करें',
      'अच्छी जल निकासी वाली उठी हुई क्यारियों में लगाएं',
      'संक्रमित पौधों को तुरंत हटाकर नष्ट करें',
      'रोग मुक्त बीज और पौध का उपयोग करें'
    ],
    standards: 'Copper-based preparations allowed under NPOP Annexure I.'
  },
  {
    id: 'tomato-leaf-curl',
    crop: 'tomato',
    cropHi: 'टमाटर',
    name: 'Leaf Curl Virus (ToLCV)',
    nameHi: 'पत्ती मोड़ विषाणु रोग',
    keywords: ['curl', 'mod', 'मोड़', 'curling', 'mudna', 'मुड़ना', 'wrinkle', 'crumple', 'छोटी', 'stunted'],
    symptoms: [
      'Leaves curl upward and become thick, leathery',
      'New leaves are small, crumpled, cupped',
      'Plants are severely stunted, yield drops drastically',
      'Spread by whiteflies (Bemisia tabaci)'
    ],
    symptomsHi: [
      'पत्तियाँ ऊपर की ओर मुड़ जाती हैं और मोटी, चमड़े जैसी हो जाती हैं',
      'नई पत्तियाँ छोटी, सिकुड़ी हुई होती हैं',
      'पौधे बहुत छोटे रह जाते हैं, उपज बहुत कम हो जाती है',
      'सफेद मक्खी (बेमिसिया टबेसी) से फैलता है'
    ],
    cause: 'Tomato Leaf Curl Virus transmitted by whiteflies',
    causeHi: 'टमाटर पत्ती मोड़ विषाणु, सफेद मक्खी द्वारा फैलता है',
    remedies: [
      {
        name: 'Yellow Sticky Traps',
        nameHi: 'पीले चिपचिपे जाल',
        steps: [
          'Coat yellow plastic sheets with castor oil or Vaseline',
          'Place 8-10 traps per acre at crop canopy height',
          'Replace every 7-10 days when full of insects',
          'This controls whitefly population that spreads the virus'
        ],
        stepsHi: [
          'पीली प्लास्टिक शीट पर अरंडी का तेल या वैसलीन लगाएं',
          'प्रति एकड़ 8-10 जाल फसल की ऊंचाई पर लगाएं',
          'कीड़ों से भर जाने पर हर 7-10 दिन बदलें',
          'यह सफेद मक्खी को नियंत्रित करता है जो वायरस फैलाती है'
        ]
      },
      {
        name: 'Neem Seed Kernel Extract (NSKE)',
        nameHi: 'नीम बीज अर्क (NSKE)',
        steps: [
          'Crush 500 gm neem seed kernels, soak overnight in 10 litres water',
          'Filter through muslin cloth in the morning',
          'Add 10 ml liquid soap as a spreader',
          'Spray on leaves — repels and kills whiteflies'
        ],
        stepsHi: [
          '500 ग्राम नीम की गिरी कूटकर 10 लीटर पानी में रात भर भिगोएं',
          'सुबह मलमल के कपड़े से छानें',
          '10 मिली तरल साबुन मिलाएं',
          'पत्तियों पर छिड़कें — सफेद मक्खी को भगाता और मारता है'
        ]
      },
      {
        name: 'Remove Infected Plants',
        nameHi: 'संक्रमित पौधे हटाएं',
        steps: [
          'Uproot and destroy severely infected plants immediately',
          'This virus has no cure once plant is infected',
          'Removing source plants reduces spread to healthy ones',
          'Burn or bury destroyed plants away from field'
        ],
        stepsHi: [
          'गंभीर रूप से संक्रमित पौधों को तुरंत उखाड़कर नष्ट करें',
          'पौधा संक्रमित होने पर इस वायरस का कोई इलाज नहीं है',
          'स्रोत पौधे हटाने से स्वस्थ पौधों में फैलाव कम होता है',
          'नष्ट किए पौधों को खेत से दूर जलाएं या गाड़ दें'
        ]
      }
    ],
    prevention: [
      'Use ToLCV resistant varieties (Arka Rakshak, Arka Samrat)',
      'Install insect-proof net nurseries for seedling production',
      'Grow barrier crops like maize/sorghum around tomato fields',
      'Avoid summer planting when whitefly population is highest'
    ],
    preventionHi: [
      'ToLCV प्रतिरोधी किस्में लगाएं (अर्का रक्षक, अर्का सम्राट)',
      'पौध उत्पादन के लिए कीट-रोधी नेट नर्सरी बनाएं',
      'टमाटर के खेत के चारों ओर मक्का/ज्वार लगाएं',
      'गर्मी में बोने से बचें जब सफेद मक्खी सबसे ज़्यादा होती है'
    ],
    standards: 'PGS-India recommends IPM with bio-controls.'
  },
  {
    id: 'tomato-fusarium-wilt',
    crop: 'tomato',
    cropHi: 'टमाटर',
    name: 'Fusarium Wilt',
    nameHi: 'फ्यूसेरियम उकठा रोग',
    keywords: ['wilt', 'murjhana', 'मुरझाना', 'sukh', 'सूखना', 'drying', 'one side', 'ek taraf', 'fusarium'],
    symptoms: [
      'Wilting of leaves on one side of the plant first',
      'Yellowing progresses upward from lower leaves',
      'Brown discolouration in stem when cut open',
      'Plants wilt permanently and die'
    ],
    symptomsHi: [
      'पहले पौधे के एक तरफ की पत्तियाँ मुरझा जाती हैं',
      'पीलापन निचली पत्तियों से ऊपर की ओर बढ़ता है',
      'तना काटने पर अंदर भूरा रंग दिखता है',
      'पौधे स्थायी रूप से मुरझा जाते हैं और मर जाते हैं'
    ],
    cause: 'Fusarium oxysporum fungus, soil-borne, thrives in warm soil (27-30°C)',
    causeHi: 'फ्यूसेरियम ऑक्सीस्पोरम फफूंद, मिट्टी से फैलता है, गर्म मिट्टी (27-30°C) में पनपता है',
    remedies: [
      {
        name: 'Trichoderma Soil Treatment',
        nameHi: 'ट्राइकोडर्मा से मिट्टी उपचार',
        steps: [
          'Mix 2 kg Trichoderma harzianum with 100 kg well-rotted FYM',
          'Spread evenly in the field and mix into soil before transplanting',
          'Also dip seedling roots in Trichoderma solution (10 gm/litre) for 30 minutes',
          'Trichoderma colonises soil and outcompetes Fusarium'
        ],
        stepsHi: [
          '2 किलो ट्राइकोडर्मा हार्ज़ियेनम को 100 किलो अच्छी सड़ी गोबर की खाद में मिलाएं',
          'रोपाई से पहले खेत में समान रूप से फैलाकर मिट्टी में मिलाएं',
          'पौध की जड़ों को ट्राइकोडर्मा घोल (10 ग्राम/लीटर) में 30 मिनट डुबोएं',
          'ट्राइकोडर्मा मिट्टी में बसकर फ्यूसेरियम को हरा देता है'
        ]
      },
      {
        name: 'Beejamrit Seed Treatment',
        nameHi: 'बीजामृत से बीज उपचार',
        steps: [
          'Mix 5 litre cow urine + 5 kg cow dung + 50 gm lime + handful local soil in 20 litre water',
          'Soak seeds overnight before sowing',
          'Dry seeds in shade before planting',
          'Builds seed immunity against soil-borne diseases'
        ],
        stepsHi: [
          '20 लीटर पानी में 5 लीटर गोमूत्र + 5 किलो गोबर + 50 ग्राम चूना + मुट्ठी भर स्थानीय मिट्टी मिलाएं',
          'बोने से पहले बीज रात भर भिगोएं',
          'बोने से पहले बीज छाया में सुखाएं',
          'मिट्टी जनित रोगों से बीज की प्रतिरक्षा बनाता है'
        ]
      }
    ],
    prevention: [
      'Practice crop rotation — avoid planting tomato in same field for 3+ years',
      'Use resistant varieties wherever available',
      'Maintain soil pH around 6.5-7.0 with lime if acidic',
      'Solarise soil in hot summer months with plastic mulch'
    ],
    preventionHi: [
      'फसल चक्र अपनाएं — 3+ साल तक उसी खेत में टमाटर न लगाएं',
      'जहाँ उपलब्ध हो प्रतिरोधी किस्में लगाएं',
      'मिट्टी का pH 6.5-7.0 रखें, अम्लीय हो तो चूना डालें',
      'गर्मी के महीनों में प्लास्टिक मल्च से मिट्टी का सोलराइजेशन करें'
    ],
    standards: 'Trichoderma and Beejamrit are PGS-India approved inputs.'
  },
  // ═══════════════════════════════════════════
  // RICE / PADDY DISEASES
  // ═══════════════════════════════════════════
  {
    id: 'rice-blast',
    crop: 'rice',
    cropHi: 'धान',
    name: 'Rice Blast',
    nameHi: 'धान का ब्लास्ट रोग',
    keywords: ['blast', 'ब्लास्ट', 'diamond', 'hira', 'spindle', 'eye shaped', 'rice disease', 'dhan rog'],
    symptoms: [
      'Diamond/spindle-shaped spots with grey centre and brown border on leaves',
      'Neck blast: neck of panicle turns black and breaks',
      'Severe infection causes entire panicle to become empty (chaffy grains)'
    ],
    symptomsHi: [
      'पत्तियों पर भूरे किनारे और भूरे बीच वाले हीरे/तकली के आकार के धब्बे',
      'गर्दन ब्लास्ट: बाली की गर्दन काली पड़ जाती है और टूट जाती है',
      'गंभीर संक्रमण में पूरी बाली खाली हो जाती है (खराब दाने)'
    ],
    cause: 'Magnaporthe oryzae fungus, spreads in high humidity with temperature 25-28°C',
    causeHi: 'मैग्नापोर्थे ओराइज़ी फफूंद, उच्च नमी और 25-28°C तापमान में फैलता है',
    remedies: [
      {
        name: 'Pseudomonas fluorescens Spray',
        nameHi: 'स्यूडोमोनास फ्लोरोसेंस स्प्रे',
        steps: [
          'Dissolve 10 gm Pseudomonas fluorescens per litre water',
          'Spray at tillering and panicle initiation stages',
          'This bio-agent produces antifungal compounds',
          'Approved bio-pesticide under NPOP'
        ],
        stepsHi: [
          'प्रति लीटर पानी में 10 ग्राम स्यूडोमोनास फ्लोरोसेंस घोलें',
          'कल्ले निकलने और बाली बनने की अवस्था में छिड़कें',
          'यह जैव-एजेंट फफूंदरोधी यौगिक बनाता है',
          'NPOP के तहत स्वीकृत जैव-कीटनाशक'
        ]
      },
      {
        name: 'Fermented Buttermilk Spray',
        nameHi: 'किण्वित छाछ स्प्रे',
        steps: [
          'Ferment 5 litres buttermilk for 5 days',
          'Dilute in 100 litres water',
          'Add 200 gm turmeric powder',
          'Spray on rice crop at weekly intervals during wet season'
        ],
        stepsHi: [
          '5 लीटर छाछ को 5 दिन किण्वित करें',
          '100 लीटर पानी में मिलाएं',
          '200 ग्राम हल्दी पाउडर डालें',
          'बरसात के मौसम में साप्ताहिक अंतराल पर छिड़कें'
        ]
      }
    ],
    prevention: [
      'Avoid excess nitrogen — use balanced organic nutrition',
      'Maintain proper spacing (20×15 cm) for air circulation',
      'Use blast-resistant varieties (Pusa Basmati 1121, MTU 1010)',
      'Drain excess water periodically'
    ],
    preventionHi: [
      'अत्यधिक नाइट्रोजन से बचें — संतुलित जैविक पोषण दें',
      'हवा के संचार के लिए उचित दूरी (20×15 सेमी) रखें',
      'ब्लास्ट प्रतिरोधी किस्में लगाएं (पूसा बासमती 1121, MTU 1010)',
      'समय-समय पर अतिरिक्त पानी निकालें'
    ],
    standards: 'Bio-agents approved under NPOP Annexure II.'
  },
  {
    id: 'rice-brown-spot',
    crop: 'rice',
    cropHi: 'धान',
    name: 'Brown Spot',
    nameHi: 'भूरा धब्बा रोग',
    keywords: ['brown spot', 'bhura dhabba', 'भूरा', 'oval spots', 'nutrient', 'kamzor', 'कमज़ोर'],
    symptoms: [
      'Oval brown spots on leaves, sometimes with yellow halo',
      'Spots also appear on leaf sheath and panicle',
      'Common in nutrient-deficient, poorly managed soils'
    ],
    symptomsHi: [
      'पत्तियों पर अंडाकार भूरे धब्बे, कभी-कभी पीले घेरे के साथ',
      'पत्ती आवरण और बाली पर भी धब्बे आते हैं',
      'पोषक तत्वों की कमी वाली मिट्टी में आम'
    ],
    cause: 'Bipolaris oryzae fungus, associated with poor soil fertility',
    causeHi: 'बाइपोलेरिस ओराइज़ी फफूंद, खराब मिट्टी उर्वरता से जुड़ा',
    remedies: [
      {
        name: 'Jeevamrit + Panchagavya Combined',
        nameHi: 'जीवामृत + पंचगव्य संयुक्त',
        steps: [
          'Apply Jeevamrit soil drench (200 litres/acre) every 15 days',
          'Spray 3% Panchagavya on leaves alternately',
          'This builds soil fertility which is the root cause',
          'Combine with 5 tonnes FYM per acre'
        ],
        stepsHi: [
          'हर 15 दिन जीवामृत (200 लीटर/एकड़) मिट्टी में डालें',
          'बारी-बारी से 3% पंचगव्य पत्तियों पर छिड़कें',
          'यह मिट्टी की उर्वरता बनाता है जो मूल कारण है',
          '5 टन गोबर की खाद प्रति एकड़ के साथ मिलाएं'
        ]
      },
      {
        name: 'Neem Cake Application',
        nameHi: 'नीम खली अनुप्रयोग',
        steps: [
          'Apply 250 kg neem cake per acre at last ploughing',
          'This enriches soil and provides slow-release nutrients',
          'Also has fungicidal properties',
          'Mix with compost for better results'
        ],
        stepsHi: [
          'अंतिम जुताई में 250 किलो नीम खली प्रति एकड़ डालें',
          'यह मिट्टी को समृद्ध करता है और धीमी गति से पोषक तत्व देता है',
          'फफूंदनाशक गुण भी हैं',
          'बेहतर परिणामों के लिए खाद के साथ मिलाएं'
        ]
      }
    ],
    prevention: [
      'Build soil organic matter with regular compost/FYM application',
      'Ensure adequate potassium through wood ash application (50 kg/acre)',
      'Use healthy certified seeds',
      'Maintain balanced soil nutrition through Jeevamrit cycles'
    ],
    preventionHi: [
      'नियमित खाद/गोबर की खाद से मिट्टी का जैविक पदार्थ बढ़ाएं',
      'लकड़ी की राख (50 किलो/एकड़) से पर्याप्त पोटैशियम सुनिश्चित करें',
      'स्वस्थ प्रमाणित बीज का उपयोग करें',
      'जीवामृत चक्रों से संतुलित मिट्टी पोषण बनाए रखें'
    ],
    standards: 'PGS-India certified practice.'
  },
  {
    id: 'rice-stem-borer',
    crop: 'rice',
    cropHi: 'धान',
    name: 'Stem Borer',
    nameHi: 'तना छेदक',
    keywords: ['borer', 'chhedak', 'छेदक', 'dead heart', 'white ear', 'safed bali', 'सफेद बाली', 'hole', 'chhed'],
    symptoms: [
      'Dead hearts: central shoot dries up in vegetative stage',
      'White ears: panicle turns white and empty at grain filling stage',
      'Small holes visible at base of tillers'
    ],
    symptomsHi: [
      'डेड हार्ट: वानस्पतिक अवस्था में बीच की पत्ती सूख जाती है',
      'सफेद बाली: दाने भरने के समय बाली सफेद और खाली हो जाती है',
      'कल्लों की जड़ में छोटे छेद दिखते हैं'
    ],
    cause: 'Yellow stem borer (Scirpophaga incertulas) larva bores into rice stem',
    causeHi: 'पीला तना छेदक (स्किर्पोफैगा) का लार्वा धान के तने में छेद करता है',
    remedies: [
      {
        name: 'Trichogramma Egg Parasitoid Release',
        nameHi: 'ट्राइकोग्रामा अंड परजीवी छोड़ना',
        steps: [
          'Release Trichogramma japonicum cards (6-8 cards/acre)',
          'Release at 10-day intervals from 30 days after transplanting',
          'Place cards on plants in shade, stapled to leaves',
          'The tiny wasps parasitise stem borer eggs'
        ],
        stepsHi: [
          'ट्राइकोग्रामा जापोनिकम कार्ड (6-8 कार्ड/एकड़) छोड़ें',
          'रोपाई के 30 दिन बाद से 10 दिन के अंतराल पर छोड़ें',
          'कार्ड को छाया में पौधों पर रखें, पत्तियों से पिन करें',
          'छोटे ततैये तना छेदक के अंडों को खत्म करते हैं'
        ]
      },
      {
        name: 'Light Traps',
        nameHi: 'प्रकाश जाल',
        steps: [
          'Set up light traps with a bulb over a water tray with kerosene',
          'Place 1 trap per 5 acres',
          'Operate from 7 PM to 10 PM during moth flight period',
          'Adult moths are attracted and trapped, reducing egg laying'
        ],
        stepsHi: [
          'केरोसिन वाली पानी की ट्रे के ऊपर बल्ब से प्रकाश जाल लगाएं',
          '5 एकड़ में 1 जाल रखें',
          'कीट उड़ान अवधि में शाम 7 से रात 10 बजे तक चलाएं',
          'वयस्क पतंगे आकर्षित होकर फंस जाते हैं, अंडे देना कम होता है'
        ]
      }
    ],
    prevention: [
      'Cut and destroy stubbles close to ground after harvest',
      'Maintain proper water management — avoid continuous flooding',
      'Plant at recommended time to avoid peak pest period',
      'Encourage natural predators like spiders and dragonflies'
    ],
    preventionHi: [
      'कटाई के बाद ठूंठ ज़मीन के पास से काटकर नष्ट करें',
      'उचित जल प्रबंधन करें — लगातार पानी भरा न रखें',
      'अनुशंसित समय पर बोएं ताकि चरम कीट काल से बचें',
      'मकड़ी और ड्रैगनफ्लाई जैसे प्राकृतिक शत्रुओं को बढ़ावा दें'
    ],
    standards: 'Trichogramma release is PGS-India approved bio-control.'
  },
  // ═══════════════════════════════════════════
  // WHEAT DISEASES
  // ═══════════════════════════════════════════
  {
    id: 'wheat-rust',
    crop: 'wheat',
    cropHi: 'गेहूं',
    name: 'Wheat Rust (Yellow/Brown/Black)',
    nameHi: 'गेहूं का गेरुई/रतुआ रोग',
    keywords: ['rust', 'ratua', 'रतुआ', 'gerui', 'गेरुई', 'orange', 'naranja', 'powder', 'dhool', 'pustules'],
    symptoms: [
      'Yellow rust: yellow-orange stripe-like pustules on leaves',
      'Brown rust: scattered round brown-orange pustules on leaves',
      'Black rust: dark reddish-brown to black pustules on stems and leaves'
    ],
    symptomsHi: [
      'पीला रतुआ: पत्तियों पर पीले-नारंगी धारी जैसे फफोले',
      'भूरा रतुआ: पत्तियों पर बिखरे गोल भूरे-नारंगी फफोले',
      'काला रतुआ: तनों और पत्तियों पर गहरे लाल-भूरे से काले फफोले'
    ],
    cause: 'Puccinia species fungi, wind-borne spores, favoured by cool moist conditions',
    causeHi: 'पक्सिनिया प्रजाति की फफूंद, हवा से फैलने वाले बीजाणु, ठंडे नम मौसम में पनपते हैं',
    remedies: [
      {
        name: 'Neem Oil + Garlic Extract Spray',
        nameHi: 'नीम तेल + लहसुन अर्क स्प्रे',
        steps: [
          'Crush 500 gm garlic, soak in 5 litres water overnight',
          'Filter and add 30 ml neem oil + 10 ml liquid soap',
          'Make up to 15 litres with water',
          'Spray at first sign of orange/yellow pustules',
          'Repeat every 7 days until symptoms reduce'
        ],
        stepsHi: [
          '500 ग्राम लहसुन कूटकर 5 लीटर पानी में रात भर भिगोएं',
          'छानकर 30 मिली नीम तेल + 10 मिली तरल साबुन मिलाएं',
          'पानी मिलाकर 15 लीटर करें',
          'नारंगी/पीले फफोले दिखने पर तुरंत छिड़कें',
          'लक्षण कम होने तक हर 7 दिन दोहराएं'
        ]
      },
      {
        name: 'Cow Urine + Turmeric Spray',
        nameHi: 'गोमूत्र + हल्दी स्प्रे',
        steps: [
          'Mix 5 litres aged (15 days old) cow urine with 10 litres water',
          'Add 200 gm turmeric powder, stir well',
          'Spray on wheat crop at fortnightly intervals',
          'Cow urine has natural fungicidal properties'
        ],
        stepsHi: [
          '10 लीटर पानी में 5 लीटर पुराना (15 दिन) गोमूत्र मिलाएं',
          '200 ग्राम हल्दी पाउडर डालें, अच्छी तरह हिलाएं',
          'गेहूं की फसल पर 15 दिन के अंतराल पर छिड़कें',
          'गोमूत्र में प्राकृतिक फफूंदनाशक गुण होते हैं'
        ]
      }
    ],
    prevention: [
      'Sow rust-resistant varieties (HD 3226, DBW 187)',
      'Sow at recommended time (Nov 1-25 in North India) — late sowing increases risk',
      'Avoid excess irrigation during grain filling',
      'Destroy volunteer wheat plants and alternate hosts'
    ],
    preventionHi: [
      'रतुआ प्रतिरोधी किस्में बोएं (HD 3226, DBW 187)',
      'अनुशंसित समय पर बोएं (उत्तर भारत में 1-25 नवंबर) — देर से बोने पर खतरा बढ़ता है',
      'दाने भरते समय अधिक सिंचाई से बचें',
      'स्वयंसेवी गेहूं के पौधे और वैकल्पिक मेजबान नष्ट करें'
    ],
    standards: 'Neem-based sprays approved under NPOP.'
  },
  {
    id: 'wheat-aphid',
    crop: 'wheat',
    cropHi: 'गेहूं',
    name: 'Wheat Aphids',
    nameHi: 'गेहूं की माहू/चेपा',
    keywords: ['aphid', 'mahu', 'माहू', 'chepa', 'चेपा', 'sucking', 'chusne', 'green insect', 'hara keeda', 'honeydew'],
    symptoms: [
      'Clusters of small green/yellow insects on leaves and ear heads',
      'Sticky honeydew on leaves, followed by black sooty mold',
      'Leaves curl, plants weaken, grain filling affected'
    ],
    symptomsHi: [
      'पत्तियों और बालियों पर छोटे हरे/पीले कीड़ों के झुंड',
      'पत्तियों पर चिपचिपा पदार्थ, फिर काली फफूंद',
      'पत्तियाँ मुड़ जाती हैं, पौधे कमज़ोर होते हैं, दाने भरने में कमी'
    ],
    cause: 'Sitobion avenae and other aphid species, peak in Feb-March',
    causeHi: 'सिटोबियन एवेनी और अन्य माहू प्रजातियां, फरवरी-मार्च में चरम',
    remedies: [
      {
        name: 'Neem Oil Spray',
        nameHi: 'नीम तेल स्प्रे',
        steps: [
          'Mix 30-50 ml neem oil per 15 litres water',
          'Add 10 ml liquid soap as emulsifier',
          'Spray directly on aphid colonies on leaves and ears',
          'Spray in evening to avoid beneficial insect harm'
        ],
        stepsHi: [
          '15 लीटर पानी में 30-50 मिली नीम तेल मिलाएं',
          '10 मिली तरल साबुन इमल्सीफायर के रूप में डालें',
          'पत्तियों और बालियों पर माहू के झुंडों पर सीधे छिड़कें',
          'लाभदायक कीड़ों को बचाने के लिए शाम को छिड़कें'
        ]
      },
      {
        name: 'Release Ladybird Beetles',
        nameHi: 'लेडीबर्ड भृंग छोड़ना',
        steps: [
          'Encourage/release Coccinellid beetles (ladybirds) in wheat fields',
          'One ladybird can eat 50-60 aphids per day',
          'Avoid any broad-spectrum sprays that kill ladybirds',
          'Plant marigold borders to attract beneficial insects'
        ],
        stepsHi: [
          'गेहूं के खेतों में लेडीबर्ड भृंग को बढ़ावा दें/छोड़ें',
          'एक लेडीबर्ड प्रतिदिन 50-60 माहू खा सकती है',
          'लेडीबर्ड को मारने वाले व्यापक स्प्रे से बचें',
          'लाभदायक कीड़ों को आकर्षित करने के लिए गेंदे की बॉर्डर लगाएं'
        ]
      }
    ],
    prevention: [
      'Timely sowing to avoid peak aphid period',
      'Do not apply excess nitrogen which produces soft succulent growth',
      'Maintain biodiversity around fields to support natural enemies',
      'Plant trap crops like mustard on field borders'
    ],
    preventionHi: [
      'चरम माहू काल से बचने के लिए समय पर बोएं',
      'अधिक नाइट्रोजन न दें जो नरम रसीली वृद्धि करता है',
      'प्राकृतिक शत्रुओं के लिए खेत के आसपास जैव विविधता बनाए रखें',
      'खेत की मेड़ों पर सरसों जैसी ट्रैप फसल लगाएं'
    ],
    standards: 'Bio-control with native predators — PGS-India recommended.'
  },
  // ═══════════════════════════════════════════
  // COTTON DISEASES
  // ═══════════════════════════════════════════
  {
    id: 'cotton-bollworm',
    crop: 'cotton',
    cropHi: 'कपास',
    name: 'Bollworm (Helicoverpa)',
    nameHi: 'बॉलवर्म / अमेरिकन सूंडी',
    keywords: ['bollworm', 'sundi', 'सूंडी', 'caterpillar', 'boll damage', 'hole in boll', 'worm', 'keeda', 'helicoverpa'],
    symptoms: [
      'Round bore holes in green bolls',
      'Caterpillars found feeding inside bolls',
      'Flower buds and squares drop prematurely',
      'Frass (excrement) visible near bore holes'
    ],
    symptomsHi: [
      'हरे टिंडों में गोल छेद',
      'टिंडों के अंदर सूंडी खाती हुई मिलती है',
      'फूल की कलियाँ और स्क्वायर समय से पहले गिर जाते हैं',
      'छेदों के पास मल (फ्रास) दिखता है'
    ],
    cause: 'Helicoverpa armigera moth lays eggs on flowers; larvae bore into bolls',
    causeHi: 'हेलिकोवर्पा आर्मीगेरा पतंगा फूलों पर अंडे देता है; लार्वा टिंडों में छेद करता है',
    remedies: [
      {
        name: 'HaNPV (Virus Bio-pesticide)',
        nameHi: 'HaNPV (विषाणु जैव-कीटनाशक)',
        steps: [
          'Spray Helicoverpa Nuclear Polyhedrosis Virus (HaNPV) at 250 LE/acre',
          'Mix in 200 litres water per acre',
          'Spray in evening (UV sensitive)',
          'Add 5 gm jaggery per litre as feeding stimulant',
          'Target small larvae (1st-2nd instar) for best effect'
        ],
        stepsHi: [
          'हेलिकोवर्पा न्यूक्लियर पॉलीहेड्रोसिस वायरस (HaNPV) 250 LE/एकड़ छिड़कें',
          '200 लीटर पानी प्रति एकड़ में मिलाएं',
          'शाम को छिड़कें (UV संवेदनशील)',
          'भोजन उत्तेजक के रूप में प्रति लीटर 5 ग्राम गुड़ मिलाएं',
          'सबसे अच्छे प्रभाव के लिए छोटे लार्वा को लक्षित करें'
        ]
      },
      {
        name: 'Neem Oil + Chilli-Garlic Spray',
        nameHi: 'नीम तेल + मिर्च-लहसुन स्प्रे',
        steps: [
          'Grind 250 gm green chillies + 250 gm garlic into paste',
          'Soak paste in 10 litres water overnight',
          'Filter and add 50 ml neem oil + 20 ml liquid soap',
          'Spray on cotton plants targeting flowering/boll stage',
          'Repeat every 10 days'
        ],
        stepsHi: [
          '250 ग्राम हरी मिर्च + 250 ग्राम लहसुन पीसकर पेस्ट बनाएं',
          'पेस्ट को 10 लीटर पानी में रात भर भिगोएं',
          'छानकर 50 मिली नीम तेल + 20 मिली तरल साबुन मिलाएं',
          'कपास के पौधों पर फूलने/टिंडा लगने के समय छिड़कें',
          'हर 10 दिन दोहराएं'
        ]
      },
      {
        name: 'Pheromone Traps',
        nameHi: 'फेरोमोन ट्रैप',
        steps: [
          'Install Helicoverpa pheromone traps at 5 per acre',
          'Place at crop canopy height',
          'Replace lure every 3 weeks',
          'Monitor moth catches to time spray applications'
        ],
        stepsHi: [
          'हेलिकोवर्पा फेरोमोन ट्रैप 5 प्रति एकड़ लगाएं',
          'फसल की ऊंचाई पर रखें',
          'हर 3 सप्ताह ल्यूर बदलें',
          'स्प्रे का सही समय जानने के लिए पतंगों की गिनती करें'
        ]
      }
    ],
    prevention: [
      'Plant trap crops: pigeon pea, marigold on borders',
      'Release Trichogramma egg parasitoids (1 lakh/acre, 6 releases)',
      'Hand-pick and destroy large larvae',
      'Bird perches: install T-shaped perches for predatory birds'
    ],
    preventionHi: [
      'ट्रैप फसल लगाएं: मेड़ों पर अरहर, गेंदा',
      'ट्राइकोग्रामा अंड परजीवी छोड़ें (1 लाख/एकड़, 6 बार)',
      'बड़ी सूंडियों को हाथ से चुनकर नष्ट करें',
      'पक्षी बैठक: शिकारी पक्षियों के लिए T-आकार के बैठक लगाएं'
    ],
    standards: 'HaNPV and Trichogramma are NPOP approved bio-control agents.'
  },
  {
    id: 'cotton-whitefly',
    crop: 'cotton',
    cropHi: 'कपास',
    name: 'Whitefly',
    nameHi: 'सफेद मक्खी',
    keywords: ['whitefly', 'safed makhi', 'सफेद मक्खी', 'sticky', 'chipchipa', 'चिपचिपा', 'sooty', 'kali fungus'],
    symptoms: [
      'Tiny white flying insects on leaf undersides',
      'Sticky honeydew secretion on leaves',
      'Black sooty mold develops on honeydew',
      'Leaves yellow and curl downward'
    ],
    symptomsHi: [
      'पत्तियों के नीचे छोटी सफेद उड़ने वाली मक्खियां',
      'पत्तियों पर चिपचिपा स्राव',
      'चिपचिपे पदार्थ पर काली फफूंद विकसित होती है',
      'पत्तियां पीली और नीचे की ओर मुड़ जाती हैं'
    ],
    cause: 'Bemisia tabaci, thrives in hot dry weather, also transmits leaf curl virus',
    causeHi: 'बेमिसिया टबेसी, गर्म शुष्क मौसम में पनपती है, पत्ती मोड़ वायरस भी फैलाती है',
    remedies: [
      {
        name: 'NSKE 5% Spray',
        nameHi: 'NSKE 5% स्प्रे',
        steps: [
          'Prepare 5% Neem Seed Kernel Extract (500 gm neem kernels per 10 litres)',
          'Soak crushed kernels overnight in water',
          'Filter through muslin cloth, add soap solution',
          'Spray focusing on leaf undersides where whiteflies hide',
          'Repeat every 7-10 days'
        ],
        stepsHi: [
          '5% नीम बीज गिरी अर्क बनाएं (10 लीटर में 500 ग्राम नीम गिरी)',
          'कूटी गिरी को रात भर पानी में भिगोएं',
          'मलमल के कपड़े से छानें, साबुन का घोल मिलाएं',
          'पत्तियों के नीचे की तरफ छिड़कें जहां सफेद मक्खियां छिपती हैं',
          'हर 7-10 दिन दोहराएं'
        ]
      },
      {
        name: 'Yellow Sticky Traps',
        nameHi: 'पीले चिपचिपे ट्रैप',
        steps: [
          'Install yellow sticky traps (12" × 10") at 20 per acre',
          'Place slightly above crop canopy',
          'Apply castor oil or commercial sticky material',
          'Replace when surface is covered with trapped insects'
        ],
        stepsHi: [
          'पीले चिपचिपे ट्रैप (12" × 10") 20 प्रति एकड़ लगाएं',
          'फसल की ऊंचाई से थोड़ा ऊपर रखें',
          'अरंडी का तेल या व्यावसायिक चिपचिपा पदार्थ लगाएं',
          'जब सतह कीड़ों से भर जाए तो बदलें'
        ]
      }
    ],
    prevention: [
      'Avoid late sowing of cotton',
      'Remove alternate host weeds from field borders',
      'Inter-crop with cowpea/green gram which host whitefly predators',
      'Maintain field hygiene — remove crop residues after picking'
    ],
    preventionHi: [
      'कपास की देर से बुवाई से बचें',
      'खेत की मेड़ों से वैकल्पिक मेजबान खरपतवार हटाएं',
      'लोबिया/मूंग के साथ अंतर-फसल करें जो सफेद मक्खी के शत्रुओं को रखती है',
      'खेत की सफाई रखें — चुनाई के बाद फसल अवशेष हटाएं'
    ],
    standards: 'Neem-based pest management is PGS-India core practice.'
  },
  // ═══════════════════════════════════════════
  // ONION DISEASES
  // ═══════════════════════════════════════════
  {
    id: 'onion-purple-blotch',
    crop: 'onion',
    cropHi: 'प्याज',
    name: 'Purple Blotch',
    nameHi: 'बैंगनी धब्बा रोग',
    keywords: ['purple', 'baingani', 'बैंगनी', 'blotch', 'onion spot', 'pyaz dhabba', 'violet'],
    symptoms: [
      'Small white spots initially, enlarging into purple-brown lesions',
      'Lesions have concentric rings and yellow halo',
      'Leaves dry from tip downward',
      'Neck area may rot in severe cases'
    ],
    symptomsHi: [
      'शुरू में छोटे सफेद धब्बे, बाद में बैंगनी-भूरे बड़े घाव',
      'घावों में गोल छल्ले और पीला घेरा होता है',
      'पत्तियां ऊपर से नीचे की ओर सूखती हैं',
      'गंभीर मामलों में गर्दन का हिस्सा सड़ सकता है'
    ],
    cause: 'Alternaria porri fungus, spreads in warm humid conditions',
    causeHi: 'अल्टरनेरिया पोर्री फफूंद, गर्म नम स्थितियों में फैलता है',
    remedies: [
      {
        name: 'Trichoderma Spray',
        nameHi: 'ट्राइकोडर्मा स्प्रे',
        steps: [
          'Mix 5 gm Trichoderma viride per litre water',
          'Add 1 ml sticker/liquid soap per litre',
          'Spray at 10-day intervals starting from 30 days after transplanting',
          'Combine with Pseudomonas for better disease control'
        ],
        stepsHi: [
          'प्रति लीटर पानी में 5 ग्राम ट्राइकोडर्मा विरिडी मिलाएं',
          'प्रति लीटर 1 मिली स्टिकर/तरल साबुन डालें',
          'रोपाई के 30 दिन बाद से 10 दिन के अंतराल पर छिड़कें',
          'बेहतर रोग नियंत्रण के लिए स्यूडोमोनास के साथ मिलाएं'
        ]
      },
      {
        name: 'Neem + Haldi Spray',
        nameHi: 'नीम + हल्दी स्प्रे',
        steps: [
          'Mix 30 ml neem oil in 15 litres water',
          'Add 100 gm turmeric powder + 10 ml soap',
          'Spray thoroughly covering both sides of leaves',
          'Apply weekly during humid weather'
        ],
        stepsHi: [
          '15 लीटर पानी में 30 मिली नीम तेल मिलाएं',
          '100 ग्राम हल्दी पाउडर + 10 मिली साबुन डालें',
          'पत्तियों के दोनों तरफ अच्छी तरह छिड़कें',
          'नम मौसम में साप्ताहिक छिड़कें'
        ]
      }
    ],
    prevention: [
      'Use healthy seedlings and disease-free sets',
      'Avoid excess irrigation — onion needs well-drained soil',
      'Proper plant spacing for air circulation',
      'Remove and destroy infected leaves promptly'
    ],
    preventionHi: [
      'स्वस्थ पौध और रोग-मुक्त सेट का उपयोग करें',
      'अधिक सिंचाई से बचें — प्याज को अच्छी जल निकासी चाहिए',
      'हवा के संचार के लिए उचित पौधों की दूरी',
      'संक्रमित पत्तियों को तुरंत हटाकर नष्ट करें'
    ],
    standards: 'NPOP approved bio-fungicides.'
  },
  {
    id: 'onion-thrips',
    crop: 'onion',
    cropHi: 'प्याज',
    name: 'Onion Thrips',
    nameHi: 'प्याज का थ्रिप्स',
    keywords: ['thrips', 'थ्रिप्स', 'silvery', 'safed dhaari', 'silver streaks', 'tiny insects', 'scratching', 'kharoch'],
    symptoms: [
      'Silvery white streaks/patches on leaves',
      'Leaves become distorted and curled at tips',
      'Tiny (1mm) slender yellow-brown insects in leaf folds',
      'Heavy infestation causes premature leaf drying'
    ],
    symptomsHi: [
      'पत्तियों पर चांदी जैसी सफेद धारियां/धब्बे',
      'पत्तियां विकृत हो जाती हैं और सिरों पर मुड़ जाती हैं',
      'पत्तियों की सिलवटों में बहुत छोटे (1mm) पीले-भूरे कीड़े',
      'भारी प्रकोप से पत्तियां समय से पहले सूख जाती हैं'
    ],
    cause: 'Thrips tabaci, peaks during hot dry weather (April-May)',
    causeHi: 'थ्रिप्स टबेसी, गर्म शुष्क मौसम (अप्रैल-मई) में चरम',
    remedies: [
      {
        name: 'Verticillium lecanii Bio-spray',
        nameHi: 'वर्टिसिलियम लेकेनी जैव-स्प्रे',
        steps: [
          'Mix 5 gm Verticillium lecanii per litre water',
          'Spray in evening when humidity is higher',
          'This entomopathogenic fungus infects and kills thrips',
          'Needs humid conditions (>60% RH) to work best',
          'Repeat at 10-day intervals'
        ],
        stepsHi: [
          'प्रति लीटर पानी में 5 ग्राम वर्टिसिलियम लेकेनी मिलाएं',
          'शाम को छिड़कें जब नमी अधिक होती है',
          'यह कीटजनक फफूंद थ्रिप्स को संक्रमित करके मारती है',
          'सबसे अच्छा काम करने के लिए नम स्थितियां (>60% RH) चाहिए',
          '10 दिन के अंतराल पर दोहराएं'
        ]
      },
      {
        name: 'Neem Oil + Soap Spray',
        nameHi: 'नीम तेल + साबुन स्प्रे',
        steps: [
          'Mix 50 ml neem oil in 15 litres water',
          'Add 15 ml liquid soap (helps oil mix with water)',
          'Focus spray on leaf axils where thrips hide',
          'Spray every 7 days during peak season'
        ],
        stepsHi: [
          '15 लीटर पानी में 50 मिली नीम तेल मिलाएं',
          '15 मिली तरल साबुन डालें (तेल को पानी में मिलाने में मदद करता है)',
          'पत्तियों की जड़ों पर छिड़कें जहां थ्रिप्स छिपते हैं',
          'चरम मौसम में हर 7 दिन छिड़कें'
        ]
      }
    ],
    prevention: [
      'Inter-crop with coriander which repels thrips',
      'Use blue sticky traps specific for thrips',
      'Maintain soil moisture through mulching — dry conditions worsen thrips',
      'Overhead sprinkler irrigation helps dislodge thrips'
    ],
    preventionHi: [
      'धनिया के साथ अंतर-फसल करें जो थ्रिप्स को भगाता है',
      'थ्रिप्स के लिए नीले चिपचिपे ट्रैप लगाएं',
      'मल्चिंग से मिट्टी की नमी बनाए रखें — सूखापन थ्रिप्स बढ़ाता है',
      'ऊपर से स्प्रिंकलर सिंचाई थ्रिप्स को गिराने में मदद करती है'
    ],
    standards: 'Verticillium lecanii is NPOP approved bio-pesticide.'
  },
  // ═══════════════════════════════════════════
  // POTATO DISEASES
  // ═══════════════════════════════════════════
  {
    id: 'potato-late-blight',
    crop: 'potato',
    cropHi: 'आलू',
    name: 'Potato Late Blight',
    nameHi: 'आलू का पिछेता झुलसा',
    keywords: ['potato blight', 'aloo jhulsa', 'आलू झुलसा', 'aloo rog', 'black rot', 'water soaked potato'],
    symptoms: [
      'Water-soaked dark green to black patches on leaf tips and edges',
      'White cottony growth on underside of leaves in humid weather',
      'Tubers develop brown rot that smells foul',
      'Entire field can be destroyed in 7-10 days in favourable weather'
    ],
    symptomsHi: [
      'पत्तियों के किनारों और सिरों पर पानी भरे गहरे हरे से काले धब्बे',
      'नम मौसम में पत्तियों के नीचे सफेद रुई जैसी वृद्धि',
      'कंद भूरे सड़न से ग्रस्त होते हैं और बदबू आती है',
      'अनुकूल मौसम में 7-10 दिनों में पूरा खेत नष्ट हो सकता है'
    ],
    cause: 'Phytophthora infestans, same pathogen as tomato late blight',
    causeHi: 'फाइटोफ्थोरा इन्फेस्टंस, टमाटर के पिछेते झुलसे जैसा ही रोगजनक',
    remedies: [
      {
        name: 'Bordeaux Mixture 1%',
        nameHi: 'बोर्डो मिश्रण 1%',
        steps: [
          'Dissolve 100 gm copper sulphate in 5 litres hot water',
          'Dissolve 100 gm freshly slaked lime in 5 litres water separately',
          'Pour copper solution into lime solution slowly',
          'Spray immediately on potato foliage',
          'Approved under NPOP in restricted quantities'
        ],
        stepsHi: [
          '5 लीटर गर्म पानी में 100 ग्राम तूतिया घोलें',
          '5 लीटर पानी में अलग से 100 ग्राम ताजा बुझा चूना घोलें',
          'कॉपर का घोल चूने के घोल में धीरे-धीरे डालें',
          'तुरंत आलू की पत्तियों पर छिड़कें',
          'NPOP के तहत सीमित मात्रा में अनुमत'
        ]
      },
      {
        name: 'Pseudomonas fluorescens Spray',
        nameHi: 'स्यूडोमोनास फ्लोरोसेंस स्प्रे',
        steps: [
          'Mix 10 gm per litre water',
          'Spray at 7-10 day intervals starting from 45 days after planting',
          'Apply before blight appears as preventive measure',
          'Can be combined with neem oil for enhanced effect'
        ],
        stepsHi: [
          'प्रति लीटर पानी में 10 ग्राम मिलाएं',
          'बोने के 45 दिन बाद से 7-10 दिन के अंतराल पर छिड़कें',
          'झुलसा आने से पहले रोकथाम के उपाय के रूप में लगाएं',
          'बेहतर प्रभाव के लिए नीम तेल के साथ मिला सकते हैं'
        ]
      }
    ],
    prevention: [
      'Use certified disease-free seed tubers',
      'Plant resistant varieties (Kufri Jyoti, Kufri Girdhari)',
      'Ridge planting with good drainage',
      'Destroy all volunteer potatoes and cull piles'
    ],
    preventionHi: [
      'प्रमाणित रोग-मुक्त बीज कंदों का उपयोग करें',
      'प्रतिरोधी किस्में लगाएं (कुफरी ज्योति, कुफरी गिरधारी)',
      'अच्छी जल निकासी के साथ मेड़ पर लगाएं',
      'सभी स्वयंसेवी आलू के पौधे और ढेर नष्ट करें'
    ],
    standards: 'Copper preparations restricted under NPOP Annexure I — max 6 kg/ha/year.'
  },
  // ═══════════════════════════════════════════
  // MAIZE DISEASES
  // ═══════════════════════════════════════════
  {
    id: 'maize-fall-armyworm',
    crop: 'maize',
    cropHi: 'मक्का',
    name: 'Fall Armyworm',
    nameHi: 'सैनिक कीट / फॉल आर्मीवर्म',
    keywords: ['armyworm', 'sainik', 'सैनिक', 'makka keeda', 'मक्का कीड़ा', 'whorl', 'funnel', 'eating leaves', 'pattiyan kha'],
    symptoms: [
      'Young larvae scrape leaf surface leaving white papery patches',
      'Older larvae eat leaves creating ragged holes',
      'Larvae hide in the whorl (funnel) of maize plant',
      'Copious frass (wet excrement) in whorl'
    ],
    symptomsHi: [
      'छोटे लार्वा पत्ती की सतह खुरचते हैं जिससे सफेद कागज़ जैसे धब्बे बनते हैं',
      'बड़े लार्वा पत्तियां खाकर बड़े-बड़े छेद बनाते हैं',
      'लार्वा मक्का के पौधे के फ़नल (गोभ) में छिपते हैं',
      'गोभ में बहुत सारा गीला मल दिखता है'
    ],
    cause: 'Spodoptera frugiperda, invasive pest in India since 2018, multiple generations per season',
    causeHi: 'स्पोडोप्टेरा फ्रुगिपर्डा, 2018 से भारत में आक्रामक कीट, एक मौसम में कई पीढ़ियां',
    remedies: [
      {
        name: 'Neem Oil + Sand Application',
        nameHi: 'नीम तेल + रेत अनुप्रयोग',
        steps: [
          'Mix neem oil with fine sand (20 ml oil per kg sand)',
          'Apply a pinch directly into the whorl of each maize plant',
          'The oily sand suffocates and repels larvae in the whorl',
          'Apply within 25 days of sowing when larvae are small'
        ],
        stepsHi: [
          'नीम तेल को बारीक रेत में मिलाएं (प्रति किलो रेत 20 मिली तेल)',
          'प्रत्येक मक्का पौधे की गोभ में एक चुटकी डालें',
          'तेल वाली रेत गोभ में लार्वा का दम घोंटती है और भगाती है',
          'बुवाई के 25 दिनों के अंदर जब लार्वा छोटे हों तब डालें'
        ]
      },
      {
        name: 'Metarhizium anisopliae Bio-spray',
        nameHi: 'मेटाराइजियम एनिसोप्ली जैव-स्प्रे',
        steps: [
          'Mix 5 gm Metarhizium anisopliae per litre water',
          'Add 1 ml sticker per litre',
          'Spray targeting the whorl/funnel of plants',
          'Apply in evening for best results (UV sensitive)',
          'This green muscardine fungus kills armyworm larvae'
        ],
        stepsHi: [
          'प्रति लीटर पानी में 5 ग्राम मेटाराइजियम एनिसोप्ली मिलाएं',
          'प्रति लीटर 1 मिली स्टिकर डालें',
          'पौधों की गोभ/फ़नल को लक्षित करके छिड़कें',
          'सबसे अच्छे परिणामों के लिए शाम को छिड़कें (UV संवेदनशील)',
          'यह हरी मस्करडाइन फफूंद आर्मीवर्म लार्वा को मारती है'
        ]
      }
    ],
    prevention: [
      'Early sowing to escape peak infestation period',
      'Inter-crop with cowpea or beans — confuses pest',
      'Install pheromone traps for early detection (5 per acre)',
      'Encourage natural enemies: earwigs, predatory bugs, spiders'
    ],
    preventionHi: [
      'चरम प्रकोप काल से बचने के लिए जल्दी बुवाई करें',
      'लोबिया या सेम के साथ अंतर-फसल करें — कीट को भ्रमित करती है',
      'शुरुआती पहचान के लिए फेरोमोन ट्रैप लगाएं (5 प्रति एकड़)',
      'प्राकृतिक शत्रुओं को बढ़ावा दें: कान कतरा, शिकारी कीट, मकड़ी'
    ],
    standards: 'Metarhizium is NPOP approved for organic pest management.'
  },
  // ═══════════════════════════════════════════
  // SOYBEAN DISEASES
  // ═══════════════════════════════════════════
  {
    id: 'soybean-yellow-mosaic',
    crop: 'soybean',
    cropHi: 'सोयाबीन',
    name: 'Yellow Mosaic Virus',
    nameHi: 'पीला मोज़ेक विषाणु रोग',
    keywords: ['mosaic', 'मोज़ेक', 'yellow patches', 'peela dhabba', 'पीला', 'virus', 'soybean yellow', 'mottling'],
    symptoms: [
      'Bright yellow and green mottled/mosaic pattern on leaves',
      'Leaves become small, puckered, and distorted',
      'Pods are small and few, with shrivelled seeds',
      'Severe stunting of infected plants'
    ],
    symptomsHi: [
      'पत्तियों पर चमकीले पीले और हरे रंग का मोज़ेक/चितकबरा पैटर्न',
      'पत्तियां छोटी, सिकुड़ी और विकृत हो जाती हैं',
      'फलियां छोटी और कम होती हैं, बीज सिकुड़े हुए',
      'संक्रमित पौधे बहुत छोटे रह जाते हैं'
    ],
    cause: 'Mungbean Yellow Mosaic India Virus (MYMIV), transmitted by whitefly',
    causeHi: 'मूंगबीन येलो मोज़ेक इंडिया वायरस (MYMIV), सफेद मक्खी द्वारा प्रसारित',
    remedies: [
      {
        name: 'Whitefly Control (Vector Management)',
        nameHi: 'सफेद मक्खी नियंत्रण (वाहक प्रबंधन)',
        steps: [
          'Install yellow sticky traps (20 per acre) to monitor and trap whiteflies',
          'Spray NSKE 5% at 7-day intervals',
          'Spray neem oil (30 ml/15 litres) on leaf undersides',
          'Removing the vector is the only way to control virus spread'
        ],
        stepsHi: [
          'सफेद मक्खी को जांचने और फंसाने के लिए पीले चिपचिपे ट्रैप (20 प्रति एकड़) लगाएं',
          '7 दिन के अंतराल पर NSKE 5% छिड़कें',
          'पत्तियों के नीचे नीम तेल (30 मिली/15 लीटर) छिड़कें',
          'वाहक को हटाना ही वायरस के प्रसार को नियंत्रित करने का एकमात्र तरीका है'
        ]
      },
      {
        name: 'Remove Infected Plants',
        nameHi: 'संक्रमित पौधे हटाएं',
        steps: [
          'Uproot and destroy plants showing mosaic symptoms early',
          'This virus cannot be cured once a plant is infected',
          'Removing source plants reduces virus reservoir in field',
          'Bury or burn far from the field'
        ],
        stepsHi: [
          'मोज़ेक लक्षण दिखाने वाले पौधों को जल्दी उखाड़कर नष्ट करें',
          'एक बार पौधा संक्रमित होने पर इस वायरस का इलाज नहीं',
          'स्रोत पौधे हटाने से खेत में वायरस का भंडार कम होता है',
          'खेत से दूर गाड़ दें या जला दें'
        ]
      }
    ],
    prevention: [
      'Grow resistant/tolerant varieties (JS 335, JS 95-60)',
      'Timely sowing with onset of monsoon — avoid late planting',
      'Seed treatment with Imidacloprid... NO — use Beejamrit instead for organic farms',
      'Border rows of maize/sorghum as windbreak against whitefly migration'
    ],
    preventionHi: [
      'प्रतिरोधी/सहनशील किस्में लगाएं (JS 335, JS 95-60)',
      'मानसून शुरू होने पर समय से बुवाई करें — देर से बुवाई से बचें',
      'जैविक खेती के लिए बीजामृत से बीज उपचार करें',
      'सफेद मक्खी प्रवास के खिलाफ बॉर्डर में मक्का/ज्वार लगाएं'
    ],
    standards: 'PGS-India IPM approach — vector management with bio-inputs.'
  },
  {
    id: 'soybean-rust',
    crop: 'soybean',
    cropHi: 'सोयाबीन',
    name: 'Soybean Rust',
    nameHi: 'सोयाबीन का रतुआ/गेरुई रोग',
    keywords: ['soybean rust', 'ratua', 'गेरुई', 'brown pustules', 'rust soybean', 'bhure dhabbe'],
    symptoms: [
      'Tiny reddish-brown to dark brown pustules on leaf underside',
      'Leaves turn yellow and drop prematurely',
      'Severe infection causes significant yield loss (up to 80%)'
    ],
    symptomsHi: [
      'पत्ती के नीचे छोटे लाल-भूरे से गहरे भूरे फफोले',
      'पत्तियां पीली होकर समय से पहले गिर जाती हैं',
      'गंभीर संक्रमण से उपज में भारी नुकसान (80% तक)'
    ],
    cause: 'Phakopsora pachyrhizi fungus, wind-borne spores, favoured by warm humid weather',
    causeHi: 'फैकोप्सोरा पैकिराइज़ी फफूंद, हवा से फैलने वाले बीजाणु, गर्म नम मौसम में',
    remedies: [
      {
        name: 'Neem Oil Spray',
        nameHi: 'नीम तेल स्प्रे',
        steps: [
          'Mix 50 ml neem oil per 15 litres water with soap emulsifier',
          'Spray on undersides of leaves where rust pustules appear',
          'Start spraying preventively at flowering stage',
          'Repeat every 10 days'
        ],
        stepsHi: [
          '15 लीटर पानी में 50 मिली नीम तेल साबुन इमल्सीफायर के साथ मिलाएं',
          'पत्तियों के नीचे जहां रतुआ के फफोले दिखें वहां छिड़कें',
          'फूलने की अवस्था में रोकथाम के लिए छिड़काव शुरू करें',
          'हर 10 दिन दोहराएं'
        ]
      },
      {
        name: 'Panchagavya Foliar Spray',
        nameHi: 'पंचगव्य पर्णीय स्प्रे',
        steps: [
          'Prepare standard Panchagavya (5 cow products fermented 20 days)',
          'Dilute 3% in water (3 litre per 100 litre)',
          'Spray on soybean foliage every 15 days',
          'Strengthens plant immunity and disease resistance'
        ],
        stepsHi: [
          'मानक पंचगव्य तैयार करें (5 गो-उत्पाद 20 दिन किण्वित)',
          '3% पानी में मिलाएं (100 लीटर में 3 लीटर)',
          'सोयाबीन की पत्तियों पर हर 15 दिन छिड़कें',
          'पौधे की प्रतिरक्षा और रोग प्रतिरोधक क्षमता मज़बूत करता है'
        ]
      }
    ],
    prevention: [
      'Early sowing (June) to escape peak rust period',
      'Use resistant/tolerant varieties',
      'Avoid excess plant density — maintain 45×5 cm spacing',
      'Destroy crop residues after harvest'
    ],
    preventionHi: [
      'शीर्ष रतुआ काल से बचने के लिए जून में जल्दी बुवाई करें',
      'प्रतिरोधी/सहनशील किस्में लगाएं',
      'अधिक पौधों की संख्या से बचें — 45×5 सेमी दूरी रखें',
      'कटाई के बाद फसल अवशेष नष्ट करें'
    ],
    standards: 'Neem and Panchagavya — PGS-India core inputs.'
  },
  // ═══════════════════════════════════════════
  // GENERAL / NUTRIENT DEFICIENCIES
  // ═══════════════════════════════════════════
  {
    id: 'general-phosphorus-deficiency',
    crop: 'general',
    cropHi: 'सामान्य',
    name: 'Phosphorus Deficiency',
    nameHi: 'फॉस्फोरस की कमी',
    keywords: ['purple leaves', 'baingani pattiyan', 'बैंगनी पत्तियां', 'phosphorus', 'fosfor', 'slow growth', 'dheemi badhotri', 'no flowering'],
    symptoms: [
      'Leaves develop purple/reddish-purple colour, especially on undersides',
      'Very slow growth and delayed maturity',
      'Poor root development',
      'Reduced flowering and fruit setting'
    ],
    symptomsHi: [
      'पत्तियों पर बैंगनी/लाल-बैंगनी रंग आता है, खासकर नीचे की तरफ',
      'बहुत धीमी वृद्धि और देरी से पकना',
      'जड़ों का खराब विकास',
      'फूलने और फल लगने में कमी'
    ],
    cause: 'Low phosphorus availability in acidic or alkaline soils, cold wet conditions',
    causeHi: 'अम्लीय या क्षारीय मिट्टी में फॉस्फोरस की कम उपलब्धता, ठंडी गीली स्थिति',
    remedies: [
      {
        name: 'Rock Phosphate Application',
        nameHi: 'रॉक फॉस्फेट अनुप्रयोग',
        steps: [
          'Apply 200-300 kg rock phosphate per acre',
          'Mix well into soil before sowing/transplanting',
          'Rock phosphate releases phosphorus slowly over 2-3 years',
          'Approved organic input under PGS-India'
        ],
        stepsHi: [
          'प्रति एकड़ 200-300 किलो रॉक फॉस्फेट डालें',
          'बुवाई/रोपाई से पहले मिट्टी में अच्छी तरह मिलाएं',
          'रॉक फॉस्फेट 2-3 साल में धीरे-धीरे फॉस्फोरस छोड़ता है',
          'PGS-India के तहत स्वीकृत जैविक इनपुट'
        ]
      },
      {
        name: 'PSB (Phosphorus Solubilising Bacteria)',
        nameHi: 'PSB (फॉस्फोरस घोलने वाले बैक्टीरिया)',
        steps: [
          'Mix 200 gm PSB culture per acre seed for seed treatment',
          'Or apply 2 kg PSB with FYM as soil application',
          'PSB converts locked phosphorus in soil into plant-available form',
          'Use within 6 months of manufacture date'
        ],
        stepsHi: [
          'बीज उपचार के लिए प्रति एकड़ बीज में 200 ग्राम PSB कल्चर मिलाएं',
          'या मिट्टी में डालने के लिए 2 किलो PSB गोबर खाद के साथ मिलाएं',
          'PSB मिट्टी में बंद फॉस्फोरस को पौधों के लिए उपलब्ध रूप में बदलता है',
          'निर्माण तिथि के 6 महीने के अंदर उपयोग करें'
        ]
      }
    ],
    prevention: [
      'Regular compost/FYM application maintains phosphorus levels',
      'Maintain soil pH between 6.0-7.0 for optimal phosphorus availability',
      'Use PSB every season for continuous phosphorus mobilization',
      'Green manuring with leguminous crops improves phosphorus cycling'
    ],
    preventionHi: [
      'नियमित खाद/गोबर की खाद से फॉस्फोरस स्तर बना रहता है',
      'फॉस्फोरस उपलब्धता के लिए मिट्टी का pH 6.0-7.0 बनाए रखें',
      'लगातार फॉस्फोरस गतिशीलता के लिए हर मौसम PSB का उपयोग करें',
      'दलहनी फसलों से हरी खाद फॉस्फोरस चक्र सुधारती है'
    ],
    standards: 'Rock phosphate and PSB are PGS-India approved inputs.'
  },
  {
    id: 'general-potassium-deficiency',
    crop: 'general',
    cropHi: 'सामान्य',
    name: 'Potassium Deficiency',
    nameHi: 'पोटैशियम की कमी',
    keywords: ['potassium', 'potash', 'पोटैशियम', 'edge burn', 'kinare jale', 'brown edges', 'tip burn', 'weak stem'],
    symptoms: [
      'Leaf edges/margins turn brown and scorched (marginal necrosis)',
      'Older leaves affected first — moves upward',
      'Weak stems prone to lodging (falling over)',
      'Poor fruit quality, small fruits, uneven ripening'
    ],
    symptomsHi: [
      'पत्तियों के किनारे भूरे और जले हुए दिखते हैं (किनारे का सूखना)',
      'पहले पुरानी पत्तियां प्रभावित होती हैं — ऊपर की ओर बढ़ता है',
      'तने कमज़ोर होते हैं, गिरने/लुढ़कने का खतरा',
      'फलों की गुणवत्ता खराब, छोटे फल, असमान पकना'
    ],
    cause: 'Low potassium in sandy/leached soils, heavy rainfall areas',
    causeHi: 'रेतीली/धुली मिट्टी में पोटैशियम कम, अधिक वर्षा वाले क्षेत्रों में',
    remedies: [
      {
        name: 'Wood Ash (Lakdi ki Rakh) Application',
        nameHi: 'लकड़ी की राख अनुप्रयोग',
        steps: [
          'Apply 50-100 kg wood ash per acre',
          'Mix into soil or apply around plants as top dressing',
          'Wood ash contains 3-7% potassium (K₂O)',
          'Also supplies calcium and trace minerals',
          'Best applied before monsoon or irrigation'
        ],
        stepsHi: [
          'प्रति एकड़ 50-100 किलो लकड़ी की राख डालें',
          'मिट्टी में मिलाएं या पौधों के आसपास टॉप ड्रेसिंग करें',
          'लकड़ी की राख में 3-7% पोटैशियम (K₂O) होता है',
          'कैल्शियम और सूक्ष्म खनिज भी देती है',
          'मानसून या सिंचाई से पहले डालना सबसे अच्छा'
        ]
      },
      {
        name: 'Banana Stem/Peel Compost',
        nameHi: 'केले के तने/छिलके की खाद',
        steps: [
          'Chop banana stems and peels, compost with cow dung for 45 days',
          'Banana plant parts are extremely rich in potassium',
          'Apply 1-2 tonnes per acre',
          'Excellent organic potassium source'
        ],
        stepsHi: [
          'केले के तने और छिलके काटकर गोबर के साथ 45 दिन खाद बनाएं',
          'केले के पौधे के हिस्से पोटैशियम से बहुत समृद्ध होते हैं',
          'प्रति एकड़ 1-2 टन डालें',
          'पोटैशियम का उत्कृष्ट जैविक स्रोत'
        ]
      }
    ],
    prevention: [
      'Incorporate crop residues back into soil instead of burning',
      'Regular wood ash application from farm waste burning',
      'Balanced nutrition through Jeevamrit and composting',
      'Soil testing every 2-3 years to monitor potassium levels'
    ],
    preventionHi: [
      'फसल अवशेषों को जलाने के बजाय मिट्टी में वापस मिलाएं',
      'खेत के कचरे से बनी लकड़ी की राख नियमित डालें',
      'जीवामृत और खाद बनाकर संतुलित पोषण दें',
      'पोटैशियम स्तर की निगरानी के लिए हर 2-3 साल मिट्टी परीक्षण करें'
    ],
    standards: 'Wood ash and plant-based compost are PGS-India approved.'
  },
  {
    id: 'general-damping-off',
    crop: 'general',
    cropHi: 'सामान्य',
    name: 'Damping Off (Seedling Disease)',
    nameHi: 'आर्द्रगलन / पौध गलन रोग',
    keywords: ['damping', 'aardr galan', 'seedling death', 'paudh marna', 'पौध मरना', 'seedling rot', 'young plants dying', 'nursery disease'],
    symptoms: [
      'Seeds rot before germination (pre-emergence damping off)',
      'Seedlings collapse at soil level — stem becomes thin and water-soaked',
      'Seedlings fall over and die in patches',
      'White fungal threads visible on soil surface in nursery'
    ],
    symptomsHi: [
      'बीज अंकुरण से पहले सड़ जाते हैं (अंकुरण पूर्व गलन)',
      'पौध मिट्टी की सतह पर गिर जाती है — तना पतला और पानी भरा हो जाता है',
      'पौध गिरकर गोल-गोल क्षेत्रों में मर जाती है',
      'नर्सरी में मिट्टी की सतह पर सफेद फफूंद के धागे दिखते हैं'
    ],
    cause: 'Pythium, Rhizoctonia, or Fusarium fungi in wet poorly-drained nursery soil',
    causeHi: 'पायथियम, राइजोक्टोनिया या फ्यूसेरियम फफूंद, गीली खराब जल निकासी वाली नर्सरी मिट्टी में',
    remedies: [
      {
        name: 'Trichoderma Seed Treatment',
        nameHi: 'ट्राइकोडर्मा से बीज उपचार',
        steps: [
          'Mix 10 gm Trichoderma viride per kg seed',
          'Slightly moisten seeds, add Trichoderma powder, mix well',
          'Dry in shade for 30 minutes before sowing',
          'Trichoderma protects seeds from soil-borne fungi'
        ],
        stepsHi: [
          'प्रति किलो बीज में 10 ग्राम ट्राइकोडर्मा विरिडी मिलाएं',
          'बीज थोड़ा गीला करें, ट्राइकोडर्मा पाउडर डालकर अच्छी तरह मिलाएं',
          'बुवाई से पहले 30 मिनट छाया में सुखाएं',
          'ट्राइकोडर्मा बीजों को मिट्टी जनित फफूंद से बचाता है'
        ]
      },
      {
        name: 'Beejamrit Seed Treatment',
        nameHi: 'बीजामृत से बीज उपचार',
        steps: [
          'Mix 5 litre cow urine + 5 kg fresh cow dung + 50 gm lime in 20 litres water',
          'Add handful of soil from bund/undisturbed area',
          'Soak seeds for 12 hours or overnight',
          'Dry in shade before sowing',
          'Traditional Subhash Palekar Natural Farming method'
        ],
        stepsHi: [
          '20 लीटर पानी में 5 लीटर गोमूत्र + 5 किलो ताजा गोबर + 50 ग्राम चूना मिलाएं',
          'मेड़/अविक्षुब्ध क्षेत्र की मुट्ठी भर मिट्टी डालें',
          'बीज 12 घंटे या रात भर भिगोएं',
          'बुवाई से पहले छाया में सुखाएं',
          'पारंपरिक सुभाष पालेकर प्राकृतिक खेती विधि'
        ]
      }
    ],
    prevention: [
      'Use raised nursery beds with good drainage',
      'Sterilise nursery soil with solarisation (cover with plastic for 4-6 weeks in summer)',
      'Do not overwater nursery — maintain just moist conditions',
      'Ensure good air circulation — avoid overcrowding seedlings'
    ],
    preventionHi: [
      'अच्छी जल निकासी वाली उठी हुई नर्सरी क्यारियां बनाएं',
      'सोलराइजेशन से नर्सरी मिट्टी को जीवाणुरहित करें (गर्मी में 4-6 सप्ताह प्लास्टिक से ढकें)',
      'नर्सरी में अधिक पानी न दें — बस नम रखें',
      'अच्छा हवा संचार रखें — पौध बहुत पास-पास न लगाएं'
    ],
    standards: 'Trichoderma and Beejamrit are PGS-India standard practices.'
  }
];

// Export for use in AI engine
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DISEASE_DATABASE };
}
