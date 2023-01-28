let navLinks = document.querySelectorAll('[role="link"]');
navLinks.forEach(link => {
    link.addEventListener('click', activeNavLink)
})

function activeNavLink(e) {
    navLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
}