const temperature = 8;
const windSpeed = 12;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

const windchillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windchillElement.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windchillElement.textContent = "N/A";
}

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;