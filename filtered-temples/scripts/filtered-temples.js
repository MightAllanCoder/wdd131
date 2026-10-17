// Dynamic Footer Content
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Mobile Navigation Toggle
const mainNav = document.getElementById("primary-nav");
const hambutton = document.getElementById("hamburger");

hambutton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

// Temple Data Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
      imageUrl: "images/manti-utah-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
      imageUrl: "images/payson-utah-temple..jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
      imageUrl: "images/yigo-guam-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-d.c.-temple.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl: "images/logan-utah-temple.jpg"
  },
  {
    templeName: "Vernal Utah",
    location: "Vernal, Utah, United States",
    dedicated: "1997, November, 2",
    area: 38771,
    imageUrl: "images/vernal-utah-temple.jpg"
  },
  {
    templeName: "Harare Zimbabwe",
    location: "Harare, Zimbabwe",
    dedicated: "2024, May, 26",
    area: 17200,
      imageUrl: "images/harare-zimbabwe-temple.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "images/johannesburg-south-africa-temple.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
      imageUrl: "images/salt-lake-utah-temple.jpg"
  }
];

// Display Temple Cards Function
function displayTemples(templeList) {
    const container = document.getElementById("temple-cards");
    container.innerHTML = "";

    templeList.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        const dedication = document.createElement("p");
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";
        img.width = 300;
        img.height = 200;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

// Initial Call
displayTemples(temples);

// Filter Event Listeners
const heading = document.querySelector("main h2");

document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Home";
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Old Temples (Built before 1900)";
    displayTemples(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    }));
});

document.getElementById("new").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "New Temples (Built after 2000)";
    displayTemples(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    }));
});

document.getElementById("large").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Large Temples (Larger than 90,000 sq ft)";
    displayTemples(temples.filter(temple => temple.area > 90000));
});

document.getElementById("small").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Small Temples (Smaller than 10,000 sq ft)";
    displayTemples(temples.filter(temple => temple.area < 10000));
});