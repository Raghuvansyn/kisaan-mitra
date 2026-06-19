# KisaanMitra

## Overview

Indian smallholder farmers transitioning to natural farming often lack
timely, localised guidance on crop disease diagnosis, weather conditions,
and market prices. Most advisory services are text-heavy, require
connectivity, or are not available in Hindi.

KisaanMitra is a voice-first mobile web application that addresses this
gap. It accepts spoken or typed queries in Hindi or English, routes them
to the appropriate knowledge module, and returns a structured spoken
response alongside a visual detail card. No backend server is required.
The application runs entirely in the browser.

---

## Features

The following features are implemented and verifiable from the source:

**Voice input and output**
- Microphone button invokes the Web Speech API (`SpeechRecognition`).
- Interim transcripts appear in real time above the input bar while the
  user is speaking.
- Every AI response is read aloud via `SpeechSynthesis` at 0.9x rate.
- Long responses are split at sentence boundaries to work around a
  Chrome bug that truncates utterances longer than ~200 characters.
- The speaker icon in each response card can be tapped to replay the
  voice answer.

**Text input**
- Standard text input accepts typed queries in addition to voice.
- Submit via Enter key or the send button.

**Disease identification module**
- Keyword-scored matching against a static database of 30+ crop/disease
  entries covering tomato, rice, wheat, cotton, onion, potato, maize,
  and soybean.
- Each matched entry includes: symptoms, likely cause, two to three
  organic remedy recipes with step-by-step instructions, prevention
  tips, and a PGS-India / NPOP standards note.
- Queries mentioning crops outside the supported set (guava, mango,
  banana, chilli, brinjal) return a structured "not in database" card
  rather than a false match.
- Queries with no crop match and insufficient symptom keywords fall
  back to a general organic guidance response.

**Weather module**
- Static three-day forecast data for five Indian regions: Punjab,
  Maharashtra, Uttar Pradesh, Karnataka, Rajasthan.
- Each region entry includes condition, temperature range, humidity,
  rainfall estimate, a seasonal farming advisory, and a list of
  suitable crops for the current season.

**Market module**
- Static mandi price data for eight crops: rice, wheat, onion, potato,
  tomato, cotton, maize, soybean.
- Each crop entry includes minimum, modal, and maximum price; a trend
  indicator; the government MSP; per-region price breakdowns; and a
  selling advisory.
- MSP comparison logic flags when the mandi modal price is below MSP
  and advises selling at a government procurement centre instead.
- An organic-produce premium section notes the typical price uplift
  available under PGS-India certification.

**Combined weather and market tab**
- The "Weather and Market" tab fires a combined query that renders a
  compact weather summary alongside top crop prices in a single card.

**Bilingual interface**
- Language toggle switches between Hindi (`hi-IN`) and English (`en-IN`).
- UI labels, tab text, input placeholder, onboarding copy, and all AI
  responses switch language atomically.
- Voice recognition language is updated to match the selected UI
  language.
- Preference is persisted to `localStorage`.

**Region selection**
- Dropdown selects from five supported regions.
- Region choice affects weather data and per-region mandi prices shown.
- Preference is persisted to `localStorage`.

**Domain guardrails**
- A prohibited-terms list (~30 entries: DAP, urea, chlorpyrifos,
  glyphosate, etc.) is checked before any module dispatch. Queries
  matching this list receive a fixed organic-alternatives response and
  are never forwarded to the knowledge modules.
- Off-topic queries are detected by checking whether the query contains
  any term from a farming-domain whitelist. Queries of five words or
  fewer bypass this check and are treated as farming queries.

**Onboarding overlay**
- A three-step instruction card is shown on first visit.
- Dismissed state is stored in `localStorage`; returning users skip
  directly to the welcome response.

**Follow-up suggestion chips**
- Each AI response card includes two to three tappable follow-up
  suggestions that re-submit the chip text as a new query.

---

## Architecture

