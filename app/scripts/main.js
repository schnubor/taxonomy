// Doc ready / Initialization
$(function(){
    Flowtime.start(2,0);                    // Init Flowtime (2003, listen)
    $('[data-toggle="tooltip"]').tooltip()  // Init tooltips
    $('[data-toggle="popover"]').popover()  // Init Popovers

    // Init
    genre = 'Grime';
    year = $(Flowtime.getSection()).data('title');
    page = Flowtime.getPageIndex();
    currentGradient = window[genre][year];

    updateGradient(currentGradient);
    updateNavigation(genre,page,year); // Grime, 'listen' component, 2003
});

// FLowtime Events
Flowtime.addEventListener("flowtimenavigation", onNavigation, false);

function onNavigation(e){
    year = $(e.section).data('title');
    section = e.sectionIndex;
    page = e.pageIndex;
    // console.log([section,page]);
    updateGradient(window[genre][year]);

    // Update navigation
    updateNavigation(genre,page,year);
}




