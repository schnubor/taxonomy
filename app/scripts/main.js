// Data
var Grime = {
    2001: [15,30,70],
    2002: [15,35,70],
    2003: [10,20,35],
    2004: [65,75,85]
};

var currentGradient = Grime[2003];

// Init Reveal.js
Reveal.initialize({
    history: true,
    transition: 'slide',
    center: 'true',
    controls: false,
    progress: false
});

// Update Gradient
var updateGradient = function(targetGradient){
    var interval = 0;

    var gradient_percent1 = currentGradient[0];
    var gradient_percent2 = currentGradient[1];
    var gradient_percent3 = currentGradient[2];

    var interval_gradient = setInterval(function(){
        if(interval == 100){
            clearInterval(interval_gradient);
            // set new current gradient
            currentGradient = targetGradient;
        }
        // Percentage 1
        if(gradient_percent1 > targetGradient[0]){
            gradient_percent1--;
        }
        else if(gradient_percent1 < targetGradient[0]){
            gradient_percent1++;
        }
        
        // Percentage 2
        if(gradient_percent2 > targetGradient[1]){
            gradient_percent2--;
        }
        else if(gradient_percent2 < targetGradient[1]){
            gradient_percent2++;
        }

        // Percentage 3
        if(gradient_percent3 > targetGradient[2]){
            gradient_percent3--;
        }
        else if(gradient_percent3 < targetGradient[2]){
            gradient_percent3++;
        }
        // apply new values
        $('.reveal').css('background', 'linear-gradient(to right, #ff0000 0%,#ff9d00 '+gradient_percent1+'%,#fff200 '+gradient_percent2+'%,#10ff00 '+gradient_percent3+'%,#5759e5 100%)');
        ++interval;
    }, 10);
};

// Slide changed event
Reveal.addEventListener( 'slidechanged', function( event ) {
    var slide = Reveal.getCurrentSlide()
    var genre = $(slide).data('genre');
    var year = $(slide).data('year');
    console.log([genre, year]);
    console.log(window[genre][year]);
    updateGradient(window[genre][year]);
});

// Doc ready / Initialization
$(function(){
    updateGradient(currentGradient);
});


