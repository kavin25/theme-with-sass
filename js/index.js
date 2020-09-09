document.querySelector("button").addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-theme") === "light")
        setDarkTheme();
    else setLightTheme();
});

const setDarkTheme = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("THEME_DATA_THEME", "dark");
};
const setLightTheme = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("THEME_DATA_THEME", "light");
};

window.addEventListener("load", () => {
    if (localStorage.getItem("THEME_DATA_THEME"))
        document.documentElement.setAttribute(
            "data-theme",
            localStorage.getItem("THEME_DATA_THEME")
        );
});