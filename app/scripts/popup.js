$('.js-popup').click(function(){
    // Set content
    var file = $(this).data('file');
    $('#popup').find('.popup-content').html('<img src="/images/'+file+'" alt="popup content">');
    $('#popup').fadeIn();
});

$('.js-close').click(function(){
    $('#popup').fadeOut();
});