var button = document.querySelector(".theme-selector");
var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
var currentTheme;

function setTheme(currentTheme) {
    var pressed = currentTheme === "dark" ? "true" : "false";

    document.documentElement.setAttribute(
        "data-theme-preference",
        currentTheme
    );
    localStorage.setItem("theme-preference", currentTheme);
}

if (localStorage.getItem("theme-preference")) {
    currentTheme = localStorage.getItem("theme-preference");
} else if (prefersDark.matches) {
    currentTheme = "dark";
} else {
    // default
    currentTheme = "light";
}

button.addEventListener("click", function (event) {
    console.log("Theme", currentTheme);
    currentTheme =
        document.documentElement.getAttribute("data-theme-preference") ===
        "dark"
            ? "light"
            : "dark";
    setTheme(currentTheme);
});

prefersDark.addEventListener("change", function (event) {
    currentTheme = event.matches ? "dark" : "light";
    setTheme(currentTheme);
});

window.onload = () => {
    currentTheme = localStorage.getItem("theme-preference");
    document.documentElement.setAttribute(
        "data-theme-preference",
        currentTheme
    );
};
