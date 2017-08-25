$( document ).ready(function() {

/*
 * Plugin intialization
 */
$('#pagepiling').pagepiling({
    verticalCentered: false,
    css3: false,
    sectionsColor: ['#e1e1e1', 'white', 'white', 'white', 'white'],
    anchors: ['home','about','projects','shots','contact'],
    anchors: [],
    navigation: {
        textColor: '#000000',
        bulletsColor: '#000000',
        position: 'left',
        tooltips: ['Home','About','Projects','Shots','Contact']
    },
    navigation: false,
    onLeave: function (index, nextIndex, direction) {

        //fading out the txt of the leaving section
        $('.section').eq(index - 1).find('h1, p').fadeOut(700, 'easeInQuart');

        //fading in the text of the destination (in case it was fadedOut)
        $('.section').eq(nextIndex - 1).find('h1, p').fadeIn(700, 'easeInQuart');

        //reaching our last section? The one with our normal site?
        if (nextIndex == 5) {
            $('.scroll-downs').fadeOut();

            //fading out navigation bullets
            // $('#pp-nav').fadeOut();

            // $('#section4').find('.content').animate({
            //     top: '0%'
            // }, 700, 'easeInQuart');
        }

        //leaving our last section? The one with our normal site?
        if (index == 5) {
            $('.scroll-downs').fadeIn();

            //fadding in navigation bullets
            // $('#pp-nav').fadeIn();

            // $('#section4 .content').animate({
            //     top: '100%'
            // }, 700, 'easeInQuart');
        }

    },
	paddings: '20%',
	autoheight: true
});

$('#arrow').click(function () {
    $.fn.pagepiling.moveSectionDown();
});

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    },
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    lazyLoading: true
});

});