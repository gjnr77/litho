;(function($){
    var litho = {
        init:function(){
            var that = this;
            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.section5Fn();
            that.section6Fn();
            that.section7Fn();
            that.section8Fn();
            that.section9Fn();
            that.section10Fn();
            that.footerFn();

        },
        headerFn:function(){
           //네비게이션
           //메인버튼(메뉴)
           var $mainBtn = $('.main-btn');
           var $sub = $('.sub');
           var $navUlLi = $('#nav > ul > li');
        
           $mainBtn.on({
               mouseenter:function(){
                $(this).next().stop().show();
               }
           });
           $navUlLi.on({
               mouseleave:function(){
                $sub.stop().hide();
               }
           });
           
           //서브-서브 메뉴
           var $subBtn = $('.sub-btn');
           var $subSub = $('.sub-sub');
           var $subDd = $('.sub dd');

           $subBtn.on({
               mouseenter:function(){
                   $subSub.stop().hide();
                   $(this).next().stop().show();

               }
           });
           //subdd로 하면 subsub영역과 dd 사이에 마진?패딩 값 공백이 있어서 subsub에 가기 전에 dd를 벗어나서 subsub가 사라져버림
           //따라서 마우스영역을 넓힘
           //대신 그럼 subsub메뉴가 중복되서 나타나니까 위에 @subBtn.on({})부분에 모든 서브 닫고 이 서브만 올린다로 고쳐줌
           $navUlLi.on({
               mouseleave:function(){
                $subSub.stop().hide();
               }
           });


        },
        section1Fn:function(){
           //창 높이 창 너비 
           //선택자 = .slide 의 너비와 높이를 창높이, 창너비로 설정 -> 반응형

           var $slide = $('#section1 .slide'); //로딩 시 변수 설정
           var $window = $(window);            //로딩 시 변수 설정

           var $winW = $(window).width(); //창 너비 / 즉시 반환
           var $winH = $(window).height(); // 창 높이 / 즉시 반환


           // 1)로딩시 실행문 & resize 실행문에 중복되니
           //함수로 만들어서 사용하자
           function resizeFn(){
               
           // 셋이 꼭 묶어서 같이 있어야함
           // 로딩 시 설정
           $winW = $(window).width();
           $winH = $(window).height();
           $slide.css({width:$winW, height:$winH}); //즉시 변환된 너비 높이 적용 실행
           }

           // 2)로딩 시 실행
           resizeFn();
           
           // 3)화면 크기 바뀔때마다 실행
           //화면의 크기가 (너비와 높이) 1픽셀만 변경되어도 동작되는 반응형 메서드
           //$(window).resize(); 변수화 안할경우 이렇게 씀
           $window.resize(function(){
            resizeFn();

           });

        },
        section2Fn:function(){
           
        },
        section3Fn:function(){
           
        },
        section4Fn:function(){
            
        },
        section5Fn:function(){
          
        },
        section6Fn:function(){
            
        },
        section7Fn:function(){
           
        },
        section8Fn:function(){
        
        },
        section9Fn:function(){
            
        },
        section10Fn:function(){
            
        },
        footerFn:function(){

        }
    };
    litho.init();
})(jQuery);