document.addEventListener("DOMContentLoaded", function(event) {
    /**** header ****/
    let header = document.querySelector('.header');
    let headerHeight = header.clientHeight;

    window.onscroll = function() {
        if(window.pageYOffset > headerHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed')
        }
    }
    
    /**** burger menu ****/

    let headerBurger = document.querySelector('.header__burger')
    let menu = document.querySelector('.menu')
    let body = document.querySelector('body')

    headerBurger.onclick = () => {
        headerBurger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }
});