```
User input (voice or text)
  │
  ▼
SpeechEngine (speech.js)
  STT: Web Speech API / SpeechRecognition
  TTS: Web Speech API / SpeechSynthesis
  │  final transcript
  ▼
AIEngine.processQuery() (ai-engine.js)
  │
  ├─ Guardrail: _isChemicalQuery()  → _chemicalGuardrailResponse()
  ├─ Guardrail: _isOffTopic()       → _offTopicResponse()
  │
  ├─ _detectModule()  ← keyword scoring across three word lists
  │     │
  │     ├─ 'disease'        → _processDiseaseQuery()
  │     │     ├─ _detectCrop()
  │     │     ├─ unsupported crop check → _unsupportedCropResponse()
  │     │     ├─ keyword + symptom scoring vs DISEASE_DATABASE
  │     │     └─ _formatDiseaseResponse() | _generalDiseaseResponse()
  │     │
  │     ├─ 'weather'        → _processWeatherQuery()
  │     │     └─ looks up WEATHER_DATA[region]
  │     │
  │     ├─ 'market'         → _processMarketQuery()
  │     │     └─ looks up MARKET_DATA.crops[crop].regionalPrices[region]
  │     │
  │     └─ 'weather-market' → _processWeatherMarketQuery()
  │
  ▼
Structured response object
  { voiceAnswer, card: { title, sections[] }, followUps[] }
  │
  ▼
app.js: renderResponse()
  Voice answer  → speech.speak()
  Card sections → DOM (chat area)
  Follow-ups    → tappable chips
```

File map:

- `index.html` — page structure, module tabs, input controls, onboarding overlay
- `styles.css` — design system, layout, component styles, animations
- `app.js` — application controller, event binding, rendering, state management
- `speech.js` — STT / TTS wrapper around Web Speech API
- `ai-engine.js` — intent routing, module dispatch, guardrails, response formatting
- `data/diseases.js` — `DISEASE_DATABASE` constant (30+ entries)
- `data/weather.js` — `WEATHER_DATA` constant (5 regions)
- `data/market.js` — `MARKET_DATA` constant (8 crops, 5 regions)

---

## Prompt Design

There is no external LLM in the production web application. All
responses are generated locally from static structured data.

**Intent routing**

`_detectModule()` scores the query against three keyword lists
(disease, weather, market). The module with the highest keyword match
count wins. Ties between weather and market produce a combined
`weather-market` response. Queries scoring zero on all lists default
to the disease module.

**Disease matching**

`_processDiseaseQuery()` iterates over every entry in
`DISEASE_DATABASE` and computes a score:

- +5 if the detected crop matches the disease's crop field
- +2 if the disease crop is `general`
- +3 for each disease keyword found in the query
- +1 for each query word (>2 chars) found anywhere in the disease's
  symptom strings

The highest-scoring entry above a threshold of 1 is returned. Below
threshold, `_generalDiseaseResponse()` is called.

**Crop detection**

`_detectCrop()` maps string keywords (English, romanised Hindi,
Devanagari) to crop identifiers. Thirteen crops are recognised:
tomato, rice, wheat, cotton, onion, potato, maize, soybean, guava,
mango, banana, chilli, brinjal. The first eight have disease data.
The remaining five trigger `_unsupportedCropResponse()`.

**Chemical guardrail**

`_isChemicalQuery()` checks the query against a list of ~30 prohibited
terms (synthetic pesticides, synthetic fertilisers, herbicides, GMO
keywords). A match short-circuits all module routing and returns the
fixed organic-alternatives card.

**Off-topic guardrail**

`_isOffTopic()` checks whether the query contains at least one term
from a farming-domain whitelist (~80 terms covering crop names,
disease vocabulary, Hindi symptom words, market terms, and common
question words). Queries of five words or fewer bypass this check.

**Response structure**

Every response object has this shape:

```json
{
  "voiceAnswer": "2-3 sentence spoken summary",
  "card": {
    "title": "Card heading",
    "icon": "emoji",
    "sections": [
      {
        "heading": "Section label",
        "bullets": ["..."],
        "type": "symptoms | cause | remedy | prevention | info | ..."
      }
    ]
  },
  "followUps": ["Chip text 1", "Chip text 2", "Chip text 3"]
}
```

Sections of type `weather-forecast` carry a `forecast` array instead
of `bullets`. Sections of type `price` carry a `priceData` object.
Both are rendered with specialised DOM templates in `app.js`.

---

## Localization

The application supports two locales: `hi-IN` (Hindi, default) and
`en-IN` (English).

All user-facing strings are conditionally selected in `ai-engine.js`
via the `this.isHindi` flag. This includes voice answers, card titles,
section headings, bullet text, and follow-up chip labels.

STT recognition language is set to `hi-IN` or `en-IN` on the
`SpeechRecognition` instance. TTS voice selection attempts to find an
`hi-IN` voice first, falling back to any `hi-*` voice. For English it
prefers `en-IN`, then `en-US`, then any `en-*` voice.

The UI language preference is stored in `localStorage` under the key
`kisaanmitra_lang` and restored on subsequent visits.

---

## Tech Stack

