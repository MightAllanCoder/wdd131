document.addEventListener("DOMContentLoaded", () => {
  const reviewCountElement = document.getElementById("reviewCount");
  let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

  if (localStorage.getItem("reviewPending") === "true") {
    reviewCount += 1;
    localStorage.setItem("reviewCount", String(reviewCount));
    localStorage.removeItem("reviewPending");
  }

  if (reviewCountElement) {
    reviewCountElement.textContent = String(reviewCount);
  }

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});