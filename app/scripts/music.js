var player = $('#music');

$('.js-play').click(function(){
    var _self = $(this);
    var file = '/files/'+$(this).data('file')+'.mp3';
    player.src = file;

    if(player[0].paused){
        player[0].play();
        _self.find('img').attr('src', '/images/icons/pause_audio.svg');
    }
    else{
        player[0].pause();
        _self.find('img').attr('src', '/images/icons/play_audio.svg');
    }

    player[0].ontimeupdate = function(){
        var duration = player[0].duration;
        var currentTime = player[0].currentTime;
        var progress = currentTime / (duration/100);
        var rotation = progress * 3.6;
        _self.find('.rotator').css({ WebkitTransform: 'rotate(' + rotation + 'deg)'});
    }

    player[0].onended = function(){
        _self.find('img').attr('src', '/images/icons/play_audio.svg');
    }
});