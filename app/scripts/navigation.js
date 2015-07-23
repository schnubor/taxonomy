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
    var components = ['01. Listen','02. Rhythm','02. Rhythm','03. Visuals','04. Formats','05. Facts','06. Expansion']
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
}

// scroll down
$('.js-down').click(function(){
    Flowtime.next();
});