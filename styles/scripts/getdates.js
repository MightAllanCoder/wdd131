// Dynamically output current copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically output file last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;