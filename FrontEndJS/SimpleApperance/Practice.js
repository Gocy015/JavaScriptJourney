function initButton() {
    var btn = getColorButton()
    btn.className = 'gray-button';
    // btn.onclick = toggleButtonColor;
    btn.onclick = toggleTheme;
}

function getColorButton() {
    return document.querySelector('body > div > button[type = "ColorButton"]');
}

function toggleTheme() {
    var darkTheme = document.getElementById('dark_theme');
    var lightTheme = document.getElementById('light_theme');

    darkTheme.disabled = !darkTheme.disabled;
    lightTheme.disabled = !darkTheme.disabled;
}

function toggleButtonColor() {
    var btn = getColorButton();
    btn.className = btn.className === 'gray-button' ? 'red-button' : 'gray-button';
}

window.onload = function () {
    initButton();
}