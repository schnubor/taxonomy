// jshint devel:true
console.log('\'Allo \'Allo!');

// Init Reveal.js
Reveal.initialize({
    history: true,
    transition: 'slide',
    center: 'true',
    controls: false,
    progress: false
});

// Slide changed
Reveal.addEventListener( 'slidechanged', function( event ) {
    var currentSlide = Reveal.getCurrentSlide();
    //genre = $(currentSlide).data('genre');
    $('.reveal').addClass('grime');
    console.log(currentSlide);
} );
