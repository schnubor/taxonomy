// FLowtime stuff
Flowtime.addEventListener("flowtimenavigation", onNavigation, false);

function onNavigation(e){
    year = $(e.section).data('title');
    console.log([genre, year]);
    updateGradient(window[genre][year]);
}

// Navigation
$('.js-toggleComponents').click(function(){
    $('.components').fadeToggle();
});




