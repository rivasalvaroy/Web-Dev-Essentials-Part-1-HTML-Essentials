localStorage.setItem("theme", "dark");

const userTheme = localStorage.getItem("theme");
document.body.classList.add(userTheme); // Applies the 'dark' theme
