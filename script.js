async function fetchTarieven() {
    const response = await fetch("data/tarieven.json");
    const tarieven = await response.json();
    renderTarieven(tarieven);
}

function renderTarieven(data) {
    const typeFilter = document.getElementById("type");
    const results = document.getElementById("results");

    function update() {
        const selectedType = typeFilter.value;
        const filtered = data.filter(item => !selectedType || item.type === selectedType);

        results.innerHTML = filtered.map(item => `
            <div class="item">
                <h3>${item.aanbieder}</h3>
                <p>Type: ${item.type}</p>
                <p>Prijs per kWh: €${item.prijs.toFixed(3)}</p>
            </div>
        `).join("") || "<p>Geen resultaten gevonden.</p>";
    }

    typeFilter.addEventListener("change", update);
    update();
}

fetchTarieven();