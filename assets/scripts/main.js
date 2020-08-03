/* NAV MENU */
// Selecting items from HTML
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuLogo = document.querySelector('.menu-logo'); // all of the above need adding classes
const navItems = document.querySelectorAll('.nav-item'); // needs looping through 

// Setting state of menu 

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    menuLogo.classList.toggle('show');
    navItems.forEach(item => item.classList.toggle('show'));
    showMenu = !showMenu;
}

/* THEME CHANGER */
let themeDots = document.getElementsByClassName('theme-dot')

/* local storage */
let theme = localStorage.getItem('theme')
if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href= 'assets/styles/default.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href= 'assets/styles/blue.css'
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href= 'assets/styles/green.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href= 'assets/styles/purple.css'
    }

    localStorage.setItem('theme', mode)
}

