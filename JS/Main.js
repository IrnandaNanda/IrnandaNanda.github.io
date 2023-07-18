document.addEventListener('DOMContentLoaded', () => {
    // Kode Anda di sini

    // toogle class active
const navbarNav = document.querySelector ('.navbar-nav');

// ketika menu di klik
document.querySelector('#menu').
onclick = () => {
    navbarNav.classList.toggle('active')
}

// klik di luar side bar menghilangkan fungsi menu
const hamburger = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})
});


