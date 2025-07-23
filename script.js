
document.getElementById("golf-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const club = document.getElementById("club").value;
    const windSpeed = parseFloat(document.getElementById("windSpeed").value);
    const windDir = parseFloat(document.getElementById("windDirection").value);

    const clubData = {
        "PW": { loft: 46, apex: 24, dist: 140 },
        "9i": { loft: 42, apex: 26, dist: 150 },
        "8i": { loft: 38, apex: 28, dist: 160 },
        "7i": { loft: 34, apex: 30, dist: 170 },
        "6i": { loft: 30, apex: 32, dist: 180 },
        "5i": { loft: 27, apex: 34, dist: 190 },
        "4i": { loft: 24, apex: 36, dist: 200 },
        "3i": { loft: 21, apex: 38, dist: 210 }
    };

    const selected = clubData[club];

    // jednoduchý model korekce
    const windAngle = Math.cos((windDir * Math.PI) / 180);
    const distanceEffect = windSpeed * windAngle * (selected.apex / 50);
    const correctedDistance = Math.round(selected.dist + distanceEffect);

    const result = `
        <strong>Hůl:</strong> ${club} <br/>
        <strong>Původní vzdálenost:</strong> ${selected.dist} m<br/>
        <strong>Vliv větru:</strong> ${distanceEffect.toFixed(1)} m<br/>
        <strong><u>Doporučená vzdálenost:</u></strong> ${correctedDistance} m
    `;

    document.getElementById("result").innerHTML = result;
});
