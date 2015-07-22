var miniplayer = $('#miniplayer');
var oldFile = null;

$('.js-miniPlayer').click(function(){
    var _self = $(this);
    var miniplayerFile = '/files/influences/'+_self.data('file')+'.mp3';

    if(miniplayerFile != oldFile){
        miniplayer[0].src = miniplayerFile;
        oldFile = miniplayerFile
    }

    // pause main player
    player[0].pause();

    if(miniplayer[0].paused){
        miniplayer[0].play();
        _self.attr('src', '/images/icons/pause_weiss.svg');
    }
    else{
        miniplayer[0].pause();
        _self.attr('src', '/images/icons/play_weiss.svg');
    }

    miniplayer[0].ontimeupdate = function(){
        var duration = miniplayer[0].duration;
        var currentTime = miniplayer[0].currentTime;
        var progress = currentTime / (duration/100);
        var rotation = progress * 3.6;
        _self.find('.rotator').css({ WebkitTransform: 'rotate(' + rotation + 'deg)'});
    }

    miniplayer[0].onended = function(){
        _self.find('img').attr('src', '/images/icons/play_audio.svg');
    }
});