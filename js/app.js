function toggleHide() {
    let btn = document.getElementsByClassName('ham')[0];
    let navLinks = document.getElementsByClassName('nav-links')[0];
    btn.addEventListener('click', () => {
        if (navLinks.style.display != 'none') {
            navLinks.style.display = 'none';
        }
        else {
            navLinks.style.display = 'block';
            navLinks.classList.add('active');
        }
    })
    
}