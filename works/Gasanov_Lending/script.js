function toggleMenu() {
    var menu = document.querySelector('.nav-items');
    if (menu.style.left === '0px') {
        menu.style.left = '-400%'; 
    } else {
        menu.style.left = '0px';
    }
}

