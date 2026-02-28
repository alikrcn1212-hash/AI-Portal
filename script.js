// script.js – Tam çalışan sürüm

let currentLang = localStorage.getItem("lang") || "tr";

// AI arama
function searchAI() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.getElementsByClassName("ai-item");
    for (let i = 0; i < items.length; i++) {
        const text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(input) ? "block" : "none";
    }
}

// AI kartları yükleme
function loadAI(type) {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("aiContainer");
            container.innerHTML = "";

            data[type].forEach(ai => {
                const a = document.createElement("a");
                a.href = ai.url;
                a.target = "_blank";
                a.className = "ai-item";
                a.innerHTML = `
                    <span>${ai.name}</span>
                    <span class="badge ${ai.price}">
                        ${ai.price === "free"
                            ? (currentLang === "tr" ? "Ücretsiz" : "Free")
                            : (currentLang === "tr" ? "Ücretli" : "Paid")}
                    </span>
                `;
                container.appendChild(a);
            });
        })
        .catch(err => console.error("AI kartları yüklenemedi:", err));
}

// Ücretsiz/Ücretli filtreleme
function filterAI(type) {
    const items = document.getElementsByClassName("ai-item");
    for (let i = 0; i < items.length; i++) {
        const badge = items[i].querySelector(".badge");
        if (type === "all") items[i].style.display = "block";
        else if (badge && badge.classList.contains(type)) items[i].style.display = "block";
        else items[i].style.display = "none";
    }
}

// Light/Dark mod
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

// Dil değiştirme
function toggleLang() {
    currentLang = currentLang === "tr" ? "en" : "tr";
    localStorage.setItem("lang", currentLang);

    // Kartları tekrar yükle
    const activeCategory = document.body.dataset.page;
    if (activeCategory && document.getElementById("aiContainer")) loadAI(activeCategory);

    // Dil butonunu güncelle
    const langText = document.getElementById("langText");
    if (langText) langText.innerText = currentLang.toUpperCase();
}

// Sayfa açıldığında
window.addEventListener("DOMContentLoaded", () => {
    // Theme ayarı
    const savedTheme = localStorage.getItem("theme");
    const icon = document.getElementById("themeIcon");
    const text = document.getElementById("themeText");

    if (savedTheme === "light") document.body.classList.add("light");
    else document.body.classList.remove("light");

    if (icon && text) {
        icon.innerText = document.body.classList.contains("light") ? "☀️" : "🌙";
        text.innerText = document.body.classList.contains("light") ? "Light" : "Dark";
    }

    // AI kartlarını yükle
    const activeCategory = document.body.dataset.page;
    if (activeCategory && document.getElementById("aiContainer")) loadAI(activeCategory);

    // Dil butonunu güncelle
    const langText = document.getElementById("langText");
    if (langText) langText.innerText = currentLang.toUpperCase();
});