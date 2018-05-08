//Sliding menu after clicking burger with pure js

let burger = document.querySelector('#burger');
let nav = document.querySelector('#hidden-nav');
let body = document.querySelector('body');

burger.addEventListener("click", function () {
    if (nav.style.height === '')
        nav.style.height = '192px';
    else
        nav.style.height = '';
})

//Slideshow with pure js

let slides = document.querySelectorAll('.slides');
let index = 0;
let interval = setInterval('changeSlides()', 4000);

function changeSlides() {
    slides[index].className = 'slides';
    index = (index+1)%3;
    slides[index].className = "slides active"
}

//Showing text on main page, while user is scrolling (jQuery)

let paragraph = $('p');
let slideshow = $('#slideshow');

$(window).on('scroll', function () {
    let top = $(this).scrollTop();
    if (top > 400) {
        paragraph.css({
            'opacity': 1
        });
    }
    if (top > 600) {
        slideshow.css({
            'opacity': 1
        });
    }
});
