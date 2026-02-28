
// Light/Dark modu
function toggleTheme() {
    const icon = document.getElementById("themeIcon");
    const text = document.getElementById("themeText");

    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        icon.innerText = "☀️";
        text.innerText = "Light";
    } else {
        localStorage.setItem("theme", "dark");
        icon.innerText = "🌙";
        text.innerText = "Dark";
    }
}

// Dil değiştirme ve mavi ışık efekti
function toggleLang() {
    const langButton = document.getElementById("langToggle");

    currentLang = currentLang === "tr" ? "en" : "tr";
    localStorage.setItem("lang", currentLang);

    // AI kartlarını yeniden yükle
    const activeCategory = document.body.dataset.page;
    if (activeCategory && document.getElementById("aiContainer")) loadAI(activeCategory);

    // Buton üzerindeki yazıyı değiştir
    const langText = document.getElementById("langText");
    if (langText) langText.innerText = currentLang.toUpperCase();

    // Mavi ışık efekti
    if (langButton) {
        if (currentLang === "en") langButton.classList.add("active");
        else langButton.classList.remove("active");
    }
}

// Arama ve filtreleme (önceki gibi)
function searchAI() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.getElementsByClassName("ai-item");
    for (let i = 0; i < items.length; i++) {
        const text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(input) ? "block" : "none";
    }
}

function filterAI(type) {
    const items = document.getElementsByClassName("ai-item");
    for (let i = 0; i < items.length; i++) {
        const badge = items[i].querySelector(".badge");
        if (type === "all") items[i].style.display = "block";
        else if (badge && badge.classList.contains(type)) items[i].style.display = "block";
        else items[i].style.display = "none";
    }
}

// Sayfa yüklendiğinde
window.addEventListener("DOMContentLoaded", () => {
    // Theme
    const savedTheme = localStorage.getItem("theme");
    const icon = document.getElementById("themeIcon");
    const text = document.getElementById("themeText");
    if (savedTheme === "light") document.body.classList.add("light");
    else document.body.classList.remove("light");
    if (icon && text) {
        icon.innerText = document.body.classList.contains("light") ? "☀️" : "🌙";
        text.innerText = document.body.classList.contains("light") ? "Light" : "Dark";
    }

    // AI kartları
    const activeCategory = document.body.dataset.page;
    if (activeCategory && document.getElementById("aiContainer")) loadAI(activeCategory);

    // Dil butonu ışığı
    const langButton = document.getElementById("langToggle");
    if (langButton) {
        if (currentLang === "en") langButton.classList.add("active");
        else langButton.classList.remove("active");
        const langText = document.getElementById("langText");
        if (langText) langText.innerText = currentLang.toUpperCase();
    }
});