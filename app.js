/**
 * KisaanMitra — Main Application Logic
 * Ties together: Speech Engine, AI Engine, UI, and Data layers.
 */

(function () {
  'use strict';

  // ─── STATE ──────────────────────────────────────────
  const state = {
    currentLang: 'hi-IN',
    currentRegion: 'up',
    currentModule: 'disease',
    isFirstVisit: true,
    chatHistory: [],
    isProcessing: false
  };

  // ─── DOM REFS ───────────────────────────────────────
  const dom = {
    chatArea: document.getElementById('chatArea'),
    micBtn: document.getElementById('micBtn'),
    textInput: document.getElementById('textInput'),
    sendBtn: document.getElementById('sendBtn'),
    interimPreview: document.getElementById('interimPreview'),
    langHi: document.getElementById('langHi'),
    langEn: document.getElementById('langEn'),
    regionSelect: document.getElementById('regionSelect'),
    tabDisease: document.getElementById('tabDisease'),
    tabWeatherMarket: document.getElementById('tabWeatherMarket'),
    onboardingOverlay: document.getElementById('onboardingOverlay'),
    onboardStartBtn: document.getElementById('onboardStartBtn'),
    toast: document.getElementById('toast'),
    logoText: document.getElementById('logoText'),
    logoSub: document.getElementById('logoSub'),
    tabDiseaseText: document.getElementById('tabDiseaseText'),
    tabWeatherMarketText: document.getElementById('tabWeatherMarketText'),
    onboardTitle: document.getElementById('onboardTitle'),
    onboardSubtitle: document.getElementById('onboardSubtitle'),
    onboardStep1: document.getElementById('onboardStep1'),
    onboardStep2: document.getElementById('onboardStep2'),
    onboardStep3: document.getElementById('onboardStep3')
  };

  // ─── ENGINES ────────────────────────────────────────
  const speech = new SpeechEngine();
  const ai = new AIEngine();

  // ─── INIT ───────────────────────────────────────────
  function init() {
    // Check for first visit
    if (localStorage.getItem('kisaanmitra_visited')) {
      state.isFirstVisit = false;
      dom.onboardingOverlay.classList.add('hidden');
      showWelcomeMessage();
    }

    // Load saved region
    const savedRegion = localStorage.getItem('kisaanmitra_region');
    if (savedRegion) {
      state.currentRegion = savedRegion;
      dom.regionSelect.value = savedRegion;
    }

    // Load saved language
    const savedLang = localStorage.getItem('kisaanmitra_lang');
    if (savedLang) {
      setLanguage(savedLang);
    }

    // Setup speech callbacks
    setupSpeechCallbacks();

    // Bind events
    bindEvents();

    // Set initial AI state
    ai.setRegion(state.currentRegion);
    ai.setLanguage(state.currentLang);
  }

  // ─── SPEECH CALLBACKS ───────────────────────────────
  function setupSpeechCallbacks() {
    speech.onResult = (transcript) => {
      dom.interimPreview.classList.remove('visible');
      dom.interimPreview.textContent = '';
      processUserInput(transcript, true);
    };

    speech.onInterim = (transcript) => {
      dom.interimPreview.textContent = '🎙️ ' + transcript + '...';
      dom.interimPreview.classList.add('visible');
    };

    speech.onListeningChange = (isListening) => {
      if (isListening) {
        dom.micBtn.classList.add('listening');
        dom.micBtn.textContent = '⏹️';
      } else {
        dom.micBtn.classList.remove('listening');
        dom.micBtn.textContent = '🎙️';
        dom.interimPreview.classList.remove('visible');
      }
    };

    speech.onSpeakingChange = (isSpeaking) => {
      // Update all speaker icons in the chat
      document.querySelectorAll('.voice-answer-icon').forEach(icon => {
        if (isSpeaking) {
          icon.classList.add('speaking');
        } else {
          icon.classList.remove('speaking');
        }
      });
    };

    speech.onError = (message) => {
      showToast(message, 'error');
    };
  }

  // ─── EVENT BINDING ──────────────────────────────────
  function bindEvents() {
    // Mic button
    dom.micBtn.addEventListener('click', () => {
      if (speech.isSpeaking) {
        speech.stopSpeaking();
        return;
      }
      speech.toggleListening();
    });

    // Text input
    dom.textInput.addEventListener('input', () => {
      dom.sendBtn.disabled = !dom.textInput.value.trim();
    });

    dom.textInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && dom.textInput.value.trim()) {
        processUserInput(dom.textInput.value.trim(), false);
        dom.textInput.value = '';
        dom.sendBtn.disabled = true;
      }
    });

    // Send button
    dom.sendBtn.addEventListener('click', () => {
      if (dom.textInput.value.trim()) {
        processUserInput(dom.textInput.value.trim(), false);
        dom.textInput.value = '';
        dom.sendBtn.disabled = true;
      }
    });

    // Language toggle
    dom.langHi.addEventListener('click', () => setLanguage('hi-IN'));
    dom.langEn.addEventListener('click', () => setLanguage('en-IN'));

    // Region selector
    dom.regionSelect.addEventListener('change', (e) => {
      state.currentRegion = e.target.value;
      ai.setRegion(state.currentRegion);
      localStorage.setItem('kisaanmitra_region', state.currentRegion);
      
      const regionName = state.currentLang === 'hi-IN' 
        ? WEATHER_DATA[state.currentRegion].regionHi 
        : WEATHER_DATA[state.currentRegion].region;
      showToast(`📍 ${regionName}`, 'success');
    });

    // Module tabs
    dom.tabDisease.addEventListener('click', () => switchModule('disease'));
    dom.tabWeatherMarket.addEventListener('click', () => switchModule('weather-market'));

    // Onboarding
    dom.onboardStartBtn.addEventListener('click', () => {
      dom.onboardingOverlay.classList.add('hidden');
      localStorage.setItem('kisaanmitra_visited', 'true');
      state.isFirstVisit = false;
      showWelcomeMessage();
    });
  }

  // ─── LANGUAGE SWITCHING ─────────────────────────────
  function setLanguage(lang) {
    state.currentLang = lang;
    speech.setLanguage(lang);
    ai.setLanguage(lang);
    localStorage.setItem('kisaanmitra_lang', lang);

    const isHindi = lang === 'hi-IN';

    // Toggle active class
    dom.langHi.classList.toggle('active', isHindi);
    dom.langEn.classList.toggle('active', !isHindi);

    // Update UI text
    dom.logoText.textContent = isHindi ? 'किसानमित्र' : 'KisaanMitra';
    dom.logoSub.textContent = isHindi ? 'प्राकृतिक खेती सहायक' : 'Natural Farming Assistant';
    dom.tabDiseaseText.textContent = isHindi ? 'रोग पहचान' : 'Disease ID';
    dom.tabWeatherMarketText.textContent = isHindi ? 'मौसम और बाज़ार' : 'Weather & Market';
    dom.textInput.placeholder = isHindi ? 'अपना सवाल टाइप करें...' : 'Type your question...';

    // Update onboarding if visible
    if (!dom.onboardingOverlay.classList.contains('hidden')) {
      dom.onboardTitle.textContent = isHindi ? 'किसानमित्र' : 'KisaanMitra';
      dom.onboardSubtitle.textContent = isHindi 
        ? 'आपका प्राकृतिक खेती सहायक — बोलकर या लिखकर सवाल पूछें'
        : 'Your Natural Farming Assistant — ask by voice or text';
      dom.onboardStep1.innerHTML = isHindi
        ? '<strong>🎙️ माइक दबाएं</strong> — हिंदी या अंग्रेज़ी में बोलें'
        : '<strong>🎙️ Tap the mic</strong> — speak in Hindi or English';
      dom.onboardStep2.innerHTML = isHindi
        ? '<strong>🌱 फसल की समस्या बताएं</strong> — "मेरे टमाटर की पत्तियाँ पीली हो रही हैं"'
        : '<strong>🌱 Describe crop problem</strong> — "My tomato leaves are turning yellow"';
      dom.onboardStep3.innerHTML = isHindi
        ? '<strong>🌿 जैविक इलाज पाएं</strong> — जीवामृत, नीम, पंचगव्य की विधि'
        : '<strong>🌿 Get organic treatment</strong> — Jeevamrit, Neem, Panchagavya recipes';
    }
  }

  // ─── MODULE SWITCHING ───────────────────────────────
  function switchModule(module) {
    state.currentModule = module;

    dom.tabDisease.classList.toggle('active', module === 'disease');
    dom.tabWeatherMarket.classList.toggle('active', module === 'weather-market');

    // Show contextual response for the module
    if (module === 'weather-market') {
      const response = ai.processQuery(
        state.currentLang === 'hi-IN' ? 'मौसम और मंडी भाव बताओ' : 'Show weather and market prices',
        'weather-market'
      );
      renderResponse(response);
    }
  }

  // ─── PROCESS USER INPUT ─────────────────────────────
  async function processUserInput(text, isVoice) {
    if (state.isProcessing || !text) return;
    state.isProcessing = true;

    // Stop any ongoing TTS
    speech.stopSpeaking();

    // Add user message to chat
    addUserMessage(text, isVoice);

    // Show loading indicator
    const loadingEl = addLoadingIndicator();

    // Simulate a brief "thinking" delay for realism
    await delay(600 + Math.random() * 400);

    // Process through AI
    const response = ai.processQuery(text, state.currentModule === 'weather-market' ? 'auto' : 'auto');

    // Remove loading
    if (loadingEl && loadingEl.parentNode) {
      loadingEl.parentNode.removeChild(loadingEl);
    }

    // Render response
    renderResponse(response);

    // Speak voice answer
    if (response.voiceAnswer) {
      await speech.speak(response.voiceAnswer);
    }

    state.isProcessing = false;
  }

  // ─── ADD USER MESSAGE ───────────────────────────────
  function addUserMessage(text, isVoice) {
    const msgEl = document.createElement('div');
    msgEl.className = 'message message-user';
    msgEl.innerHTML = `
      <div class="user-bubble">
        ${isVoice ? '<span class="mic-icon">🎙️</span>' : ''}${escapeHtml(text)}
      </div>
    `;
    dom.chatArea.appendChild(msgEl);
    scrollToBottom();
  }

  // ─── ADD LOADING INDICATOR ──────────────────────────
  function addLoadingIndicator() {
    const loadingEl = document.createElement('div');
    loadingEl.className = 'message loading-card';
    loadingEl.innerHTML = `
      <div class="shimmer-line"></div>
      <div class="shimmer-line"></div>
      <div class="shimmer-line"></div>
      <div class="shimmer-line"></div>
      <div class="loading-dots">
        <span></span><span></span><span></span>
      </div>
    `;
    dom.chatArea.appendChild(loadingEl);
    scrollToBottom();
    return loadingEl;
  }

  // ─── RENDER RESPONSE ───────────────────────────────
  function renderResponse(response) {
    const cardEl = document.createElement('div');
    cardEl.className = 'message';

    let cardHTML = '<div class="response-card">';

    // Voice Answer section
    if (response.voiceAnswer) {
      cardHTML += `
        <div class="voice-answer">
          <span class="voice-answer-icon" onclick="replayVoice(this)" title="Tap to replay" data-text="${escapeAttr(response.voiceAnswer)}">🔊</span>
          <div class="voice-answer-text">${escapeHtml(response.voiceAnswer)}</div>
        </div>
      `;
    }

    // Card Title
    if (response.card && response.card.title) {
      cardHTML += `<div class="card-title">${escapeHtml(response.card.title)}</div>`;
    }

    // Card Sections
    if (response.card && response.card.sections) {
      for (const section of response.card.sections) {
        if (section.type === 'weather-forecast' && section.forecast) {
          // Special weather forecast grid
          cardHTML += `<div class="card-section" data-type="weather-forecast">
            <div class="section-heading">${escapeHtml(section.heading)}</div>
            <div class="forecast-grid">`;
          
          for (const day of section.forecast) {
            cardHTML += `
              <div class="forecast-day">
                <div class="forecast-day-name">${escapeHtml(day.day)}</div>
                <div class="forecast-day-icon">${day.icon}</div>
                <div class="forecast-day-temp">${escapeHtml(day.temp)}</div>
                <div class="forecast-day-detail">${escapeHtml(day.humidity)}</div>
                <div class="forecast-day-detail">${escapeHtml(day.rain)}</div>
              </div>
            `;
          }
          cardHTML += '</div></div>';

        } else if (section.type === 'price' && section.priceData) {
          // Special price card
          const p = section.priceData;
          cardHTML += `
            <div class="card-section" data-type="price">
              <div class="section-heading">${escapeHtml(section.heading)}</div>
              <div class="price-card-inner">
                <div class="price-main">
                  <div class="price-crop-name">
                    <span class="price-crop-icon">${p.icon}</span>
                    <span>${escapeHtml(p.crop)}</span>
                  </div>
                  <div class="price-trend">${p.trendIcon}</div>
                </div>
                <div class="price-values">
                  <div class="price-value-item">
                    <div class="price-value-label">Min</div>
                    <div class="price-value-amount">${escapeHtml(p.min)}</div>
                  </div>
                  <div class="price-value-item">
                    <div class="price-value-label">Modal</div>
                    <div class="price-value-amount">${escapeHtml(p.modal)}</div>
                  </div>
                  <div class="price-value-item">
                    <div class="price-value-label">Max</div>
                    <div class="price-value-amount">${escapeHtml(p.max)}</div>
                  </div>
                </div>
                <div class="price-msp-row">
                  <span class="price-msp-label">MSP (${p.unit})</span>
                  <span class="price-msp-value">${escapeHtml(p.msp)}</span>
                </div>
              </div>
            </div>
          `;

        } else {
          // Standard bullet list section
          cardHTML += `
            <div class="card-section" data-type="${section.type || 'default'}">
              <div class="section-heading">${escapeHtml(section.heading)}</div>
              <ul class="section-bullets">
                ${section.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}
              </ul>
            </div>
          `;
        }
      }
    }

    // Follow-up chips
    if (response.followUps && response.followUps.length > 0) {
      cardHTML += '<div class="follow-ups">';
      for (const fu of response.followUps) {
        cardHTML += `<button class="follow-up-chip" onclick="handleFollowUp(this)" data-query="${escapeAttr(fu)}">${escapeHtml(fu)}</button>`;
      }
      cardHTML += '</div>';
    }

    cardHTML += '</div>';
    cardEl.innerHTML = cardHTML;
    dom.chatArea.appendChild(cardEl);

    state.chatHistory.push(response);
    scrollToBottom();
  }

  // ─── WELCOME MESSAGE ───────────────────────────────
  function showWelcomeMessage() {
    const response = ai.getWelcomeResponse();
    renderResponse(response);
    // Don't auto-speak welcome on page load — wait for user interaction
  }

  // ─── TOASTS ─────────────────────────────────────────
  let toastTimeout;
  function showToast(message, type = '') {
    dom.toast.textContent = message;
    dom.toast.className = `toast visible ${type}`;
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      dom.toast.classList.remove('visible');
    }, 3000);
  }

  // ─── HELPERS ────────────────────────────────────────
  function scrollToBottom() {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function escapeAttr(text) {
    if (!text) return '';
    return text.replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ─── GLOBAL HANDLERS ───────────────────────────────
  // These are called from onclick attributes in rendered HTML
  window.handleFollowUp = function (el) {
    const query = el.getAttribute('data-query');
    if (query) {
      processUserInput(query, false);
    }
  };

  window.replayVoice = function (el) {
    const text = el.getAttribute('data-text');
    if (text) {
      if (speech.isSpeaking) {
        speech.stopSpeaking();
      } else {
        speech.speak(text);
      }
    }
  };

  // ─── START ──────────────────────────────────────────
  init();

})();
