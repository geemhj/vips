//index 스크롤 배경 CSS효과
$(function(){
    $(window).scroll(function(){

        if( $("html,body").scrollTop() > 940 && $(window).width() >=1280 ){
            $("#header").css({ background:"#3B3736",borderBottom:"0"});
        }else{
            $("#header").css({ background:"none",borderBottom:0});
        };

    });

    // 1280px 이하 scroll 300 이하 
    $(window).scroll(function(){

        if( $("html,body").scrollTop() > 300 && $(window).width() < 1280 ){
            $("#header").css({ position:"fixed",background:"#3B3736"});
        };


    });

});