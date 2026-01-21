const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const menuOverlay = document.getElementById('menuOverlay');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

menuOverlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

const darkModeSwitch = document.getElementById('darkModeSwitch');
darkModeSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
    localStorage.setItem('darkMode', this.checked);
});

if (localStorage.getItem('darkMode') === 'true') {
    darkModeSwitch.checked = true;
    document.body.classList.remove('light');
    document.body.classList.add('dark');
}
