$('.js-popup').click(function(){
    // Set content
    var file = $(this).data('file');
    if(file === 'video'){
        $('#popup').addClass('black');
        $('#popup').find('.popup-content').html('<iframe width="640" height="480" src="https://www.youtube.com/embed/YH0KWX2a8zY" frameborder="0" allowfullscreen></iframe>'); 
    }
    else{
        $('#popup').removeClass('black');
        $('#popup').find('.popup-content').html('<img src="/images/'+file+'" alt="popup content">');
    }
    
    $('#popup').fadeIn();
});

$('.js-close').click(function(){
    $('#popup').fadeOut();
    $('#popup').find('.popup-content').html('');
});