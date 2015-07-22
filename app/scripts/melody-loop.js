var melodyLoopSpeed = 216;
var melodyLoopPlayer = $('#melody-loop');
var keepGoing = true;
var timer = 0;

$('.js-play-melody-loop').click(function(){
    var _self = $(this);

    if(melodyLoopPlayer[0].paused){
        startMelodyLoop();
        melodyLoopPlayer[0].play();
        _self.find('img').attr('src', '/images/icons/pause_audio.svg');
    }
    else{
        pauseMelodyLoop();
        melodyLoopPlayer[0].load();
        _self.find('img').attr('src', '/images/icons/play_audio.svg');
    }

    melodyLoopPlayer[0].onloadstart = function(){
        var rotation = 0;
        _self.find('.rotator').css({ WebkitTransform: 'rotate(' + rotation + 'deg)'});
    }

    melodyLoopPlayer[0].ontimeupdate = function(){
        var duration = melodyLoopPlayer[0].duration;
        var currentTime = melodyLoopPlayer[0].currentTime;
        var progress = currentTime / (duration/100);
        var rotation = progress * 3.6;
        _self.find('.rotator').css({ WebkitTransform: 'rotate(' + rotation + 'deg)'});
    }
});

function loopMelody(line){
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
            }, melodyLoopSpeed * (i + 1));

            // restart loop
            if (i == 31) {
                timer = setTimeout(function(){
                    loopMelody(line);
                }, melodyLoopSpeed * (i + 1));
            }
        }
    });
}

function startMelodyLoop(){
    keepGoing = true;
    loopMelody('G1');
    loopMelody('F');
    loopMelody('ES');
    loopMelody('D');
    loopMelody('C');
    loopMelody('B');
    loopMelody('A');
    loopMelody('G2');
}

function pauseMelodyLoop(){
    keepGoing = false;
    $(".lines .line ul li").each(function (i) {
        var $li = $(this);
        $li.addClass('paused');
    });
}
