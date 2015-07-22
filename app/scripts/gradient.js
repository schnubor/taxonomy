var animation = null;          // Animation interval
var genre = null;              // Start genre
var year = null;         
var section = null;            // Start year: 2003
var page = null;               // Start page: Genre
var currentGradient = null;    // Start Gradient

// Update Gradient
var updateGradient = function(targetGradient){
    var interval = 0;
    var gradient_percent1 = currentGradient[0];
    var gradient_percent2 = currentGradient[1];
    var gradient_percent3 = currentGradient[2];
    var gradient_percent4 = currentGradient[3];
    var gradient_percent5 = currentGradient[4];

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

        // Percentage 4
        if(gradient_percent4 > targetGradient[3]){
            gradient_percent4--;
        }
        else if(gradient_percent4 < targetGradient[3]){
            gradient_percent4++;
        }

        // Percentage 5
        if(gradient_percent5 > targetGradient[4]){
            gradient_percent5--;
        }
        else if(gradient_percent5 < targetGradient[4]){
            gradient_percent5++;
        }

        // apply new values
        $('body').css('background', 'linear-gradient(to right, #e53c4e '+gradient_percent1+'%,#f7925c '+gradient_percent2+'%,#ba7cd4 '+gradient_percent3+'%,#1fc756 '+gradient_percent4+'%,#fee533 '+gradient_percent5+'%)');
        // update current gradient
        currentGradient = [gradient_percent1, gradient_percent2, gradient_percent3, gradient_percent4, gradient_percent5];
        // next cycle
        interval++;
    }, 10);
};