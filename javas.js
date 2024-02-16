const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
};

// Set clock initially and update every 1000 ms
setClock();
setInterval(setClock, 1000);

const switchTheme = (evt) => {
    const switchBtn = evt.target;
    if (switchBtn.textContent.toLowerCase() === "light") {
        switchBtn.textContent = "dark";
        // localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        switchBtn.textContent = "light";
        // localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "dark");
    }
};

const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme, false);

// Fix the default theme
let currentTheme = localStorage.getItem("theme");

if (!currentTheme) {
    // If no theme is stored, default to dark mode
    currentTheme = "dark";
    localStorage.setItem("theme", currentTheme);
} else {
    // If a theme is stored, set the switch button text accordingly
    switchModeBtn.textContent = currentTheme;
}

document.documentElement.setAttribute("data-theme", currentTheme);
