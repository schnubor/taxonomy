// Navigation
$('.js-toggleComponents').click(function(){
    $('.components').fadeToggle();
});


// Update navigation
function updateNavigation(genre, component, year){
    console.log([genre,component,year]);
    // Update genre + section
    var components = ['01. Listen','02. Rhythm','03. Visuals','04. Formats','05. Facts','06. Expansion']
    $('.js-genre').text(genre);
    $('.js-component').text(components[component]);

    // Update year
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