var drumLoopSpeed = 214;
var drumLoopPlayer = $('#drum-loop');
var keepGoing = true;
var timer = 0;

$('.js-play-drum-loop').click(function(){
    var _self = $(this);
    // stop listen player
    player[0].pause();
    $('.js-play').find('img').attr('src', '/images/icons/play_audio.svg');

    if(drumLoopPlayer[0].paused){
        startLoop();
        drumLoopPlayer[0].play();
        _self.find('img').attr('src', '/images/icons/pause_audio.svg');
    }
    else{
        pauseLoop();
        drumLoopPlayer[0].load();
        _self.find('img').attr('src', '/images/icons/play_audio.svg');
    }

    drumLoopPlayer[0].onloadstart = function(){
        var rotation = 0;
        _self.find('.rotator').css({ WebkitTransform: 'rotate(' + rotation + 'deg)'});
    }

    drumLoopPlayer[0].ontimeupdate = function(){
        var duration = drumLoopPlayer[0].duration;
        var currentTime = drumLoopPlayer[0].currentTime;
        var progress = currentTime / (duration/100);
        var rotation = progress * 3.6;
        _self.find('.rotator').css({ WebkitTransform: 'rotate(' + rotation + 'deg)'});
    }
});

function loop(line){
    console.log('start loop');
    if(keepGoing){
        $(".lines .line ul li").each(function (i) {
            var $li = $(this);
            $li.removeClass('paused');
            $li.removeClass('active');
        });
    }

    $(".lines ."+line+" ul li").each(function (i) {
        var $li = $(this);
        if(keepGoing){
            timer = setTimeout(function () {
                $(".lines ."+line+" ul li").removeClass('active');
                if($li.hasClass('ping')){
                    $li.addClass('active');
                }
            }, drumLoopSpeed * (i + 1));

            // restart loop
            if (i == 15) {
                timer = setTimeout(function(){
                    loop(line);
                }, drumLoopSpeed * (i + 1));
            }
        }
    });
}

function startLoop(){
    keepGoing = true;
    loop('kickdrum');
    loop('snare');
    loop('hihat');
    loop('bass');
    loop('percussion1');
    loop('percussion2');
}

function pauseLoop(){
    keepGoing = false;
    $(".lines .line ul li").each(function (i) {
        var $li = $(this);
        $li.addClass('paused');
    });
}
