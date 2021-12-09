const textview = document.querySelector(".textview");

function insert(num) {
  textview.value = textview.value + num;
  textview.value = textview.value.toLocaleString();
}

function equal() {
  const exp = textview.value;
  textview.value = eval(exp).toLocaleString();
}

function clean() {
  textview.value = "";
}

console.log(textview);

function toDelete() {
  textview.value = textview.value.slice(0, -1);
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  const radioBtn = document.querySelector(".switch");
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-new");
    radioBtn.style.backgroundColor = "hsl(177, 92%, 70%)";
  } else {
    setTheme("theme-dark");
    radioBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
})();
