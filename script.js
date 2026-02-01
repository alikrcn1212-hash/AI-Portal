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
