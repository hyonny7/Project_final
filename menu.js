window.onload = function() {
    var menuContent = document.querySelector('.content');
    var hoverContent = document.querySelector('.hover-content');
    var container = document.querySelector('.container');

    menuContent.addEventListener('mouseenter', function() {
        hoverContent.style.display = 'block';
        container.classList.add('menu-open');
    });

    menuContent.addEventListener('click', function() {
        if (container.classList.contains('menu-open')) {
            container.classList.remove('menu-open');
        } else {
            container.classList.add('menu-open');
        }
    });

    container.addEventListener('mouseleave', function() {
        hoverContent.style.display = 'none';
        container.classList.remove('menu-open');
    });
};