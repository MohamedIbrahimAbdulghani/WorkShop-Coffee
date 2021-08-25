// This is function => Counter in the about section
$(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 20,
        time: 1500
    })
});


let myButton = document.querySelector(".scrolltop");

window.onscroll = function () {
    // this function to know me the number in my scroll

    //console.log(window.pageYOffset)

    if (window.pageYOffset >= 620) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}

myButton.addEventListener("click", scroll);

function scroll() {
    window.scrollTo(0, 0);
}