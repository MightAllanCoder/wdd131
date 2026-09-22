const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

document.querySelector("#current-year").textContent =
    new Date().getFullYear();

document.querySelector("#last-modified").textContent =
    document.lastModified;
