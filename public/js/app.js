// Icon variables
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// Function to toggle icons
const toggleIcons = () => {
    sunIcon.classList.toggle("hidden");
    moonIcon.classList.toggle("hidden");
}

// Function to set initial(Default) theme and icon visibility
// This function checks to ensure the user system preference is dark, then applies the 
// dark class accordingly if it is and removes the light class if it was default
const setInitialThemeAndIcons = () => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    } else {
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
    }
}

// Function to toggle theme
// This function switches the theme each time the theme button is toggled
const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem("theme", "dark");
    }
    toggleIcons();
}


// Event listeners
sunIcon.addEventListener("click", toggleTheme);
moonIcon.addEventListener("click", toggleTheme);

// Set initial theme and icon visibility
setInitialThemeAndIcons();
