function searchAI() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.getElementsByClassName("ai-item");

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(input) ? "block" : "none";
    }
}

function loadAI(type) {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("aiContainer");
            container.innerHTML = "";

            data[type].forEach(ai => {
                let a = document.createElement("a");
                a.href = ai.url;
                a.target = "_blank";
                a.className = "ai-item";
                a.innerHTML = `
    <span>${ai.name}</span>
    <span class="badge ${ai.price}">
        ${ai.price === "free" ? "Ücretsiz" : "Ücretli"}
    </span>
`;

                container.appendChild(a);
            });
        });
}
function globalSearchAI() {
    let input = document.getElementById("globalSearch").value.toLowerCase();
    let resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    if (input.length === 0) return;

    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            for (let category in data) {
                data[category].forEach(ai => {
                    if (ai.name.toLowerCase().includes(input)) {
                        let a = document.createElement("a");
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
function filterAI(type) {
    const items = document.getElementsByClassName("ai-item");

    for (let i = 0; i < items.length; i++) {
        const badge = items[i].querySelector(".badge");

        if (type === "all") {
            items[i].style.display = "block";
        } 
        else if (badge && badge.classList.contains(type)) {
            items[i].style.display = "block";
        } 
        else {
            items[i].style.display = "none";
        }
    }
}

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

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const icon = document.getElementById("themeIcon");
    const text = document.getElementById("themeText");

    if (!icon || !text) return;

    if (savedTheme === "light") {
        document.body.classList.add("light");
        icon.innerText = "☀️";
        text.innerText = "Light";
    } else {
        document.body.classList.remove("light");
        icon.innerText = "🌙";
        text.innerText = "Dark";
    }
});
function searchAI() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.getElementsByClassName("ai-item");

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(input) ? "block" : "none";
    }
}

function loadAI(type) {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("aiContainer");
            container.innerHTML = "";

            data[type].forEach(ai => {
                let a = document.createElement("a");
                a.href = ai.url;
                a.target = "_blank";
                a.className = "ai-item";
                a.innerHTML = `
    <span>${ai.name}</span>
    <span class="badge ${ai.price}">
        ${ai.price === "free" ? "Ücretsiz" : "Ücretli"}
    </span>
`;

                container.appendChild(a);
            });
        });
}
function globalSearchAI() {
    let input = document.getElementById("globalSearch").value.toLowerCase();
    let resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    if (input.length === 0) return;

    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            for (let category in data) {
                data[category].forEach(ai => {
                    if (ai.name.toLowerCase().includes(input)) {
                        let a = document.createElement("a");
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
function filterAI(type) {
    const items = document.getElementsByClassName("ai-item");

    for (let i = 0; i < items.length; i++) {
        const badge = items[i].querySelector(".badge");

        if (type === "all") {
            items[i].style.display = "block";
        } 
        else if (badge && badge.classList.contains(type)) {
            items[i].style.display = "block";
        } 
        else {
            items[i].style.display = "none";
        }
    }
}

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

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const icon = document.getElementById("themeIcon");
    const text = document.getElementById("themeText");

    if (!icon || !text) return;

    if (savedTheme === "light") {
        document.body.classList.add("light");
        icon.innerText = "☀️";
        text.innerText = "Light";
    } else {
        document.body.classList.remove("light");
        icon.innerText = "🌙";
        text.innerText = "Dark";
    }
});
let currentLang = "tr";

function toggleLang() {
  const langText = document.getElementById("langText");
  const langBtn = document.getElementById("langToggle");

  langBtn.style.transform = "scale(0.95)";
  setTimeout(() => langBtn.style.transform = "", 120);

  if (currentLang === "tr") {
    currentLang = "en";
    langText.innerText = "EN";
    langBtn.classList.add("active");
  } else {
    currentLang = "tr";
    langText.innerText = "TR";
    langBtn.classList.remove("active");
  }
}
const translations = {
  en: {
    "🖼️ Resim Yapan Yapay Zekâlar": "🖼️ AI Image Generation Tools",
    "Metinden görsel üreten popüler yapay zekâ araçları":
      "Popular AI tools that generate images from text",
    "Ücretsiz": "Free",
    "Ücretli": "Paid",
    "Hepsi": "All",
    "Ana Sayfa": "Home"
  },
  tr: {}
};
let currentLang = "tr";

function translatePage(lang) {
  currentLang = lang;

  document.querySelectorAll("body *").forEach(el => {
    el.childNodes.forEach(node => {
      if (node.nodeType === 3) {
        const text = node.nodeValue.trim();
        if (translations[lang][text]) {
          node.nodeValue = translations[lang][text];
        }
      }
    });
  });
}
