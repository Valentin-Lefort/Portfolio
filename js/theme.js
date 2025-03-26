// js/theme.js
document.addEventListener('DOMContentLoaded', function () {
    const themeSelect = document.getElementById('underline_select');

    themeSelect.addEventListener('change', function () {
        const selectedTheme = themeSelect.value.toLowerCase();
        applyTheme(selectedTheme);
    });

    function applyTheme(themeName) {
        // Remove all existing theme classes from body, divs, headers, navs, buttons, and selects
        document.body.classList.remove('light-theme', 'dark-theme', 'violet-theme');
        const divs = document.querySelectorAll('div');
        divs.forEach(div => div.classList.remove('light-theme', 'dark-theme', 'violet-theme'));
        const headers = document.querySelectorAll('header');
        headers.forEach(header => header.classList.remove('light-theme', 'dark-theme', 'violet-theme'));
        const navs = document.querySelectorAll('nav');
        navs.forEach(nav => nav.classList.remove('light-theme', 'dark-theme', 'violet-theme'));
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.classList.remove('light-theme', 'dark-theme', 'violet-theme'));
        const selects = document.querySelectorAll('select');
        selects.forEach(select => select.classList.remove('light-theme', 'dark-theme', 'violet-theme'));
        const parapgrah = document.querySelectorAll('p');
        parapgrah.forEach(select => select.classList.remove('light-theme', 'dark-theme', 'violet-theme'));

        // Add the new theme class to body, divs, headers, navs, buttons, and selects
        if (themeName === 'light') {
            document.body.classList.add('light-theme');
            divs.forEach(div => div.classList.add('light-theme'));
            headers.forEach(header => header.classList.add('light-theme'));
            navs.forEach(nav => nav.classList.add('light-theme'));
            buttons.forEach(button => button.classList.add('light-theme'));
            selects.forEach(select => select.classList.add('light-theme'));
            parapgrah.forEach(select => select.classList.add('light-theme'));
        } else if (themeName === 'dark') {
            document.body.classList.add('dark-theme');
            divs.forEach(div => div.classList.add('dark-theme'));
            headers.forEach(header => header.classList.add('dark-theme'));
            navs.forEach(nav => nav.classList.add('dark-theme'));
            buttons.forEach(button => button.classList.add('dark-theme'));
            selects.forEach(select => select.classList.add('dark-theme'));
        } else if (themeName === 'violet') {
            document.body.classList.add('violet-theme');
            divs.forEach(div => div.classList.add('violet-theme'));
            headers.forEach(header => header.classList.add('violet-theme'));
            navs.forEach(nav => nav.classList.add('violet-theme'));
            buttons.forEach(button => button.classList.add('violet-theme'));
            selects.forEach(select => select.classList.add('violet-theme'));
        }
    }
});