- HTML5 — page structure and semantic markup
- CSS3 — layout, component styles, animations (Vanilla CSS, no framework)
- JavaScript (ES2017, no transpile, no bundler) — all application logic
- Web Speech API — `SpeechRecognition` (STT) and `SpeechSynthesis` (TTS)
- `localStorage` — user preference persistence (language, region,
  first-visit flag)
- Python / Streamlit + Google Generative AI SDK — development prototype
  only, not part of the production deployment

No npm packages. No build step. No CDN dependencies. The application
loads from a flat file directory.

---

## How to Run

**Option 1 — any static file server**

```bash
cd /path/to/Connecting_Dreams
python3 -m http.server 8080
```

Open `http://localhost:8080` in Chrome or a Chromium-based browser.

**Option 2 — GitHub Pages (after publishing)**

Open `https://raghuvansyn.github.io/kisaan-mitra` directly.

**Browser requirement**

The Web Speech API (`SpeechRecognition`) is supported on Chrome,
Edge, and Safari 14.1+. Firefox does not support `SpeechRecognition`
as of 2024. Voice input degrades gracefully — the text input remains
fully functional on unsupported browsers.

Microphone access requires HTTPS or `localhost`. The application will
prompt for microphone permission on first use.

**StreamLit.py (development only)**

`StreamLit.py` is a separate early prototype that calls the Google
Generative AI API (`gemini-2.5-flash`) directly. It is not part of
the production application. To run it independently:

```bash
export GEMINI_API_KEY=your_key_here
pip install streamlit google-generativeai pillow
streamlit run StreamLit.py
```

---

## Known Limitations

**Disease database coverage**

Disease entries exist for eight crops only: tomato, rice, wheat,
cotton, onion, potato, maize, soybean. Queries about other crops
return a "not in database" response. The database is static — new
entries require a code change to `data/diseases.js`.

**Symptom matching accuracy**

Matching is keyword-based, not semantic. A query that describes a
genuine disease in unusual phrasing may score below threshold and fall
back to general guidance. False positives are possible if two diseases
share many keywords.

**Weather and market data**

All weather forecasts and mandi prices are static mock data embedded
in `data/weather.js` and `data/market.js`. They do not reflect real
conditions. Integration with a live weather API or Agmarknet would be
required for production use.

**Voice input quality**

The Web Speech API sends audio to a Google cloud service for
transcription. This requires an active internet connection even though
the rest of the application is fully offline-capable. In low-bandwidth
conditions, STT may fail with a `network` error; the text input
remains available as a fallback.

**Hindi voice availability**

The presence of an `hi-IN` TTS voice depends on the operating system
and browser configuration. On Android Chrome, a Hindi voice is
typically available. On desktop Chrome, it depends on system language
packs installed. The code logs a console warning and continues without
Hindi voice if none is found.

**No session history**

Chat history is maintained in memory (`state.chatHistory`) for the
duration of the page session. There is no persistence across page
reloads. Refreshing clears all previous conversation context.

**Single-language detection**

The STT recognition language must be set explicitly before recording.
If a user switches the UI to English but speaks Hindi, or vice versa,
recognition accuracy will degrade. The application does not perform
automatic language detection on incoming audio.

---

## Evaluation Notes

**Technical decisions**

The application makes no external API calls at query time. All routing
and response generation runs synchronously in the main thread with
negligible latency. This was prioritised over LLM-generated responses
to eliminate per-query cost, latency, and connectivity requirements.

Response objects are structured data, not free-form text. This makes
rendering deterministic and makes the disease card layout consistent
regardless of which crop or disease is matched.

The TTS chunking approach (splitting at sentence boundaries before
passing to `SpeechSynthesis.speak()`) addresses a documented Chrome
bug where utterances longer than roughly 200–250 characters get
silently truncated.

**UX decisions**

The default language is Hindi (`hi-IN`) because the target users are
predominantly Hindi-speaking farmers. English is an opt-in mode.

The onboarding overlay is shown only on first visit. Returning users
land directly on the chat interface. First-visit state is stored in
`localStorage`.

Follow-up chips are generated per response and reflect contextually
relevant next questions. They reduce the input burden for users with
lower text literacy or limited typing experience.

The microphone button doubles as a TTS stop control — tapping it
while the application is speaking stops playback rather than starting
recording. This prevents the common UX problem of a user trying to
speak over the voice response.

**Reliability decisions**

Every guardrail produces a useful response rather than an error. A
chemical-input query returns organic alternatives. An off-topic query
explains what the application can help with. An unsupported crop query
lists the supported crops. This ensures users are never left with a
dead end.

TTS errors are non-fatal — the `onerror` handler on each utterance
resolves the containing promise rather than rejecting it, so a TTS
failure never blocks the visual response from rendering.
