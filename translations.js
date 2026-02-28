let currentLang = localStorage.getItem("lang") || "tr";

const translations = {
  tr: {
    title: "🤖 AI Portal",
    subtitle: "En iyi yapay zekâ araçlarını tek yerde keşfet",
    searchPlaceholder: "🔍 Tüm yapay zekâlarda ara...",
    imageAI: "Resim Yapan AI’lar",
    imageAIDesc: "Metinden görsel üreten yapay zekâ araçları",
    videoAI: "Video Yapan AI’lar",
    videoAIDesc: "Metin ve görselden video oluşturan AI’lar",
    audioAI: "Ses Yapan AI’lar",
    audioAIDesc: "Konuşma, seslendirme ve müzik üreten yapay zekâlar",
    textAI: "Metin Yazan AI’lar",
    textAIDesc: "Blog, makale ve içerik üreten yapay zekâlar",
    bestAI: "Best AI Tools",
    bestAIDesc: "2026’nın en iyi yapay zekâ araçları",
    navHome: "Ana",
    navImage: "Resim",
    navVideo: "Video"
  },
  en: {
    title: "🤖 AI Portal",
    subtitle: "Discover the best AI tools in one place",
    searchPlaceholder: "🔍 Search all AI tools...",
    imageAI: "Image AI Tools",
    imageAIDesc: "AI tools that generate images from text",
    videoAI: "Video AI Tools",
    videoAIDesc: "AI tools that create videos from text or images",
    audioAI: "Audio AI Tools",
    audioAIDesc: "AI tools for speech, voice and music generation",
    textAI: "Text AI Tools",
    textAIDesc: "AI tools that generate blogs and content",
    bestAI: "Best AI Tools",
    bestAIDesc: "Top AI tools of 2026",
    navHome: "Home",
    navImage: "Images",
    navVideo: "Video"
  }
};

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) el.innerText = translations[currentLang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[currentLang][key]) el.placeholder = translations[currentLang][key];
  });

  const langText = document.getElementById("langText");
  const langBtn = document.getElementById("langToggle");

  if (langText && langBtn) {
    langText.innerText = currentLang.toUpperCase();

    if (currentLang === "en") {
      langBtn.classList.add("active");  // Mavi ışık efekti
    } else {
      langBtn.classList.remove("active");
    }
  }
}

function toggleLang() {
  currentLang = currentLang === "tr" ? "en" : "tr";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
}

document.addEventListener("DOMContentLoaded", applyTranslations);