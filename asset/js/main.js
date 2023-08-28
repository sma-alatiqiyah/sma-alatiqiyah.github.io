/* tulis JS nya sendiri ya, mengikuti seperti dalam video,
selamat belajar.. ^^ */
$(documet).ready(function(){
    $("#tenaga-pendidikan-slider").owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items:3,
        dots:false,
        margin:0,
        navText:[
            "<i class='fa fa-angle-left' aria-hidden='true'></i>",
            "<i class='fa fa-angle-rigt' aria-hidden='true'></i>"
        ],
        // navContainer: '#hero-area-nav',
    });
});