let currentLang = localStorage.getItem("lang") || "tr";

const translations = {
  tr: {
    title: "🤖 AI Portal",
    subtitle: "En iyi yapay zekâ araçlarını tek yerde keşfet",
    imageAI: "Resim Yapan AI’lar",
    imageDesc: "Metinden görsel üreten yapay zekâ araçları",
    videoAI: "Video Yapan AI’lar",
    videoDesc: "Metin ve görselden video oluşturan AI’lar",
    audioAI: "Ses Yapan AI’lar",
    audioDesc: "Konuşma, seslendirme ve müzik üreten yapay zekâlar",
    textAI: "Metin Yazan AI’lar",
    textDesc: "Blog, makale ve içerik üreten yapay zekâlar",
    bestAI: "Best AI Tools",
    bestDesc: "2026’nın en iyi yapay zekâ araçları",
    lang: "TR",
    home: "Ana",
    image: "Resim",
    video: "Video"
  },
  en: {
    title: "🤖 AI Portal",
    subtitle: "Discover the best AI tools in one place",
    imageAI: "Image AI",
    imageDesc: "AI tools that generate images from text",
    videoAI: "Video AI",
    videoDesc: "AI tools that generate videos from text and images",
    audioAI: "Audio AI",
    audioDesc: "AI tools that create speech and music",
    textAI: "Text AI",
    textDesc: "AI tools that write articles and content",
    bestAI: "Best AI Tools",
    bestDesc: "The best AI tools of 2026",
    lang: "EN",
    home: "Home",
    image: "Image",
    video: "Video"
  }
};

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(translations[currentLang][key]) {
      el.innerText = translations[currentLang][key];
    }
  });
}

function toggleLang() {
  currentLang = currentLang === "tr" ? "en" : "tr";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
}

window.addEventListener("DOMContentLoaded", applyTranslations);
