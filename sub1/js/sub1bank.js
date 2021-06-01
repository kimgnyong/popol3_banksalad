;(function($){

    var sub1bank = {
        init: function(){
            this.headerFn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
        },
        headerFn:function(){
          var $logo = $('#header .logo-wrap > a > img');
          var t = 0;
          var i = ['./img/logo_black.png','./img/logo_white.png']
          var $header = $('#header');
          var $subNavA = $('#header li.sub-nav > a');

          $(window).scroll(function(){
            if( $(window).scrollTop() >= 0  ){
              if(t==0){
                $logo.attr("src", i[t]);
                $header.css({background:'#fff'});
                $subNavA.css({color:'#000'})
                t=1;
              }                
            }

            if( $(window).scrollTop() === 0 ){
              $logo.attr("src", i[t]);
              $header.css({background:'transparent'});
              $subNavA.css({color:'#fff'})
              t=0;
            }
          });

          $subNavA.each(function(){
            $(this).on({
              mouseenter:function(){
                $(this).css({color:'rgb(0,198,142)'})
              },
              mouseleave:function(){
                if(t==1){
                  $(this).css({color:'#000'})
                }else if(t==0){
                  $(this).css({color:'#fff'})
                }
              }
            })
          })
          
          
          
        },//헤더 끝
        section2Fn:function(){
          var t = 0;
          var $rightContent = $('#section2 .title-gap .right-content');
          var $leftContent = $('#section2 .title-gap .left-content');
          var $content = $('#section2 .content-container .content');
          

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section2').offset().top-400  ){
              if(t==0){
                t=1;
                setTimeout(function(){
                  $content.eq(0).addClass('addPalsect2_2');
                  setTimeout(function(){
                      $content.eq(1).addClass('addPalsect2_2');
                      setTimeout(function(){
                        $content.eq(2).addClass('addPalsect2_2');
                      },300);
                  },300);
              },0);   
              }                
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              for(var i = 0; i<=2;i++){
                $content.eq(i).removeClass('addPalsect2_2');
              }
            }
          });

          
          function addPal2_1Fn(){
            $leftContent.addClass('addPalsect2_1');
            setTimeout(function(){
              $rightContent.addClass('addPalsect2_1');
            },700)
          }
          addPal2_1Fn();
        },//섹션2끝
        section3Fn:function(){
          var t = 0;
          var $leftContent = $('#section3 .container-gap .left-content');

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section3').offset().top-400  ){
              if(t==0){
                t=1;
                $leftContent.addClass('addPalsect3');
              }                
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              $leftContent.removeClass('addPalsect3');
            }
          });
        },
        section4Fn:function(){
          var t = 0;
          var $leftContent = $('#section4 .container-gap .left-content');

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section3').offset().top-400  ){
              if(t==0){
                t=1;
                $leftContent.addClass('addPalsect3');
              }                
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              $leftContent.removeClass('addPalsect3');
            }
          });
        },
        section5Fn:function(){

          var $barText = $('#section4 ul.bar-content li.bar .bar-text');

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section4').offset().top-700  ){
              $barText.eq(0).addClass('addPalsect4_1');
            }
            if( $(window).scrollTop() >= $('#section4').offset().top-400  ){
              $barText.eq(1).addClass('addPalsect4_all');
            }
            if( $(window).scrollTop() >= $('#section4').offset().top-200  ){
              $barText.eq(2).addClass('addPalsect4_all');
            }
            if( $(window).scrollTop() >= $('#section4').offset().top  ){
              $barText.eq(3).addClass('addPalsect4_all');
            }
            if( $(window).scrollTop() >= $('#section4').offset().top+400  ){
              $barText.eq(4).addClass('addPalsect4_all');
            }
            if( $(window).scrollTop() >= $('#section4').offset().top+700  ){
              $barText.eq(5).addClass('addPalsect4_all');
            }
            if( $(window).scrollTop() >= $('#section4').offset().top+1000  ){
              $barText.eq(6).addClass('addPalsect4_all');
            }
            if( $(window).scrollTop() >= $('#section4').offset().top+1200  ){
              $barText.eq(7).addClass('addPalsect4_all');
            }
            if( $(window).scrollTop() === 0 ){
              t=0;
              $barText.eq(0).removeClass('addPalsect4_1');
              $barText.removeClass('addPalsect4_all');
            }

          });
        },
        section6Fn:function(){
          var $titleWrap = $('#section6 .container .title-wrap');
          var $ulCol1 = $('#section6 .gal-wrap .gal-gap ul.col1');
          var $ulCol2 = $('#section6 .gal-wrap .gal-gap ul.col2');

          console.log($ulCol1);
          $(window).scroll(function(){
            
            if( $(window).scrollTop() >= $('#section6').offset().top-600  ){
                $titleWrap.addClass('addPalsect6_1');          
            }
            if( $(window).scrollTop() >= $('#section6').offset().top-300  ){
                $ulCol1.addClass('addPalsect6_2');
            }
            if( $(window).scrollTop() >= $('#section6').offset().top+300  ){
                $ulCol2.addClass('addPalsect6_3');
            }

            if( $(window).scrollTop() === 0 ){
              $titleWrap.removeClass('addPalsect6_1');
              $ulCol1.removeClass('addPalsect6_2');
              $ulCol2.removeClass('addPalsect6_3');
            }
          });
        }
    }
    sub1bank.init();

})(jQuery);