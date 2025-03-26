// js/theme.js
document.addEventListener('DOMContentLoaded', function () {
    const themeSelect = document.getElementById('underline_select');

    themeSelect.addEventListener('change', function () {
        const selectedTheme = themeSelect.value.toLowerCase();
        applyTheme(selectedTheme);
    });

    function applyTheme(themeName) {
        // Remove all existing theme classes
        document.body.classList.remove('light-theme', 'dark-theme', 'actual-theme');

        // Add the new theme class
        if (themeName === 'clair') {
            document.body.classList.add('light-theme');
        } else if (themeName === 'sombre') {
            document.body.classList.add('dark-theme');
        } else if (themeName === 'violet') {
            document.body.classList.add('actual-theme');
        }
    }
});