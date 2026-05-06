// ── Web Speech API Engine ─────────────────────────────────────
// Drop-in replacement for voicevox.js — identical API surface.
// Uses the browser's built-in SpeechSynthesis (works online, no local server).
// Prefers male Japanese voices on Chrome/Edge.

let currentUtterance = null;
let preferredVoice = null;

function getJapaneseVoice() {
  if (preferredVoice) return preferredVoice;
  const voices = window.speechSynthesis.getVoices();
  const priority = [
    v => v.name.includes('Keita'),
    v => v.name.includes('Ichiro'),
    v => v.name.includes('Microsoft') && v.lang.startsWith('ja') && v.name.includes('Male'),
    v => v.name.toLowerCase().includes('male') && v.lang.startsWith('ja'),
    v => v.name.includes('Google') && v.lang.startsWith('ja'),
    v => v.name.includes('Microsoft') && v.lang.startsWith('ja'),
    v => v.lang.startsWith('ja-JP'),
    v => v.lang.startsWith('ja'),
  ];
  for (const fn of priority) {
    const match = voices.find(fn);
    if (match) { preferredVoice = match; return match; }
  }
  return null;
}

function cleanJapanese(text) {
  return text
    .replace(/<rt[^>]*>[\s\S]*?<\/rt>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;/gi, '')
    .replace(/[A-Za-z]/g, '')
    .replace(/[→←↑↓↗↘※★☆◆◇■□▲△▼▽○●◎✦✕⚑]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function playJapanese(text, btnEl) {
  if (!('speechSynthesis' in window)) {
    showVvError('このブラウザは音声合成に対応していません。');
    return;
  }

  const plain = cleanJapanese(text);
  if (!plain) return;

  if (currentUtterance) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
    document.querySelectorAll('.vv-btn.playing').forEach(b => {
      b.classList.remove('playing');
      b.textContent = '🔊';
    });
    return;
  }

  if (btnEl) {
    btnEl.classList.add('playing');
    btnEl.textContent = '⏹';
  }

  const utt = new SpeechSynthesisUtterance(plain);
  utt.lang  = 'ja-JP';
  utt.rate  = 1.0;   // natural speed
  utt.pitch = 0.9;   // slightly lower = more male-sounding

  const voice = getJapaneseVoice();
  if (voice) utt.voice = voice;

  utt.onend = () => {
    if (btnEl) { btnEl.classList.remove('playing'); btnEl.textContent = '🔊'; }
    currentUtterance = null;
  };

  utt.onerror = (e) => {
    if (btnEl) { btnEl.classList.remove('playing'); btnEl.textContent = '🔊'; }
    currentUtterance = null;
    if (e.error !== 'interrupted') showVvError('音声の再生に失敗しました。');
  };

  currentUtterance = utt;
  window.speechSynthesis.speak(utt);
}

function playJP(text, btn) {
  playJapanese(text, btn);
}

function showVvError(msg) {
  let el = document.getElementById('vv-error');
  if (!el) {
    el = document.createElement('div');
    el.id = 'vv-error';
    el.style.cssText = 'position:fixed;bottom:1.5rem;right:1.5rem;background:#3d2d20;border:1px solid #e87a7a;border-radius:8px;padding:0.75rem 1rem;font-family:"Noto Sans JP",sans-serif;font-size:0.78rem;color:#e87a7a;z-index:999;max-width:300px;line-height:1.5;box-shadow:0 4px 20px rgba(0,0,0,0.4);';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { if (el) el.style.display = 'none'; }, 4000);
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    preferredVoice = null;
    getJapaneseVoice();
  };
}

(function injectVvStyles() {
  const s = document.createElement('style');
  s.textContent = `
    .vv-btn {
      display:inline-flex;align-items:center;justify-content:center;
      width:1.9rem;height:1.9rem;
      background:rgba(74,175,158,0.12);
      border:1px solid rgba(74,175,158,0.3);
      border-radius:50%;
      font-size:0.85rem;
      cursor:pointer;
      transition:all 0.2s;
      flex-shrink:0;
      vertical-align:middle;
      margin-left:0.4rem;
      line-height:1;
      color:#4aaf9e;
    }
    .vv-btn:hover { background:rgba(74,175,158,0.25); border-color:#4aaf9e; transform:scale(1.1); }
    .vv-btn.playing { background:rgba(232,122,122,0.15); border-color:#e87a7a; color:#e87a7a; animation:vvPulse 1s ease-in-out infinite; }
    @keyframes vvPulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
  `;
  document.head.appendChild(s);
})();
