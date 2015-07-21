function loop(){
    $(".lines .kickdrum ul li").each(function (i) {
        var $li = $(this);
        setTimeout(function () { 
            console.log($li);
            $(".lines .kickdrum ul li").removeClass('active');
            if($li.hasClass('ping')){
                $li.addClass('active');
            } 
        }, 500 * (i + 1));

        // restart loop
        if (i == 15) {
            setTimeout(loop, 500 * (i + 1));
        }
    });
}

loop();
//loop2();
