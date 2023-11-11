/*

    비주얼 슬라이드를 움직여랏!!!!!

    동작 시나리오

    (오토)
    3초간격으로 스스로 좌측으로 이미지는 자동 슬라이드 되어야 하며,
    마지막장 다음장면은 자연스럽게 첫번째 이미지가 뒤이어 나오면 끝없이 회전되어야 한다.
    또한 보여지는 이미지의 순서에 맞춰 하단 조작 버튼의 색상과 외곽선도 바뀌어야 한다. 

    (사용자 컨트롤1)
    사용자는 이미지 하단 조작 버튼중 첫번째 일시정지 버튼을 클릭시 (오토)자동슬라이드는 멈춰야 한다.
    ※이슈사항 발생- 일시정지 버튼 클릭시 이미지를 재생버튼 이미지로 변경
                    재생버튼 클릭시 이미지를 일시정지버튼 이미지로 변경

    (사용자 컨트롤2)
    사용자는 이미지 하단 조작버튼(첫번째를 제외한) 클릭하여 자동슬라이드를 자신이 원하는 이미지에 맞춰 볼수 있게
    제어되어야 하며, 사용자가 슬라이드 조작시 (오토)자동슬라이드는 멈춰 있어야 한다.


    ※전체과정 이슈사항 발생- 자동 슬라이드 & 사용자 조작시 사용자 컨트롤러에 배경색상과 외곽선 변경을 추가한다. 



    (※특이사항 기록)
    해당 자동슬라이드는 반응형웹에 적용되는 슬라이드로써 이동값에 사용되는 모든 단위는 %로 처리해야 한다.

    ---------------------------------------------------------------------------------------------------------

    준비물


    ---(1) 
    ------------(2)
      first last (3) 
    ------------
    ---(1)


    (1).visual
    (2).visual_slide
    (3).visual_slide li:first
       .visual_slide li:last


    (4).visual_controls
    ||  ●  ○    ▶     ||  ○  ●

    (5).visual_controls button:first    img (조작에서 제외 )  
       .visual_controls button    ( background:#fff,   background:rgba(0,0,0,0.2) )
       .visual_controls button    (          order: 2px solid #fff  )

*/

//1.오토슬라이드
/*    
    (오토)-성공!!!!!! 추추추추축!!!!

    ▶3초 간격으로(시간을 설정하고 시간이 지나면 통제 명령어에 보관된 명령어를 수행시켜한다!!!)

        setInterval("mainSlide()",3000)

    ▶3초의 인터벌 동안 함수상자내에 보관 ※통제(대기상태)

        function mainSlide(){

            $(.visual_slide).stop().animate({marginLeft:"-100%"},function(){
                $(".visual_slide li:first").appendTo(".visual_slide");
                $("".visual_slide").css({ marginLeft: 0 });
            }) 
        };
    

*/

// 효정씨는 빕스 이용이 처음이신가요?   네 , 아니요

var hjk = "아니요";
var mS = setInterval("mainSlide()",3000);
function mainSlide(){


    //이미지 자동슬라이드 
    $(".visual_slide").stop().animate({marginLeft:"-100%"},function(){
        $(".visual_slide li:first").appendTo(".visual_slide");
        $(".visual_slide").css({ marginLeft: 0 });
    });

    //하단 슬라이드 컨트롤 배경색,외곽선 변경식

    $(".visual_controls button:not(:first)").css({ background:"rgba(0,0,0,0.2)" });


    if( hjk == "네" ){
        $(".visual_controls button:eq(1)").css({ background:"rgba(255,255,255,1)"});//이용안내 절차 설명
        hjk = "아니요";

    }else{
          //자율 이용
        $(".visual_controls button:eq(2)").css({ background:"rgba(255,255,255,1)"}); 
        hjk ="네";
    };


        
};


//※전체과정 이슈사항 발생- 자동 슬라이드 & 사용자 조작시 사용자 컨트롤러에 배경색상과 외곽선 변경을 추가한다. 
function visual_controls_bg(num){
    $(".visual_controls button:not(:first)").css({ background:"rgba(0,0,0,0.2)" });
    $(".visual_controls button:eq("+num+")").css({ background:"rgba(255,255,255,1)"})
};


$(function(){

        //2.(사용자 컨트롤1) -성공  추추추추추추~!축!!!  
        /*사용자는 이미지 하단 조작 버튼중 첫번째 일시정지 버튼을 클릭시 (오토)자동슬라이드는 멈춰야 한다.*/

        $(".visual_controls button:first").on("click",function(){

            if($(this).children("img").attr("alt") == "일시정지"){

                clearInterval(mS);
                $(this).children("img").attr("src","images/visual_play_btn.png").attr("alt","자동재생");
            
                }else{
            
                mainSlide();
                mS = setInterval("mainSlide()",3000);
                $(this).children("img").attr("src","images/visual_pause_btn.png").attr("alt","일시정지");
            
            };

        });


        /*
        $(".visual_controls button:first").on("click",function(){
                clearInterval(mS);
                $(".visual_controls button:first img").attr("src","images/visual_play_btn.png").attr("alt","자동재생");

                
                    ※이슈사항 발생- 일시정지 버튼 클릭시 이미지를 재생버튼 이미지로 변경
                    재생버튼 클릭시 이미지를 일시정지버튼 이미지로 변경
                    --------------------------------------------------------------

                    1.속성값의 오타를찾아봐~ 아니면 괄호(" ")
                    2.속성명 명령어의 오타를 찾아봐~
                    3.선택자를 잘못 지정했는지 찾아봐~~
        */
        

        //3.(사용자 컨트롤2) -성공  추추추추추!!~~축!!
        /*사용자는 이미지 하단 조작버튼(첫번째를 제외한) 클릭하여 자동 슬라이드를 자신이 원하는 이미지에 맞춰 볼수 있게
        제어되어야 하며, 사용자가 슬라이드 조작시 (오토)자동 슬라이드는 멈춰 있어야 한다.*/
        $(".visual_controls button:eq(1)").on("click",function(){
                clearInterval(mS);
                $(".visual_slide").stop().animate({marginLeft:0});
                visual_controls_bg(1);
        });

        $(".visual_controls button:eq(2)").on("click",function(){
            clearInterval(mS);
            $(".visual_slide").stop().animate({marginLeft:"-100%"});
            visual_controls_bg(2);
        });


});