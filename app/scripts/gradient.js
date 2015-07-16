var currentGradient = Grime[2003];
var animation = null;       // Animation interval
var genre = 'Grime';
var year = '2003';

// Update Gradient
var updateGradient = function(targetGradient){
    var interval = 0;
    var gradient_percent1 = currentGradient[0];
    var gradient_percent2 = currentGradient[1];
    var gradient_percent3 = currentGradient[2];

    clearInterval(animation);

    animation = setInterval(function(){
        if(interval == 100){
            clearInterval(animation);
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
        $('body').css('background', 'linear-gradient(to right, #c73d3d 0%,#75cadc '+gradient_percent1+'%,#0a64d0 '+gradient_percent2+'%,#63ae5b '+gradient_percent3+'%,#f2e11a 100%)');
        // update current gradient
        currentGradient = [gradient_percent1, gradient_percent2, gradient_percent3];
        // next cycle
        interval++;
    }, 10);
};

// Doc ready / Initialization
$(function(){
    updateGradient(currentGradient);
});