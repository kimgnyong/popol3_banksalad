;(function($){

    var sub3bank = {
        init: function(){
            this.headerFn();
            this.section2Fn();
            this.section2Slide1Fn();
            this.section2Slide2Fn();
            this.section3Fn();
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
          var $imgWrap1 = $('#section2 .gal1 .img-content .img-wrap');
          var $winW = $(window).innerWidth();
          var $slideH = 0;
          var $slideW = 0;
          var $leftContent = $('#section2 .title-gap .left-content');
          var $rightContent = $('#section2 .title-gap .right-content');

          var $imgContent1 = $('#section2 .gal1 .img-content');
          var $textContentH1 = $('#section2 .gal1 .text-content .text-gap > h2'); 
          var $textContentP1 = $('#section2  .gal1 .text-content .text-gap > p');

          var $imgContent2 = $('#section2 .gal2 .img-content');
          var $textContentH2 = $('#section2 .gal2 .text-content .text-gap > h2'); 
          var $textContentP2 = $('#section2  .gal2 .text-content .text-gap > p');

          var $imgContent3 = $('#section2 .gal3 .img-content');
          var $textContentH3 = $('#section2 .gal3 .text-content .text-gap > h2'); 
          var $textContentP3 = $('#section2  .gal3 .text-content .text-gap > p');

          var $imgContent4 = $('#section2 .gal4 .img-content');
          var $textContentH4 = $('#section2 .gal4 .text-content .text-gap > h2'); 
          var $textContentP4 = $('#section2  .gal4 .text-content .text-gap > p');
          var t = 0;

          function addPalFn(){
            if( $(window).scrollTop() >= 0  ){
              setTimeout(function(){
                $leftContent.addClass('addPalsect2');
                setTimeout(function(){
                  $rightContent.addClass('addPalsect2');
                },600)
              },0)     
            }
          }
          addPalFn();

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section2').offset().top-200  ){
              if(t==0){
                $imgContent1.addClass('addPalsect2_gal1')
                setTimeout(function(){
                  $textContentH1.addClass('addPalsect2_gal1h2');
                  setTimeout(function(){
                    $textContentP1.addClass('addPalsect2_gal1h2')
                  },600)
                },0)

                
              }                
            }

            if( $(window).scrollTop() >= $('#section2').offset().top+800  ){
              if(t==0){
                $imgContent2.addClass('addPalsect2_gal2')
                setTimeout(function(){
                  $textContentH2.addClass('addPalsect2_gal1h2');
                  setTimeout(function(){
                    $textContentP2.addClass('addPalsect2_gal1h2')
                  },600)
                },0)

              }
            }

            if( $(window).scrollTop() >= $('#section2').offset().top+1500  ){
              if(t==0){
                $imgContent3.addClass('addPalsect2_gal1')
                setTimeout(function(){
                  $textContentH3.addClass('addPalsect2_gal1h2');
                  setTimeout(function(){
                    $textContentP3.addClass('addPalsect2_gal1h2')
                  },600)
                },0)
              }
            }

            if( $(window).scrollTop() >= $('#section2').offset().top+2200  ){
              if(t==0){
                t=1;
                $imgContent4.addClass('addPalsect2_gal2')
                setTimeout(function(){
                  $textContentH4.addClass('addPalsect2_gal1h2');
                  setTimeout(function(){
                    $textContentP4.addClass('addPalsect2_gal1h2')
                  },600)
                },0)

              }
            }
          

            if( $(window).scrollTop() === 0 ){
              t=0;
                $imgContent1.removeClass('addPalsect2_gal1')
                $textContentH1.removeClass('addPalsect2_gal1h2');
                $textContentP1.removeClass('addPalsect2_gal1h2')
                $imgContent2.removeClass('addPalsect2_gal2')
                $textContentH2.removeClass('addPalsect2_gal1h2');
                $textContentP2.removeClass('addPalsect2_gal1h2')
                $imgContent3.removeClass('addPalsect2_gal1')
                $textContentH3.removeClass('addPalsect2_gal1h2');
                $textContentP3.removeClass('addPalsect2_gal1h2')
                $imgContent4.removeClass('addPalsect2_gal2')
                $textContentH4.removeClass('addPalsect2_gal1h2');
                $textContentP4.removeClass('addPalsect2_gal1h2')
            }
          });
          

          function resizeFn(){
            $winW = $(window).innerWidth();
            $slideW = $winW-30;
            $slideH = $winW/2.052941;
            if($winW >770){
              $imgWrap1.removeAttr("style");
            }else if($winW <=770 && $winW >530){
              $imgWrap1.css({width:$slideW,height:$slideH,'background':'url(./img/m_a-8fd45c3a372dcc7462639c5a51485095.jpg)no-repeat 50% 50%','background-size':'cover'});
            }else if($winW <= 530){
              $imgWrap1.css({width:$slideW,height:$slideW+30});
            }
          }
          $(window).resize(function(){
            resizeFn();
          })
          setTimeout(resizeFn,100);

        },
        section2Slide1Fn:function(){
          var $slideWrap = $('#section2 .gal2 .slide-wrap');
          var $slide  = $('#section2 .gal2 .slide');
          var $slideW = $slide.innerWidth();
          var cnt = -1;
          var slideLeft = 0;
          var $winW = $slideW;
          var $pageBtn = $('#section2 .gal2 .page-btn');
          var setId = null;
          var setId2 = null;

          var $slideView = $('#section2 .gal2 .img-content .slide-view');
          var $windowW = $(window).innerWidth();
          var $slideH2 = 0;
          var $slideW2 = 0;
          

          function resizeFn(){
            // console.log('gd');
            $windowW = $(window).innerWidth();
            $slideW2 = $windowW-30;
            $slideH2 = $windowW/2.052941;
            if($windowW >770){
              $slideView.removeAttr("style");
              $slide.removeAttr("style");
              $slideW = $slide.innerWidth();
            }else if($windowW <=770 && $windowW >530){
              $slideView.css({width:$slideW2,height:$slideH2});
              $slide.eq(0).css({width:$slideW2,height:$slideH2,'background':'url(./img/m_b_3-b39ee0475592d37c406040df42b30110.jpg)no-repeat 50% 50%','background-size':'cover'})
              $slide.eq(1).css({width:$slideW2,height:$slideH2,'background':'url(./img/m_b_1-a461ad015960d995df79498711f75cd8.jpg)no-repeat 50% 50%','background-size':'cover'})
              $slide.eq(2).css({width:$slideW2,height:$slideH2,'background':'url(./img/m_b_2-725be7a801bf0a2577cb06392cf3f54e.jpg)no-repeat 50% 50%','background-size':'cover'})
              $slide.eq(3).css({width:$slideW2,height:$slideH2,'background':'url(./img/m_b_3-b39ee0475592d37c406040df42b30110.jpg)no-repeat 50% 50%','background-size':'cover'})
              $slide.eq(4).css({width:$slideW2,height:$slideH2,'background':'url(./img/m_b_1-a461ad015960d995df79498711f75cd8.jpg)no-repeat 50% 50%','background-size':'cover'})
              $slideW = $slideW2;
            }else if($windowW <= 530){
              $slideView.css({width:$slideW2,height:$slideW2+30});
              $slide.css({width:$slideW2,height:$slideW2+30})
              $slideW = $slideW2;
            }
            mainSlideFn();
          }
          $(window).resize(function(){
            resizeFn();
          })
          setTimeout(resizeFn,100);

          // console.log($pageBtn);

          function mainSlideFn(){
            $slideWrap.stop().animate({left:cnt*$slideW},500,function(){
              if(cnt == 0){cnt = -3}
              if(cnt == -4){cnt = -1}
              $slideWrap.stop().animate({left:cnt*$slideW},0)
              $pageBtn.removeClass('addPageOn');
              $pageBtn.eq(-cnt-1).addClass('addPageOn');
              slideLeft = $slideWrap.offset().left-1060;
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
          slideLeft = $slideWrap.offset().left-1060;
          
          $slideWrap.on({
            mousedown:function(e){
                  $slideWrap.on({
                    mousemove:function(v){
                      moveX =  v.clientX-e.clientX;
                      // console.log(moveX);
                      // console.log(slideLeft);
                      if( !$slideWrap.is(':animated')){
                        $slideWrap.stop().css({left:moveX+slideLeft},function(){
                          return(moveX);
                        })
                      }else if($slideWrap.is(':animated')){
                        touchSwipeFn();
                      }
                    },
                    mouseleave:function(){
                      $slideWrap.off('mousemove');
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
                  timerFn()
                }
              }else{
                if( !$slideWrap.is(':animated')){
                  prevSlideFn();
                  timerFn()
                }
              }
            }

            $pageBtn.each(function(idx){
              $(this).on({
                click:function(){
                  cnt = -idx-1;
                  console.log(cnt);
                  mainSlideFn();
                  timerFn()
                }
              })
            })

            setId = setInterval(nextSlideFn,5000);

            function timerFn(){
              clearInterval(setId2);
              var t=0;
              setId2 = setInterval(function(){
                clearInterval(setId);
                t++
                // console.log(t);
                if(t>=5){
                  nextSlideFn();
                  setId = setInterval(nextSlideFn,5000);
                  clearInterval(setId2);
                  t = 0;
                }
                
              },1000);
            }
        },
        section2Slide2Fn:function(){
          var $slideWrap = $('#section2 .gal3 .slide-wrap');
          var $slide  = $('#section2 .gal3 .slide');
          var $slideW = $slide.innerWidth();
          var cnt = -1;
          var slideLeft = 0;
          var $winW = $slideW;
          var $pageBtn = $('#section2 .gal3 .page-btn');
          var setId = null;
          var setId2 = null;

          var $slideView = $('#section2 .gal3 .img-content .slide-view');
          var $imgContent = $('#section2 .gal3 .img-content');
          var $windowW = $(window).innerWidth();
          var $slideH2 = 0;
          var $slideW2 = 0;
          

          function resizeFn(){
            // console.log('gd');
            $windowW = $(window).innerWidth();
            $slideW2 = $windowW-30;
            $slideH2 = $windowW/2.052941;
            if($windowW >770){
              $slideView.removeAttr("style");
              $slide.removeAttr("style");
              $slideW = $slide.innerWidth();
            }else if($windowW <=770 && $windowW >530){
              $slideView.css({width:$slideW2,height:$slideH2});
              $slide.eq(0).css({width:$slideW2,height:$slideH2,'background':'url(./img/m_c_2-6a0cc919c16d9b2c3b3bfa61aacbb43f.jpg)no-repeat 50% 50%','background-size':'cover'})
              $slide.eq(1).css({width:$slideW2,height:$slideH2,'background':'url(./img/m_c_1-1b3cf3fb9c44a28af6b0b161f0523fca.jpg)no-repeat 50% 50%','background-size':'cover'})
              $slide.eq(2).css({width:$slideW2,height:$slideH2,'background':'url(./img/m_c_2-6a0cc919c16d9b2c3b3bfa61aacbb43f.jpg)no-repeat 50% 50%','background-size':'cover'})
              $slide.eq(3).css({width:$slideW2,height:$slideH2,'background':'url(./img/m_c_1-1b3cf3fb9c44a28af6b0b161f0523fca.jpg)no-repeat 50% 50%','background-size':'cover'})
              $slideW = $slideW2;
            }else if($windowW <= 530){
              $slideView.css({width:$slideW2,height:$slideW2+30});
              $slide.css({width:$slideW2,height:$slideW2+30})
              $slideW = $slideW2;
            }
            mainSlideFn();
          }
          $(window).resize(function(){
            resizeFn();
          })
          setTimeout(resizeFn,100);

          

          function mainSlideFn(){
            // console.log(cnt);
            $slideWrap.stop().animate({left:cnt*$slideW},500,function(){
              if(cnt == 0){cnt = -2}
              if(cnt == -3){cnt = -1}
              $slideWrap.stop().animate({left:cnt*$slideW},0)
              $pageBtn.removeClass('addPageOn');
              $pageBtn.eq(-cnt-1).addClass('addPageOn');
              slideLeft = $slideWrap.offset().left-400;
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
          slideLeft = $slideWrap.offset().left-400;
          
          $slideWrap.on({
            mousedown:function(e){
                  $slideWrap.on({
                    mousemove:function(v){
                      moveX =  v.clientX-e.clientX;
                      // console.log(moveX);
                      // console.log(slideLeft);
                      if( !$slideWrap.is(':animated')){
                        $slideWrap.stop().css({left:moveX+slideLeft},function(){
                          return(moveX);
                        })
                      }else if($slideWrap.is(':animated')){
                        touchSwipeFn();
                      }
                    },
                    mouseleave:function(){
                      $slideWrap.off('mousemove');
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
                  timerFn()
                }
              }else{
                if( !$slideWrap.is(':animated')){
                  prevSlideFn();
                  timerFn()
                }
              }
            }

            $pageBtn.each(function(idx){
              $(this).on({
                click:function(){
                  cnt = -idx-1;
                  console.log(cnt);
                  mainSlideFn();
                  timerFn()
                }
              })
            })

            setId = setInterval(nextSlideFn,4000);

            function timerFn(){
              clearInterval(setId2);
              var t=0;
              setId2 = setInterval(function(){
                clearInterval(setId);
                t++
                // console.log(t);
                if(t>=5){
                  nextSlideFn();
                  setId = setInterval(nextSlideFn,4000);
                  clearInterval(setId2);
                  t = 0;
                }
                
              },1000);
            }
        },
        section3Fn:function(){
          var $gal = $('#section3 li.gal');
          var $section3modal = $('#section3modal');
          var $section3modalWrap = $('#section3modal .wrap');
          var clickT = 0;
          var $slideWrap = $('#section3modal .slide-wrap');
          var $slide  = $('#section3modal .slide');
          var $slideView  = $('#section3modal .slide-view');
          var $slideW = $slide.innerWidth();
          var $slideViewW = $slideView.innerWidth();
          var cnt = -1;
          var slideLeft = 0;
          var $winW = $slideW;
          var $windowW = $(window).innerWidth();
          var t = 0;
          var $leftContent = $('#section3 .title-gap .left-content');
          var $rightContent = $('#section3 .title-gap .right-content');
          var $liImgWrap = $('#section3 ul.gal-content li.gal');
          
          function resizeFn(){
            $slideW = $slide.innerWidth();
            $winW = $slideW;
            $windowW = $(window).innerWidth();
              $section3modal.css({'display':'block'});
              $slideViewW = $slideView.innerWidth();
              if($section3modalWrap.css("left") === "0px"){
                $section3modal.css({'display':'block'});
              }else if($section3modalWrap.css("display") !== "0px"){
                $section3modal.css({'display':'none'});
              }
            mainSlideFn();
          }
          $(window).resize(function(){
            resizeFn();
          })
          setTimeout(function(){
            $section3modal.css({'display':'block'});  // display : none;이 되있는 상태에서는 함수적용에서 버그발생
            resizeFn();
            $section3modal.css({'display':'none'});
          },100);


          function mainSlideFn(){
            // console.log($slideViewW);
            $slideWrap.stop().animate({left:cnt*$slideViewW},500,function(){
              if(cnt == 0){cnt = -9}
              if(cnt == -10){cnt = -1}
              $slideWrap.stop().animate({left:cnt*$slideViewW},0)
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

            
            $gal.each(function(idx){
              $(this).on({
                click:function(e){
                  if(clickT == 0 ){
                    $('html').addClass('addScroll');
                    $('#section3').css({'width':'1903px'})
                    $section3modal.css({'display':'block'});
                    $section3modalWrap.stop().animate({left:0},500,'easeOutQuint');
                    cnt = -(idx+1);
                    clickT = 1;
                    mainSlideFn();
                  }
                }
              })
            })
            $section3modalWrap.on({
              click:function(e){
                e.stopPropagation();
              }
            })
            $section3modal.on({
              click:function(){
                if(clickT == 1){
                  $section3modalWrap.stop().animate({left:'-100%'},500,'easeInQuint',function(){
                    $section3modal.css({'display':'none'});
                  });
                  $('#section3').css({'width':'100%'})
                  $('html').removeClass('addScroll');
                  clickT = 0;
                }
              }
            })

            $(window).scroll(function(){
              if( $(window).scrollTop() >= $('#section3').offset().top-600  ){
                if(t==0){
                  setTimeout(function(){
                    $leftContent.addClass('addPalsect3_title');
                    setTimeout(function(){
                      $rightContent.addClass('addPalsect3_title');
                    },600)
                  },0)
                }                
              }
              if( $(window).scrollTop() >= $('#section3').offset().top  ){
                if(t==0){
                  t=1;
                  setTimeout(function(){
                    $liImgWrap.eq(0).addClass('addPalsect3_gal');
                    setTimeout(function(){
                      $liImgWrap.eq(1).addClass('addPalsect3_gal');
                      setTimeout(function(){
                        $liImgWrap.eq(2).addClass('addPalsect3_gal');
                        setTimeout(function(){
                          $liImgWrap.eq(3).addClass('addPalsect3_gal');
                          setTimeout(function(){
                            $liImgWrap.eq(4).addClass('addPalsect3_gal');
                            setTimeout(function(){
                              $liImgWrap.eq(5).addClass('addPalsect3_gal');
                              setTimeout(function(){
                                $liImgWrap.eq(6).addClass('addPalsect3_gal');
                                setTimeout(function(){
                                  $liImgWrap.eq(7).addClass('addPalsect3_gal');
                                  setTimeout(function(){
                                    $liImgWrap.eq(8).addClass('addPalsect3_gal');
                                  },300)
                                },300)
                              },300)
                            },300)
                          },300)
                        },300)
                      },300)
                    },300)
                  },0)
                }                
              }
  
              if( $(window).scrollTop() === 0 ){
                t=0;
                $leftContent.removeClass('addPalsect3_title');
                $rightContent.removeClass('addPalsect3_title');
                $liImgWrap.removeClass('addPalsect3_gal');
              }
            });
          
          
        }
    }
    sub3bank.init();

})(jQuery);