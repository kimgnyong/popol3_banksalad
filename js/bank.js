;(function($){

    var bank = {
        init: function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
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
        section1Fn:function(){
          var $container = $('#section1 .container');
          var $videoOutW = $('#section1 .section1-Wvideo');
          var $videoOutM = $('#section1 .section1-Mvideo');
          var $centerText = $('#section1 .center-text');
          var $winW = $(window).innerWidth();
          var $winH = $(window).innerHeight();
          var antVid = 0;
          var $underArrowImg = $('#section1 .under-arrow-container a img')

          function resizeFn(){
            $winW = $(window).innerWidth();
            $winH = $(window).height();

            if($winW <= 642 && antVid == 0){
              $videoOutW.css({display:'none'})
              $videoOutM.css({display:'block'})
              antVid = 1;
              console.log(antVid);
            }else if($winW>642 && antVid == 1){
              $videoOutW.css({display:'block'})
              $videoOutM.css({display:'none'})
              antVid = 0;
              console.log(antVid);
            }

            $container.css({width:$winW,height:$winH,overflow:'hidden'});
            $centerText.css({top:$winH*0.43343653})
          }
          $(window).resize(function(){
              resizeFn();
          })
          setTimeout(resizeFn,20);

          $underArrowImg.on({
            click:function(){
              $('html, body').stop().animate({scrollTop:$('#section2').offset().top},800);
            }
          })



        },//섹션 1번끝
        section2Fn:function(){
            var $col0 = $('#section2 .number .col0');
            var $col1 = $('#section2 .number .col1');
            var $col2 = $('#section2 .number .col2');
            var cnt = 0;
            var t = 0;
            var setid = null;
            var $leftContent = $('#section2 .container .left-content');
            
            function upNumberFn(){
                if(cnt == 0){$col2.addClass('numberUp');}
                if(cnt == 1){$col1.addClass('numberUp');}
                if(cnt == 2){$col0.addClass('numberUp');}
                if(cnt == 3){clearInterval(setid,20)}
                cnt++;
            }

            $(window).scroll(function(){

                if( $(window).scrollTop() >= $('#section2').offset().top-400  ){
                  if(t==0){
                    t=1;       
                    setid = setInterval(upNumberFn,500)
                    $leftContent.addClass('addPalsect2');
                  }                
                }
    
                if( $(window).scrollTop() === 0 ){
                  t=0; 
                  cnt =0;
                  setid = null;
                  $col2.removeClass('numberUp');
                  $col1.removeClass('numberUp');
                  $col0.removeClass('numberUp');
                  $leftContent.removeClass('addPalsect2');
                }
    
              });
            
            
        },//섹션 2번끝
        section3Fn:function(){
          var $bar = $('#section3 .bar');
          var cnt = 0;
          var setid= null;
          var t = 0;
          var $number = $('#section3 .count');
          var cnt2 = 0;
          var setid2 = null;
          var $rightContent = $('#section3 .container .right-content');
              
                function countFn(){
                    cnt2 += 3;
                    if(cnt2>600){
                        clearInterval(setid2);
                        $number.eq(0).text(600+'억');
                        
                    }
                    else{
                        $number.eq(0).text(cnt2+'억');
                    }
                  }

          function addCla(){
            // console.log(cnt);
            
            if(cnt == 0){$bar.addClass('addZoom');}
            else if(cnt == 1){$bar.addClass('addupHeight');}
            else if(cnt == 3){
               clearInterval(setid);
              }
            cnt++;
          }
          

          $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section3').offset().top-400  ){
              if(t==0){
                t=1;
                // console.log(t);
                cnt = 0;
                setid = setInterval(addCla,500)
                setid2 = setInterval(countFn,10);
                $rightContent.addClass('addPalsect3');
              }
            }
            if( $(window).scrollTop() === 0 ){
                t=0;
                $bar.removeClass('addZoom');
                $bar.removeClass('addupHeight');
                setid = null;
                setid2 = null;
                cnt2 = 0;
                $number.eq(0).text(0+'억');
                $rightContent.removeClass('addPalsect3');
              }
          });

        },//섹션 3번끝
        section4Fn:function(){
            var $col0 = $('#section4 .number .col0');
            var $col1 = $('#section4 .number .col1');
            var $col2 = $('#section4 .number .col2');
            var cnt = 0;
            var t = 0;
            var setid = null;
            var $leftContent = $('#section4 .container .left-content');
            
            function upNumberFn(){
                if(cnt == 0){$col2.addClass('numberUp');}
                if(cnt == 1){$col1.addClass('numberUp');}
                if(cnt == 2){$col0.addClass('numberUp');}
                if(cnt == 3){clearInterval(setid,20)}
                cnt++;
            }

            $(window).scroll(function(){

                if( $(window).scrollTop() >= $('#section4').offset().top-400  ){
                  if(t==0){
                    t=1;
                    setid = setInterval(upNumberFn,500);
                    $leftContent.addClass('addPalsect4');
                  }                
                }
    
                if( $(window).scrollTop() === 0 ){
                  t=0;
                  cnt =0;
                  setid = null;
                  $col2.removeClass('numberUp');
                  $col1.removeClass('numberUp');
                  $col0.removeClass('numberUp');
                  $leftContent.removeClass('addPalsect4');
                }
    
              });    
        },//섹션 4번끝
        section5Fn:function(){
          var next = [2,0,1];
          var $slide = $('#section5 .slide');
          var n      = $("#section5 .slide").length;
          var $slideW = 2265.75;
          var $slideFont = 130;
          var cnt    = 0;
          var $winW   = $(window).innerWidth();
          // console.log('gd');

          

          function responseFn(){
            $winW   = $(window).innerWidth();
            $slideW = $winW/0.841756;
            $slideFont = $winW/14.638461;
            $slide.css({width:$slideW,'font-size':$slideFont});
            mainSlideFn();
            
          }
          $(window).resize(function(){
            responseFn();
          });
          setTimeout(responseFn,20);
        


          mainSlideFn();

          function mainSlideFn(){
            for(var i=0; i<n; i++){
              next[i] = i;
            }

            var imsi = next.pop();
            next.unshift(imsi);

            for(var i=0; i<cnt; i++){
              var imsi = next.shift();
              next.push(imsi); 
            }

            for(var i=0; i<n; i++){
              $slide.eq( next[i] ).stop().animate({left: ($slideW*i) + 'px' }, 0).animate({left: ($slideW*(i-1)) + 'px' }, 10000, 'linear');
              // console.log(next[i]);
            }
          }

          function nextSlideCountFn(){
            cnt++;
            if(cnt>2){cnt=0}
            mainSlideFn();
          }

          

          function rollingNext(){
            nextSlideCountFn();
            setId = setInterval(nextSlideCountFn,10000);
          }
          rollingNext();



        },
        section6Fn:function(){
          var $slideWrap = $('#section6 .slide-wrap');
          var $prevBtn   = $('#section6 .prev-btn');
          var $nextBtn   = $('#section6 .next-btn');
          var $slide = $('#section6 .slide');
          var $slideView = $('#section6 .slide-view');
          var slideH = $winW/2.7185714;
          var $winW = $(window).innerWidth();
          var cnt = -1;
          var setId = null;
          var setId2 = null;
          var $raBtn = $('#section6 .raButton span');

          $raBtn.each(function(idx){
            $(this).on({
              click:function(e){
                e.preventDefault();
                console.log(idx);
                cnt = -idx;
                mainSlideFn();
              }
            })
          })

          function responseFn(){
            $winW = $(window).innerWidth();
            slideH = $winW/1.0185714;
            $slideView.css({width:$winW})
            mainSlideFn();
            if($winW<=770){
              $slide.eq(0).css({background:'url(./img/m_joeun.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slide.eq(1).css({background:'url(./img/m_kyesung.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slide.eq(2).css({background:'url(./img/m_sungah.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slide.eq(3).css({background:'url(./img/m_minyong.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slide.eq(4).css({background:'url(./img/m_seungmin.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slide.eq(5).css({background:'url(./img/m_yohan.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slide.eq(6).css({background:'url(./img/m_joeun.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slide.eq(7).css({background:'url(./img/m_dahye.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slide.eq(8).css({background:'url(./img/m_inwoo.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slide.eq(9).css({background:'url(./img/m_joeun.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slide.eq(10).css({background:'url(./img/m_kyesung.jpg)no-repeat 50% 0%','background-size':'cover'});
              $slideView.css({height:slideH});
            }else if($winW>770){
              $slide.eq(0).css({background:'url(./img/pc_joeun.jpg)no-repeat 50% 0%'});
              $slide.eq(1).css({background:'url(./img/pc_kyesung.jpg)no-repeat 50% 0%'});
              $slide.eq(2).css({background:'url(./img/pc_sungah.jpg)no-repeat 50% 0%'});
              $slide.eq(3).css({background:'url(./img/pc_minyong.jpg)no-repeat 50% 0%'});
              $slide.eq(4).css({background:'url(./img/pc_seungmin.jpg)no-repeat 50% 0%'});
              $slide.eq(5).css({background:'url(./img/pc_yohan.jpg)no-repeat 50% 0%'});
              $slide.eq(6).css({background:'url(./img/pc_joeun.jpg)no-repeat 50% 0%'});
              $slide.eq(7).css({background:'url(./img/pc_dahye.jpg)no-repeat 50% 0%'});
              $slide.eq(8).css({background:'url(./img/pc_inwoo.jpg)no-repeat 50% 0%'});
              $slide.eq(9).css({background:'url(./img/pc_joeun.jpg)no-repeat 50% 0%'});
              $slide.eq(10).css({background:'url(./img/pc_kyesung.jpg)no-repeat 50% 0%'});
              $slideView.css({height:700});
            }
          }
          $(window).resize(function(){
            responseFn();
          })
          setTimeout(responseFn,20)

          

          function mainSlideFn(){
            // console.log(cnt);
            $slideWrap.stop().animate({left:cnt*$winW},1000,function(){
              if(cnt >= 0){cnt = -9}
              if(cnt <= -10){cnt = -1}
              $slideWrap.stop().animate({left:cnt*$winW},0)
            })
          }

          function nextSlideFn(){
            cnt--;
            mainSlideFn();
          }
          function prevSlideFn(){
            cnt++;
            mainSlideFn();
          }
          

          $prevBtn.on({
            click:function(){
              if(!$slideWrap.is(':animated')){
                prevSlideFn();
                timerFn();
              }
            }
          })
          $nextBtn.on({
            click:function(){
              if(!$slideWrap.is(':animated')){
                nextSlideFn();
                timerFn();
              }
            }
          })

          var t = 0;
          // setId = setInterval(nextSlideFn,6000);

          function timerFn(){
            clearInterval(setId2);
            t=0;
            setId2 = setInterval(function(){
              clearInterval(setId);
              t++
              // console.log(t);
              if(t>=6){
                nextSlideFn();
                setId = setInterval(nextSlideFn,6000);
                clearInterval(setId2);
                t = 0;
              }
              
            },1000);
          }


          var touchStart = 0;
          var touchEnd = 0;
          var touchYstart = 0;
          var touchYend = 0;
          var mouseDown = false;

          $slideWrap.on({
            mousedown:function(e){
              e.preventDefault();
                mouseDown = true;
                touchStart = e.pageX;
                touchYstart = e.pageY;
              
            },
            touchstart:function(e){
              e.preventDefault();
              mouseDown = true;
              touchStart  = e.originalEvent.changedTouches[0].clientX;
              touchYstart = e.originalEvent.changedTouches[0].clientY;
              
            },

            mouseup:function(e){
              e.preventDefault();
              mouseDown = false;
              touchEnd = e.pageX;
              touchYend = e.pageY;
              touchSwipeFn();
            },
            touchend:function(e){
              e.preventDefault();
              mouseDown = false;
              touchEnd  = e.originalEvent.changedTouches[0].clientX;
              touchYend = e.originalEvent.changedTouches[0].clientY;
              touchSwipeFn();
            }

          });

          function touchSwipeFn(){
              if(touchStart>=touchEnd && $winW/2<touchStart){
                if( !$slideWrap.is(':animated')){
                  nextSlideFn();
                }
              }else{
                if( !$slideWrap.is(':animated')){
                  prevSlideFn();
                }
              }
              timerFn();
            }

        },//섹션 6번끝
        section7Fn:function(){
          var $slideWrap = $('#section7 .gal-wrap');
          var cnt = 0;
          var $window = $(window);
          var $winW = $(window).innerWidth();
          var $winH = $(window).innerHeight();
          var $slide = $('#section7 .gal-slide-gap .slide');
          var $slideGap = $('#section7 .gal-slide-gap');
          var $slideLi = $('#section7 li.gal-slide');
          var $slideLiW = $winW/1.812380;
          var $slideW = $winW/1.865686;
          var slideLeft = 0;
          var t = 0;
          var $topCol = $('#section7 .container .top-col');

          function responseFn(){
            $winW = $(window).innerWidth();
            $winH = $window.innerHeight();
            $slideW = $winW/1.865686;
            $slideLiW = $winW/1.812380;
            $slide.css({width:$slideW})
            $slideGap.css({width:$slideW})
            $slideLi.css({width:$slideLiW,height:$slideLiW/1.8884892})
            if($winW<=770){
              $slideLiW = $winW/1.612380;
              $slideW = $winW/1.765686;
              $slide.css({width:$slideW});
              $slideGap.css({width:$slideW});
              $slideLi.css({width:$slideLiW,height:$slideLiW/1.2884892});
            }
            mainSlideFn();
          }
          setTimeout(responseFn,100);
          responseFn();
          
          $window.resize(function(){
            responseFn();
          })


          // (cnt*$slideLiW)-(($slideLiW*2)+($slideLiW/2))
          function mainSlideFn(){
            // console.log(cnt);
            $slideWrap.stop().animate({left:''+(cnt*$slideLiW)-(($slideLiW*2)+($slideLiW/2))+''},500,function(){
              if(cnt == 1){cnt = -2}
              if(cnt ==-3){cnt = 0}
              $slideWrap.stop().animate({left:''+(cnt*$slideLiW)-(($slideLiW*2)+($slideLiW/2))+''},0)
              slideLeft = $slideWrap.offset().left;
            })
            
            
          }
          function nextSlideFn(){
            cnt--;
            mainSlideFn();
          }
          function prevSlideFn(){
            cnt++;
            mainSlideFn();
          }

          var touchStart = 0;
          var touchEnd = 0;
          var touchYstart = 0;
          var touchYend = 0;
          var mouseDown = false;
          var moveX = 0;
          slideLeft = $slideWrap.offset().left;

          $slideWrap.on({
            mousedown:function(e){
              e.preventDefault();
                  $slideWrap.on({
                    mousemove:function(v){
                      moveX =  v.clientX-e.clientX;
                      if( !$slideWrap.is(':animated')){
                        $slideWrap.stop().css({left:moveX+slideLeft},function(){
                          return(moveX);
                        })
                        // console.log($slideWrap.offset().left)
                      }else if($slideWrap.is(':animated')){
                        // console.log(moveX-cnt*1050-2715);
                        touchSwipeFn();
                      }
                    }
                })
              mouseDown = true;
              touchStart = e.pageX;
              touchYstart = e.pageY;
            },
            touchstart:function(e){
              e.preventDefault();
              mouseDown = true;
              touchStart  = e.originalEvent.changedTouches[0].clientX;
              touchYstart = e.originalEvent.changedTouches[0].clientY;
            },

            mouseup:function(e){
              e.preventDefault();
              $slideWrap.off('mousemove');
              mouseDown = false;
              touchEnd = e.pageX;
              touchYend = e.pageY;
              if(moveX > ($winW/4.7575) || moveX<(-$winW/4.7575)){
                  touchSwipeFn()
              }else if(moveX <= ($winW/4.7575) && moveX >=(-$winW/4.7575)){
                $slideWrap.stop().animate({left:slideLeft},500)
              }

              moveX=0;
            },
            touchend:function(e){
              e.preventDefault();
              mouseDown = false;
              touchEnd  = e.originalEvent.changedTouches[0].clientX;
              touchYend = e.originalEvent.changedTouches[0].clientY;
              touchSwipeFn();
            }

          });

          function touchSwipeFn(){
              if(touchStart>=touchEnd && $winW/2<touchStart){
                if( !$slideWrap.is(':animated')){
                  nextSlideFn();
                }
              }else{
                if( !$slideWrap.is(':animated')){
                  prevSlideFn();
                }
              }
            }

            $(window).scroll(function(){
              if( $(window).scrollTop() >= $('#section7').offset().top-400  ){
                if(t==0){
                  t=1;
                  $topCol.addClass('addPalsect7');
                }                
              }
  
              if( $(window).scrollTop() === 0 ){
                t=0;
                $topCol.removeClass('addPalsect7');
              }
            });

        },// 섹션7번끝
        section8Fn:function(){
          var $titleWrap = $('#section8 .container .title-wrap');
          var $ulCol1 = $('#section8 .gal-wrap .gal-gap ul.col1');
          var $ulCol2 = $('#section8 .gal-wrap .gal-gap ul.col2');
          var $ulCol3 = $('#section8 .gal-wrap .gal-gap ul.col3');

          $(window).scroll(function(){
            
            if( $(window).scrollTop() >= $('#section8').offset().top-600  ){
                $titleWrap.addClass('addPalsect8_1');          
            }
            if( $(window).scrollTop() >= $('#section8').offset().top-300  ){
                $ulCol1.addClass('addPalsect8_2');
            }
            if( $(window).scrollTop() >= $('#section8').offset().top+300  ){
                $ulCol2.addClass('addPalsect8_3');
            }
            if( $(window).scrollTop() >= $('#section8').offset().top+600  ){
                $ulCol3.addClass('addPalsect8_4');
            }

            if( $(window).scrollTop() === 0 ){
              $titleWrap.removeClass('addPalsect8_1');
              $ulCol1.removeClass('addPalsect8_2');
              $ulCol2.removeClass('addPalsect8_3');
              $ulCol3.removeClass('addPalsect8_4');
            }
          });
        }
        

    }
    bank.init();

})(jQuery);