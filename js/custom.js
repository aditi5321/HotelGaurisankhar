$(document).ready(function () {
    var navbar = $('#sticker');

    function toggleNavbar() {
        if ($(window).scrollTop() > 50) {
            navbar.addClass('sticky');
        } else {
            navbar.removeClass('sticky');
        }
    }

    toggleNavbar();

    $(window).scroll(toggleNavbar);
});

$(document).ready(function () {
    $('.testimonial-item-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false
    });
    $('.room-detail-slider').slick({
        dots: false,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $(".activities-slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1444,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(".booking_slider").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(".room-slider").slick({
        arrows: true,
        dots: false,
        accessibility: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

});

$(document).ready(function () {
    var hasAnimated = false;

    $(window).scroll(function () {
        var counterBoxOffset = $("#counter-box").offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        if (!hasAnimated && windowBottom > counterBoxOffset) {
            $(".counter").each(function () {
                var $this = $(this),
                    targetNumber = $this.data("number");

                $({ countNum: $this.text() }).animate(
                    {
                        countNum: targetNumber,
                    },
                    {
                        duration: 850,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
                        },
                        complete: function () {
                            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
                        },
                    }
                );
            });
            hasAnimated = true;
        }
    });

    $(window).trigger('scroll');
});


function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// $(document).ready(function () {
//     var hasAnimated = false;

//     $(window).scroll(function () {
//         var counterBoxOffset = $("#counter-box").offset().top;
//         var windowBottom = $(window).scrollTop() + $(window).height();

//         console.log('Counter box offset:', counterBoxOffset);
//         console.log('Window bottom:', windowBottom);

//         if (!hasAnimated && windowBottom > counterBoxOffset) {
//             console.log('Animating counter');
//             $(".counter").each(function () {
//                 var $this = $(this),
//                     targetNumber = $this.data("number");

//                 $({ countNum: $this.text() }).animate(
//                     {
//                         countNum: targetNumber,
//                     },
//                     {
//                         duration: 850,
//                         easing: "swing",
//                         step: function () {
//                             $this.text(Math.ceil(this.countNum).toLocaleString("en"));
//                         },
//                         complete: function () {
//                             $this.text(Math.ceil(this.countNum).toLocaleString("en"));
//                         },
//                     }
//                 );
//             });
//             hasAnimated = true;
//         }
//     });


//     $(window).trigger('scroll');
// });








// document.addEventListener('DOMContentLoaded', function () {
//     const roomsMenu = document.querySelector('.menubar-menu-item.dropdown.span');
//     const submenu = roomsMenu.querySelector('.submenu');

//     roomsMenu.addEventListener('click', function (e) {
//         e.preventDefault();
//         submenu.classList.toggle('show');
//     });
// });

// $(' .team-item').each(function () {
//     var slider = $(this);
//     slider.slick({
//         arrows: true,
//         dots: false,
//         accessibility: false,
//         prevArrow: $('.prev'),
//         nextArrow: $('.next'),
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [{
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//         ]
//     });

//     var sLightbox = $(this);
//     sLightbox.slickLightbox({
//         src: 'src',
//         itemSelector: '.team-image img'
//     });
// });

// function openTab(evt, cityName) {
//     $('.tabcontent').hide();
//     $('.tablinks').removeClass('active');
//     $('#' + cityName).show();
//     $(evt.currentTarget).addClass('active');
// }

// $(document).ready(function () {
//     $('#defaultOpen').click();
// });



