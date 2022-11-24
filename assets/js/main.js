var button = document.querySelector(".theme-selector");
var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
var currentTheme;
var btnText = document.getElementById("btnText");

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
    currentTheme =
        document.documentElement.getAttribute("data-theme-preference") ===
        "dark"
            ? "light"
            : "dark";
    setTheme(currentTheme);
    if (currentTheme === "light") {
        btnText.innerText = "حالت تیره";
    } else {
        btnText.innerText = "حالت روشن";
    }
});

prefersDark.addEventListener("change", function (event) {
    currentTheme = event.matches ? "dark" : "light";
    setTheme(currentTheme);
});

window.onload = () => {
    currentTheme = localStorage.getItem("theme-preference");
    let lang = document.documentElement.getAttribute("lang");
    if (currentTheme === "light") {
        btnText.innerText = "حالت تیره";
    } else {
        btnText.innerText = "حالت روشن";
    }
    document.documentElement.setAttribute(
        "data-theme-preference",
        currentTheme
    );
    setDir(lang);
};

const setDir = (lang) => {
    if (lang === "fa") {
        document.documentElement.setAttribute("dir", "rtl");
    } else if (lang === "en") {
        document.documentElement.setAttribute("dir", "ltr");
    }
};

// Handlebars.registerHelper("trimString", function(passedString) {
//     const theString = passedString.substring(0, 30)
//     return new Handlebars.SafeString(theString)
// })