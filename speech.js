/**
 * KisaanMitra — Speech Engine
 * Handles Speech-to-Text (STT) and Text-to-Speech (TTS)
 * with Hindi (hi-IN) and English (en-IN) support.
 */

class SpeechEngine {
  constructor() {
    this.recognition = null;
    this.synth = window.speechSynthesis;
    this.isListening = false;
    this.isSpeaking = false;
    this.currentLang = 'hi-IN'; // Default Hindi
    this.voices = [];
    this.hindiVoice = null;
    this.englishVoice = null;
    this.onResult = null;
    this.onInterim = null;
    this.onListeningChange = null;
    this.onSpeakingChange = null;
    this.onError = null;

    this._initSTT();
    this._initTTS();
  }

  // ─── STT SETUP ────────────────────────────────────────
  _initSTT() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      console.warn('SpeechRecognition not supported in this browser');
      this.sttSupported = false;
      return;
    }

    this.sttSupported = true;
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;
    this.recognition.lang = this.currentLang;

    this.recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      if (interimTranscript && this.onInterim) {
        this.onInterim(interimTranscript);
      }

      if (finalTranscript && this.onResult) {
        this.onResult(finalTranscript.trim());
      }
    };

    this.recognition.onstart = () => {
      this.isListening = true;
      if (this.onListeningChange) this.onListeningChange(true);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (this.onListeningChange) this.onListeningChange(false);
    };

    this.recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      this.isListening = false;
      if (this.onListeningChange) this.onListeningChange(false);
      
      if (this.onError) {
        let msg = '';
        switch (event.error) {
          case 'no-speech':
            msg = this.currentLang === 'hi-IN' 
              ? 'कोई आवाज़ नहीं सुनाई दी। कृपया फिर से बोलें।'
              : 'No speech detected. Please try again.';
            break;
          case 'not-allowed':
          case 'service-not-allowed':
            msg = this.currentLang === 'hi-IN'
              ? 'माइक्रोफोन की अनुमति नहीं है। कृपया ब्राउज़र सेटिंग्स में अनुमति दें।'
              : 'Microphone permission denied. Please allow in browser settings.';
            break;
          case 'network':
            msg = this.currentLang === 'hi-IN'
              ? 'इंटरनेट कनेक्शन की ज़रूरत है। कृपया नेटवर्क जांचें।'
              : 'Internet needed for voice. Please check your connection.';
            break;
          default:
            msg = this.currentLang === 'hi-IN'
              ? 'आवाज़ पहचानने में समस्या। कृपया टेक्स्ट में टाइप करें।'
              : 'Voice recognition issue. Please type your question.';
        }
        this.onError(msg);
      }
    };
  }

  // ─── TTS SETUP ────────────────────────────────────────
  _initTTS() {
    if (!this.synth) {
      console.warn('SpeechSynthesis not supported');
      this.ttsSupported = false;
      return;
    }

    this.ttsSupported = true;
    this._loadVoices();

    // Voices may load asynchronously
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this._loadVoices();
    }
  }

  _loadVoices() {
    this.voices = this.synth.getVoices();
    
    // Find best Hindi voice
    this.hindiVoice = this.voices.find(v => v.lang === 'hi-IN') 
      || this.voices.find(v => v.lang.startsWith('hi'))
      || null;

    // Find best English (India) voice
    this.englishVoice = this.voices.find(v => v.lang === 'en-IN')
      || this.voices.find(v => v.lang === 'en-US')
      || this.voices.find(v => v.lang.startsWith('en'))
      || null;

    if (this.hindiVoice) {
      console.log('Hindi voice found:', this.hindiVoice.name);
    }
    if (this.englishVoice) {
      console.log('English voice found:', this.englishVoice.name);
    }
  }

  // ─── PUBLIC API ───────────────────────────────────────
  
  /**
   * Set the language for both STT and TTS
   * @param {'hi-IN'|'en-IN'} lang 
   */
  setLanguage(lang) {
    this.currentLang = lang;
    if (this.recognition) {
      this.recognition.lang = lang;
    }
  }

  /**
   * Start listening for voice input
   */
  startListening() {
    if (!this.sttSupported) {
      if (this.onError) {
        this.onError(this.currentLang === 'hi-IN'
          ? 'यह ब्राउज़र आवाज़ सुन नहीं सकता। कृपया Chrome इस्तेमाल करें।'
          : 'Voice not supported on this browser. Please use Chrome.');
      }
      return;
    }

    // Stop any ongoing TTS
    this.stopSpeaking();

    try {
      this.recognition.lang = this.currentLang;
      this.recognition.start();
    } catch (e) {
      // Already started — restart
      this.recognition.stop();
      setTimeout(() => {
        try {
          this.recognition.start();
        } catch (err) {
          console.error('Failed to restart recognition:', err);
        }
      }, 200);
    }
  }

  /**
   * Stop listening
   */
  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }

  /**
   * Speak text aloud using TTS
   * @param {string} text - Text to speak
   * @param {string} [lang] - Override language for this utterance
   * @returns {Promise} resolves when speech finishes
   */
  speak(text, lang) {
    return new Promise((resolve, reject) => {
      if (!this.ttsSupported || !text) {
        resolve();
        return;
      }

      // Cancel any ongoing speech
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      const useLang = lang || this.currentLang;
      utterance.lang = useLang;
      
      // Select voice
      if (useLang.startsWith('hi') && this.hindiVoice) {
        utterance.voice = this.hindiVoice;
      } else if (useLang.startsWith('en') && this.englishVoice) {
        utterance.voice = this.englishVoice;
      }

      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      utterance.onstart = () => {
        this.isSpeaking = true;
        if (this.onSpeakingChange) this.onSpeakingChange(true);
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        if (this.onSpeakingChange) this.onSpeakingChange(false);
        resolve();
      };

      utterance.onerror = (event) => {
        this.isSpeaking = false;
        if (this.onSpeakingChange) this.onSpeakingChange(false);
        console.error('TTS error:', event.error);
        resolve(); // Don't reject — TTS is non-critical
      };

      // Chrome bug: long text gets cut off. Split into chunks if needed.
      if (text.length > 200) {
        this._speakChunked(text, utterance, resolve);
      } else {
        this.synth.speak(utterance);
      }
    });
  }

  /**
   * Handle Chrome bug where long TTS gets cut off
   */
  _speakChunked(text, baseUtterance, resolve) {
    const sentences = text.match(/[^.!?।]+[.!?।]*/g) || [text];
    let index = 0;

    const speakNext = () => {
      if (index >= sentences.length) {
        this.isSpeaking = false;
        if (this.onSpeakingChange) this.onSpeakingChange(false);
        resolve();
        return;
      }

      const chunk = new SpeechSynthesisUtterance(sentences[index].trim());
      chunk.lang = baseUtterance.lang;
      chunk.voice = baseUtterance.voice;
      chunk.rate = baseUtterance.rate;
      chunk.pitch = baseUtterance.pitch;
      chunk.volume = baseUtterance.volume;

      if (index === 0) {
        chunk.onstart = () => {
          this.isSpeaking = true;
          if (this.onSpeakingChange) this.onSpeakingChange(true);
        };
      }

      chunk.onend = () => {
        index++;
        speakNext();
      };

      chunk.onerror = () => {
        index++;
        speakNext();
      };

      this.synth.speak(chunk);
    };

    speakNext();
  }

  /**
   * Stop any ongoing TTS
   */
  stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      if (this.onSpeakingChange) this.onSpeakingChange(false);
    }
  }

  /**
   * Toggle listening on/off
   */
  toggleListening() {
    if (this.isListening) {
      this.stopListening();
    } else {
      this.startListening();
    }
  }

  /**
   * Check browser support status
   */
  getSupport() {
    return {
      stt: this.sttSupported,
      tts: this.ttsSupported,
      hindiVoice: !!this.hindiVoice,
      englishVoice: !!this.englishVoice
    };
  }
}
