// Navigation
$('.js-toggleComponents').click(function(){
    $('.components').fadeToggle();
});

function updateNavigation(year){
    // Update navigation
    $('.js-currentYear').text(year);
    if(year == '2001'){
        $('.js-travelLeft, .js-skipLeft').animate({
            opacity: 0
        }, 400);
    }
    else if(year == '2003'){
        $('.js-travelRight, .js-skipRight').animate({
            opacity: 0
        }, 400);
    }
    else{
        $('.js-travelRight, .js-skipRight, .js-travelLeft, .js-skipLeft').animate({
            opacity: 1
        }, 400);
    }
}