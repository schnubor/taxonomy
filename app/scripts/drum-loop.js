var drumLoopSpeed = 500;

function loop(line){
    $(".lines ."+line+" ul li").each(function (i) {
        var $li = $(this);
        setTimeout(function () {
            $(".lines ."+line+" ul li").removeClass('active');
            if($li.hasClass('ping')){
                $li.addClass('active');
            }
        }, drumLoopSpeed * (i + 1));

        // restart loop
        if (i == 15) {
            setTimeout(function(){
                loop(line);
            }, drumLoopSpeed * (i + 1));
        }
    });
}

loop('kickdrum');
loop('snare');
loop('hihat');
loop('bass');
loop('percussion1');
loop('percussion2');
