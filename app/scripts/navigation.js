// Toggle Components
$('.js-toggleComponents').click(function(){
    $('.components').fadeToggle();
});

// Toggle Legend
$('.js-toggleLegend').click(function(){
    $('.legend').fadeToggle();
});

// Switch Component
$('.js-navComp').click(function(){
    page = $(this).data('page');
    section = Flowtime.getSectionIndex();
    Flowtime.gotoPage(section, page);
});

// Skip to next year
$('.js-skipRight').click(function(){
    page = Flowtime.getPageIndex();
    section = Flowtime.getSectionIndex();
    Flowtime.gotoPage(section+1,page);
});

// Skip to previous year
$('.js-skipLeft').click(function(){
    page = Flowtime.getPageIndex();
    section = Flowtime.getSectionIndex();
    Flowtime.gotoPage(section-1,page);
});

// Travel to 2001
$('.js-travelLeft').click(function(){
    page = Flowtime.getPageIndex();
    Flowtime.gotoPage(0,page);
});

// Travel to 2015
$('.js-travelRight').click(function(){
    page = Flowtime.getPageIndex();
    length = $('.ft-section').length;
    Flowtime.gotoPage(length-1,page);
});

// Update navigation
function updateNavigation(genre, component, year){
    console.log([genre,component,year]);
    // Update genre + section
    var components = ['01. Listen','02. Rhythm & Sound','02. Rhythm & Sound','03. Visual Aspects','04. Formats','05. Facts & Discourse','06. Expansion']
    $('.js-genre').text(genre);
    $('.js-component').text(components[component]);

    // Update year
    $('.js-currentYear').text(year);
    if(year == '2001'){
        $('.js-travelLeft, .js-skipLeft').animate({
            opacity: 0
        }, 400);
        $('.js-travelRight, .js-skipRight').animate({
            opacity: 1
        }, 400);
    }
    else if(year == '2015'){
        $('.js-travelRight, .js-skipRight').animate({
            opacity: 0
        }, 400);
        $('.js-travelLeft, .js-skipLeft').animate({
            opacity: 1
        }, 400);
    }
    else{
        $('.js-travelRight, .js-skipRight, .js-travelLeft, .js-skipLeft').animate({
            opacity: 1
        }, 400);
    }

    // show/hide scroll down button
    if (component === 6) {
        $('.js-down').fadeOut();
    } else {
        $('.js-down').fadeIn();
    }
}

// scroll down
$('.js-down').click(function(){
    Flowtime.next();
});

