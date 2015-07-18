// Doc ready / Initialization
$(function(){
    Flowtime.start(2,0);
    Flowtime.updateNavigation();
    updateGradient(currentGradient);
    updateNavigation(year);
    $('[data-toggle="tooltip"]').tooltip()
});

// FLowtime stuff
Flowtime.addEventListener("flowtimenavigation", onNavigation, false);

function onNavigation(e){
    year = $(e.section).data('title');
    section = e.sectionIndex;
    page = e.pageIndex;
    console.log([section,page]);
    updateGradient(window[genre][year]);

    // Update navigation
    updateNavigation(year);
}




