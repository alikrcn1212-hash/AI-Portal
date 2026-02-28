// Dil için global değişken
let currentLang = localStorage.getItem("lang") || "tr";

// AI arama fonksiyonu
function searchAI() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.getElementsByClassName("ai-item");

    for (let i = 0; i < items.length; i++) {
        const text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(input) ? "block" : "none";
    }
}

// Global arama fonksiyonu
function globalSearchAI() {
    const input = document.getElementById("globalSearch").value.toLowerCase();
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    if (!input) return;

    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            for (const category in data) {
                data[category].forEach(ai => {
                    if (ai.name.toLowerCase().includes(input)) {
                        const a = document.createElement("a");
                        a.href = ai.url;
                        a.target = "_blank";
                        a.className = "ai-item";
                        a.innerText = `${ai.name} (${category})`;
                        resultsDiv.appendChild(a);
                    }
                });
            }
        });
}

// AI kartlarını yükleme
function loadAI(type) {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("aiContainer");
            if (!container) return;
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
        });
}

// Fiyat filtreleme
function filterAI(type) {
    const items = document.getElementsByClassName("ai-item");
    for (let i = 0; i < items.length; i++) {
        const badge = items[i].querySelector(".badge");
        if (type === "all" || (badge && badge.classList.contains(type))) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

// Tema değiştirme
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
    if (typeof applyTranslations === "function") applyTranslations();
    // AI kartlarını yeniden yükle
    const activeCategory = document.body.dataset.page;
    if (activeCategory && document.getElementById("aiContainer")) {
        loadAI(activeCategory);
    }
}

// Sayfa yüklenince
window.addEventListener("DOMContentLoaded", () => {
    // Tema
    const savedTheme = localStorage.getItem("theme");
    const icon = document.getElementById("themeIcon");
    const text = document.getElementById("themeText");

    if (icon && text) {
        if (savedTheme === "light") {
            document.body.classList.add("light");
            icon.innerText = "☀️";
            text.innerText = "Light";
        } else {
            document.body.classList.remove("light");
            icon.innerText = "🌙";
            text.innerText = "Dark";
        }
    }

    // AI kartlarını yükle
    const activeCategory = document.body.dataset.page;
    if (activeCategory && document.getElementById("aiContainer")) {
        loadAI(activeCategory);
    }
});