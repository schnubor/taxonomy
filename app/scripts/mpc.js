var mpc = $('#mpc');

$('.js-pad').click(function(){
    var _self = $(this);
    var file = '/files/samples/'+_self.data('file')+'.wav';
    console.log(file);
    mpc[0].src = file;

    mpc[0].play();
});