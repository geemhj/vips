$(function(){

    // header 
    $("#header").mouseover(function(){ 
        if( $(window).width() >=1280){
            $("#header").stop().animate({ height:300});
            $("#header").css({ color:"#fff",background:"#3B3736" });
        };
    });

    $("#header").mouseleave(function(){ 
            if(  $(window).width() >=1280 ){
                $("#header").stop().animate({ height:100});
                $("#header").css({ color:"#fff",background:"none" });

            };
    });

    /*
    var gnbBg = "plus"; // plus , minus

    $(".gnb>li>a").on("click",function(){

        if($(window).width() < 1280){


            $(".gnb>li ul").stop().slideUp();

            if( gnbBg == "plus"){
                $(this).next().stop().slideDown();
                // 스크립트 문서의 위치는 html문서의 위치와 동일!!
                $(this).css({ background: "url(images/gnb_close_btn.png) no-repeat right 10px top 26px" });
                gnbBg ="minus";
            }else if(gnbBg == "minus"){
                $(".gnb>li ul").stop().slideUp();
                $(this).css({ background: "url(images/gnb_open_btn.png) no-repeat right 10px top 13px" });
                gnbBg ="plus";
            }     
            
            return false;
        };
    });

    */


    $(".gnb>li>a").on("click",function(){

        if( $(window).width()< 1280 ){

            $(".gnb ul").stop().slideUp();
            $(".gnb>li>a").css({background:"url(images/nav_lnb_open_btn.png) no-repeat right 30px top 20px"});

            $(this).next().stop().css({ display:"flex", opacity:0, height: 0, }).animate({ opacity:1, height: 40 });
            $(this).css({background:"url(images/nav_lnb_close_btn.png) no-repeat right 30px top 20px"});

            return false;
        };
    });


    $(".card_list li").on("click",function(){

        if( $(window).width()<800 ){

        $(".card_list li").css({"background-image":"url(../sub_images/sub5_1_open_btn.png)", "background-position":"right 10px top 60px"});
        $(".card_list li").css({height:"150px"});
        $(this).animate({height:"630px"});
        $(this).css({"background-image":"url(../sub_images/sub5_1_close_btn.png)", "background-position":"right 10px top 60px"});

        };
    });


    $(".nav_view_btn").click(function(){
        $("nav").stop().animate({ marginRight: 0 });
        $(".top_util").stop().animate({ marginLeft:0 });
    });
    $(".nav_close_btn").click(function(){
        $("nav").stop().animate({ marginRight: "-100%" });
        $(".top_util").stop().animate({ marginLeft:"100%" });
    });


   
    /* 브라우저 창으로부터 리사이즈 이벤트 발생시
        $(window).resize(function(){
        - 미디어쿼리 : 조건부 css @media screen and (min-width:) and (max-width:){}
        - 스크린 화면의 폭을 기준으로 조건 설정
        
        if( $(window).width()    >== 설정값        ){
            
        }else{

        }

    */
    $(window).resize(function(){

        if( $(window).width() >=1280){
            $("nav").css({ marginRight:0});
            $(".top_util").css({ marginLeft:0});
            $("#header *").css({ color:"#fff" });
            tagMoveRe();
        }else{
            $("nav").css({ marginRight:"-100%"});
            $(".top_util").css({ marginLeft:"100%"});
            $("#header *").css({ color:"#000" });
            $("#header .top_util a").css({ color:"#fff" });
            tagMove();
        };

        textChange(); 
    });



   







 

    // footer_상단이동 버튼
    $(".top_move button").on("click",function(){
        $("html").animate({scrollTop:0});
    });

    // footer_패밀리사이트
    /*

        yes / no
        아빠 / 엄마
        남자 / 여자
        0      1
        눌렀다  다시눌렀다 
        문을열었다   문을 닫았다.

        패밀리사이트 버튼을 누르면 패밀리사이트 리스트가 표시
        패밀리사이트 버튼을 다시 누르면 패밀리사이트 리스트가 비표시 
    */

    var a = "yes";

    $(".familysite button").on("click",function(){


        if(a == "yes"){

            $(".familysite").stop().animate({height:"300px"},"fast");
            a = "no";

        }else{
            $(".familysite").stop().animate({height:"45px"},"fast");
            a = "yes";
        }
        

    });


    //--------------------------------------------------------------------------------
    // index 스크롤 내리면 메뉴섹션의 이미지 좌우에서 슬라이드되어 등장
    /* 
       menu1>p img 는 왼쪽에서 오른쪽으로
       menu2>p img 는 오른쪽에서 왼쪽으로

    */


    // 인덱스페이지 퀵링크섹션 화살표 이미지에 마우스오버시 이미지 넓이 연장

    $(".quicklink a").on("mouseover",function(){
        $(this).children("img").stop().animate({width:110});
    });

    $(".quicklink a").on("mouseleave",function(){
        $(this).children("img").stop().animate({width:88});
    });
   



    // sub3_1. 매장찾기 검색창 열고 닫기

  
    var b = "yes";
    $(".store_search").on("click",function(){

        if(b == "yes"){

            $(".store_search").animate({marginLeft:-440});
            b = "no";
            $(".box_close img").attr("src","sub_images/sub3_1_boxopen_icon.png").attr("alt","매장찾기 검색창 열기")
                                             // $("선택자").attr("속성명","변경속성값")  ▶선택자 속성변경
                                             // $("선택자").attr("속성명")  ▶선택자 속성 가져오기
                                            
            return false; // a buuton 태그에 페이지 새로고침 발생시 적용
            

        }else{
            $(".store_search").animate({marginLeft:0});
            b = "yes";
            $(".box_close img").attr("src","sub_images/sub3_1_boxclose_icon.png").attr("alt","매장찾기 검색창 닫기")
            return false;
        };
    });





    /*
        (누)브라우저 화면이 $(window).
        (언)리사이즈 resize()
        
        (처-----명령어보관함 )

        스크린의 폭이 490이상 800이하일 경우 
        특정 태그의 위치를 이동(조작)하고 싶습니다. 

        $(window).width();
        
    */
    function tagMove(){
        $(".effort_info1>p").insertAfter(".effort_info1>div p:eq(1)");
        $(".effort_info2>p").insertAfter(".effort_info2>div p:eq(1)");
        $(".effort_info3>p").insertAfter(".effort_info3>div p:eq(1)");
    };
    function tagMoveRe(){
        $(".effort_info1>div>p:eq(2)").insertAfter(".effort_info1>div");
        $(".effort_info2>div>p:eq(2)").insertBefore(".effort_info2>div");
        $(".effort_info3>div>p:eq(2)").insertAfter(".effort_info3>div");
    };
    if( $(window).width() <=800 ){   tagMove();   }
    

    // sub5_1. 카드리스트 슬라이드 
    /*
    var c = "yes";

    $(".card_list li").on("click",function(){

        if(c == "yes"){
            $(".card_list li").css({height:"150px"});
            $(this).animate({height:"630px"});
            c = "no";
        }else{
            $(".card_list li").animate({height:"150px"});
            c = "yes";
        };
    });
    */

    $(".card_list li").on("click",function(){

        if( $(window).width()<800 ){

        $(".card_list li").css({"background-image":"url(../sub_images/sub5_1_open_btn.png)", "background-position":"right 10px top 60px"});
        $(".card_list li").css({height:"150px"});
        $(this).animate({height:"630px"});
        $(this).css({"background-image":"url(../sub_images/sub5_1_close_btn.png)", "background-position":"right 10px top 60px"});

        };
    });

  
//$(".card_list li").css({"background":"url(../sub_images/sub5_1_close_btn.png)", "background-position":"right 10px top 60px"});





    // sub5_2. 4번 태블릿 버전 텍스트 변경
    function textChange(){
        if( $(window).width() <801){
            $(".sub5_2_text_change").html("CJ ONE은<br> 다양한 라이프스타일 브랜드가 하나로 통합되어 다양한 혜택을 함께 즐길 수 있는 통합 멤버십 서비스입니다.");
        }else{
            $(".sub5_2_text_change").html("CJ ONE은 문화, 외식, 쇼핑, 엔터테인먼트 등 다양한 라이프스타일 브랜드가 하나의 멤버십 서비스로 통합되어<br>CJ에서 제공하는 다양한 혜택을 함께 즐길 수 있는 CJ의 통합 멤버십 서비스입니다.");
        };
    }
    textChange();

    




});