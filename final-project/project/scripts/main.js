// Hardware Products Data Object Array
const products = [
  {
    id: "cam-4k-01",
    name: "4K Ultra HD Dome Camera",
    category: "camera",
    price: "$120.00",
    rating: 4.8,
    image: "images/4k-ultra-hd-dome%20-camera.jpg",
    description: "Vandal-proof indoor/outdoor surveillance camera with 30m night vision."
  },
  {
    id: "cam-ptz-02",
    name: "360° PTZ Outdoor Camera",
    category: "camera",
    price: "$210.00",
    rating: 4.9,
    image: "images/ptz-outdoor%20-camera.jpg",
    description: "Pan-Tilt-Zoom intelligent optical camera with automatic motion tracking."
  },
  {
    id: "nvr-8ch-03",
    name: "8-Channel NVR Storage Unit",
    category: "recorder",
    price: "$180.00",
    rating: 4.6,
    image: "images/8channel-nvr-storage-unit.jpg",
    description: "Network Video Recorder with 2TB pre-installed security grade hard drive."
  },
  {
    id: "acc-sol-04",
    name: "Solar Power Backup Panel",
    category: "accessory",
    price: "$65.00",
    rating: 4.7,
    image: "images/solar-power-backup-panel.jpg",
    description: "Continuous off-grid power supply compatible with outdoor wireless cameras."
  }
];

// Function 1: Navigation Toggle (DOM Event Listener & Modification)
function initMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
}

// Function 2: LocalStorage Visit Tracker (Conditional Branching & DOM)
function trackPageVisits() {
  const visitDisplay = document.getElementById("visit-message");
  if (!visitDisplay) return;

  let numVisits = Number(window.localStorage.getItem("siteVisits-ls")) || 0;

  if (numVisits === 0) {
    visitDisplay.textContent = "Welcome! This is your first visit to Tech & Security Hub.";
  } else {
    visitDisplay.textContent = `Welcome back! You have visited this portal ${numVisits} times.`;
  }

  numVisits++;
  localStorage.setItem("siteVisits-ls", numVisits);
}

// Function 3: Render Product Cards using Template Literals & Lazy Loading
function renderProducts(productList) {
  const container = document.getElementById("product-grid");
  if (!container) return;

  container.innerHTML = "";

  // Array Method: forEach
  productList.forEach((product) => {
    // Template Literals Exclusively Used
    const cardHTML = `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy" width="300" height="200">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <p>Rating: ⭐ ${product.rating} / 5</p>
        <p>${product.description}</p>
      </article>
    `;
    container.innerHTML += cardHTML;
  });
}

// Function 4: Filter Products using Array Filter Method
function setupCategoryFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (filterButtons.length === 0) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");

      const category = e.target.getAttribute("data-category");

      // Conditional Branching & Array Filter Method
      if (category === "all") {
        renderProducts(products);
      } else {
        const filtered = products.filter((item) => item.category === category);
        renderProducts(filtered);
      }
    });
  });
}

// Function 5: Form Submission Handling
function setupContactForm() {
  const contactForm = document.getElementById("contact-form");
  const responseBox = document.getElementById("form-response");

  if (contactForm && responseBox) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userName = document.getElementById("fullname").value;

      responseBox.textContent = `Thank you, ${userName}! Your security consultation request has been submitted successfully.`;
      responseBox.classList.remove("hidden");
      contactForm.reset();
    });
  }
}

// Function 6: Dynamic Footer Dates
function setFooterDates() {
  const yearElem = document.getElementById("currentyear");
  const modElem = document.getElementById("lastModified");

  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
  if (modElem) {
    modElem.textContent = `Last Modified: ${document.lastModified}`;
  }
}

// DOMContentLoaded Event Listener Initialization
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  trackPageVisits();
  renderProducts(products);
  setupCategoryFilters();
  setupContactForm();
  setFooterDates();
});