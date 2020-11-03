
$(function(){
    $.contextMenu({
        selector: '.cta-menu-epi', 
        trigger: 'left',
        items: $.contextMenu.fromMenu($('#contextMenu-episode')),        
    });
    $('.context-menu-list').css({ top: y + 50, left: x })
});

$(function(){
    $.contextMenu({
        selector: '.cta-share', 
        trigger: 'left',
        items: $.contextMenu.fromMenu($('#contextMenu-share')),        
    });
    $('.context-menu-list').css({ top: y + 50, left: x })
});

 $(document).ready(function() {
 
    
    // MAIN MENU ANIMATION
    // Menu change
    $(this).scrollTop(0); // importante <--
    var nav = $('header');


    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            nav.addClass("fixed-top");
        } else {
            nav.removeClass("fixed-top");
        }
    });
 
    // Preloader
    setTimeout(function(){
        $('.preloader').addClass('loaded');
    }, 2000);
 
});

$(document).ready(function () {

    /*=== light-mode Switch ===*/
    $('.light-mode-cta').click(function () {
        $(this).toggleClass('active');
        $('body').toggleClass('light-mode');
    });

    /*=== ContextMenu do Header ===*/
    $('.dropcta').click(function () {
        $('.dropmenu-header').toggleClass('open');
        $('.inv-modal').toggleClass('open');
    });

    /*=== Ativador Footer Player Switch ===*/
    $('.cta-player').click(function () {
        $('.footer-player').toggleClass('open');
        $('.content-container').toggleClass('player-open');
        $('.sidebar').toggleClass('player-open');
        $('.fila-sidebar').toggleClass('active');
        $('.nowplaying').toggleClass('active');
    });

    /*=== Ativador do sibar playlist  ===*/
    $('.cta-button-playlist-header').click(function () {
        $('.fila-sidebar').toggleClass('grow');
        $('.nowplaying').toggleClass('shrink');
    });
    
    /*=== Ativar o playlist e o Nowplayingr ===*/
    $('.cta-big-player').click(function () {
        $('.nowplaying').toggleClass('open');
        $('.fila-sidebar').toggleClass('open');
    });
    /*=== fix para o mobile  ===*/
    if ($(window).width() < 750) {
        $('.cta-big-player').click(function () {
            $('body').toggleClass('overhidden');
        }); 
     }

    /*=== Fechar o playlist e o Nowplaying ===*/
    $('.cta-close-nowplaying').click(function () {
        $('.nowplaying').toggleClass('open');
        $('.fila-sidebar').toggleClass('open');
    });
    /*=== fix para o mobile  ===*/
    if ($(window).width() < 750) {
        $('.cta-close-nowplaying').click(function () {
            $('body').toggleClass('overhidden');
        }); 
     }

    /*=== Tabs da playlist ===*/
    $('.epi-tabs').click(function () {
        $(this).addClass('active');
        $('.queue-tabs').removeClass('active');
        
        $('.queue-playlist').removeClass('select');
        $('.epi-playlist').addClass('select');
    });
    $('.queue-tabs').click(function () {
        $(this).addClass('active');
        $('.epi-tabs').removeClass('active');
        
        $('.epi-playlist').removeClass('select');
        $('.queue-playlist').addClass('select');
    });
    
    /*=== Interação do menu ===
    $('.cta-menu-epi').click(function () {
        $(this).toggleClass('open');
    });
    $('.inv-modal-menu').click(function () {
        $(this).removeClass('open');
    });*/


    $('.originais-carousel').owlCarousel({
        loop: true,
        autoWidth: true,
        //margin: 10,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'><svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.58348 6.78788L7.71598 11.9204C8.09467 12.2991 8.09467 12.9131 7.71598 13.2917C7.33729 13.6704 6.72332 13.6704 6.34462 13.2917L0.526443 7.47356C0.147752 7.09487 0.147752 6.48089 0.526443 6.1022L6.34462 0.284018C6.72331 -0.0946724 7.33729 -0.0946725 7.71598 0.284018C8.09467 0.662708 8.09467 1.27669 7.71598 1.65538L2.58348 6.78788Z' fill='#F2F2F2'/></svg>    </div>", "<div class='nav-btn next-slide'><svg width='8' height='14' viewBox='0 0 8 14' fill='none' ><path d='M5.41652 7.21212L0.284018 2.07962C-0.0946726 1.70093 -0.0946726 1.08695 0.284018 0.708259C0.662708 0.329569 1.27669 0.329569 1.65538 0.708259L7.47356 6.52644C7.85225 6.90513 7.85225 7.51911 7.47356 7.8978L1.65538 13.716C1.27669 14.0947 0.662708 14.0947 0.284018 13.716C-0.0946726 13.3373 -0.0946726 12.7233 0.284018 12.3446L5.41652 7.21212Z' fill='#F2F2F2'/></svg></div>"],
        stagePadding: 0,
        responsive: {
            0: {
                items: 3
            },
            450: {
                items: 4
            },
            528: {
                items: 5
            },
            614: {
                items: 6
            },
            718: {
                items: 7
            },
            750: {
                items: 3
            },
            940: {
                items: 4
            },
            1100: {
                items: 5
            },
            1300: {
                items: 6
            },
            1500: {
                items: 7
            },
            1600: {
                items: 8
            },
            1780: {
                items: 9
            }
        }
    })

    $('.epi-carousel').owlCarousel({
        loop: true,
        //margin: 10,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'><svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.58348 6.78788L7.71598 11.9204C8.09467 12.2991 8.09467 12.9131 7.71598 13.2917C7.33729 13.6704 6.72332 13.6704 6.34462 13.2917L0.526443 7.47356C0.147752 7.09487 0.147752 6.48089 0.526443 6.1022L6.34462 0.284018C6.72331 -0.0946724 7.33729 -0.0946725 7.71598 0.284018C8.09467 0.662708 8.09467 1.27669 7.71598 1.65538L2.58348 6.78788Z' fill='#F2F2F2'/></svg>    </div>", "<div class='nav-btn next-slide'><svg width='8' height='14' viewBox='0 0 8 14' fill='none' ><path d='M5.41652 7.21212L0.284018 2.07962C-0.0946726 1.70093 -0.0946726 1.08695 0.284018 0.708259C0.662708 0.329569 1.27669 0.329569 1.65538 0.708259L7.47356 6.52644C7.85225 6.90513 7.85225 7.51911 7.47356 7.8978L1.65538 13.716C1.27669 14.0947 0.662708 14.0947 0.284018 13.716C-0.0946726 13.3373 -0.0946726 12.7233 0.284018 12.3446L5.41652 7.21212Z' fill='#F2F2F2'/></svg></div>"],
        autoWidth: true,
        responsive: {
            0: {
                items: 2
            },
            370: {
                items: 3
            },
            528: {
                items: 5
            },
            614: {
                items: 6
            },
            718: {
                items: 7
            },
            750: {
                items: 3
            },
            800: {
                items: 4
            },
            910: {
                items: 5
            },
            1100: {
                items: 6
            },
            1200: {
                items: 7
            },
            1400: {
                items: 8
            },
            1550: {
                items: 9
            },
            1650: {
                items: 10
            }
        }
    })
    
    $('.genero-carousel').owlCarousel({
        //loop: true,
        //margin: 10,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'><svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.58348 6.78788L7.71598 11.9204C8.09467 12.2991 8.09467 12.9131 7.71598 13.2917C7.33729 13.6704 6.72332 13.6704 6.34462 13.2917L0.526443 7.47356C0.147752 7.09487 0.147752 6.48089 0.526443 6.1022L6.34462 0.284018C6.72331 -0.0946724 7.33729 -0.0946725 7.71598 0.284018C8.09467 0.662708 8.09467 1.27669 7.71598 1.65538L2.58348 6.78788Z' fill='#F2F2F2'/></svg>    </div>", "<div class='nav-btn next-slide'><svg width='8' height='14' viewBox='0 0 8 14' fill='none' ><path d='M5.41652 7.21212L0.284018 2.07962C-0.0946726 1.70093 -0.0946726 1.08695 0.284018 0.708259C0.662708 0.329569 1.27669 0.329569 1.65538 0.708259L7.47356 6.52644C7.85225 6.90513 7.85225 7.51911 7.47356 7.8978L1.65538 13.716C1.27669 14.0947 0.662708 14.0947 0.284018 13.716C-0.0946726 13.3373 -0.0946726 12.7233 0.284018 12.3446L5.41652 7.21212Z' fill='#F2F2F2'/></svg></div>"],
        //autoWidth: true,
        responsive: {
            0: {
                items: 2,
                autoWidth: true,
            },
            500: {
                items: 3
            },
            700: {
                items: 4
            },
            750: {
                items: 3
            },
            1200: {
                items: 4
            },
            1350: {
                items: 7
            }
        }
    })



});

/*
  var swiper = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 9,
    spaceBetween: 30,
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var swiper = new Swiper('.swiper-container', {
    //init: false,
    breakpoints: {
        10: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        1100: {
            slidesPerView: 8,
            spaceBetween: 20,
        },
    }
});

*/