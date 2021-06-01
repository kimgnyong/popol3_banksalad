;(function($){

    var sub2bank = {
        init: function(){
            this.headerFn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
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
          var next = [2,0,1];
          var $slide = $('#section2 .slide');
          var n      = $("#section2 .slide").length;
          var $slideW = 2265.75;
          var $slideFont = 130;
          var cnt    = 0;
          var $winW   = $(window).innerWidth();
          var $leftContent = $('#section2 .content .left-content');
          var $rightContent = $('#section2 .content .right-content');
          var $contentWrap = $('#section2 .content-container .content');
          var t =0;

          

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
          setTimeout(addPalFn);
          
          function addPalFn(){
            setTimeout(function(){
              $leftContent.addClass('addPalsect2');
              setTimeout(function(){
                $rightContent.addClass('addPalsect2');
              },600)
            },0)
          }
        


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

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section2').offset().top  ){
              if(t==0){
                t=1;
                setTimeout(function(){
                  $contentWrap.eq(0).addClass('addPalsect2_all');
                  setTimeout(function(){
                    $contentWrap.eq(1).addClass('addPalsect2_all');
                    setTimeout(function(){
                      $contentWrap.eq(2).addClass('addPalsect2_all');
                    },300)
                  },300)
                },0)
              }                
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              $contentWrap.removeClass('addPalsect2_all');
            }
          });


        },
        section3Fn:function(){
          var $content = $('#section3 a.content');
          var $section3modal = $('#section3modal');
          var $section3modalWrap = $('#section3modal .wrap');
          var clickT = 0;
          var $slideWrap = $('#section3modal .slide-wrap');
          var $slide  = $('#section3modal .slide');
          var $imgWrap = $('#section3modal .slide-gap .img-wrap');
          var $slideW = $slide.innerWidth();
          var cnt = 0;
          var slideLeft = 0;
          var $winW = $slideW;
          var $imgWrapW = 325;
          var $imgWrapH1 = $('#section3modal .slide0 .slide-gap .img-wrap').innerHeight();
          var $imgWrapH2 = $('#section3modal .slide1 .slide-gap .img-wrap').innerHeight();
          var $imgWrapH3 = $('#section3modal .slide2 .slide-gap .img-wrap').innerHeight();
          var $leftContent =$('#section3 .content .left-content');
          var $rightContent =$('#section3 .content .right-content');
          var $contentWrap = $('#section3 .content-container .content');
          var t = 0;
          
          function resizeFn(){
            $slideW = $slide.innerWidth();
            $winW = $slideW;
            $imgWrapW = $slideW/1.9230769;
            $imgWrapH1 = $imgWrapW*1.3415384;
            $imgWrapH2 = $imgWrapW*1.415384;
            $imgWrapH3 = $imgWrapW*1.510769;
            $imgWrap.eq(0).css({width:$imgWrapW,height:$imgWrapH3});
            $imgWrap.eq(1).css({width:$imgWrapW,height:$imgWrapH1});
            $imgWrap.eq(2).css({width:$imgWrapW,height:$imgWrapH2});
            $imgWrap.eq(3).css({width:$imgWrapW,height:$imgWrapH3});
            $imgWrap.eq(4).css({width:$imgWrapW,height:$imgWrapH1});
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
            $slideW = $slide.innerWidth();
            $winW = $slideW;
            // console.log(cnt);
            $slideWrap.stop().animate({left:cnt*$slideW},500,function(){
              if(cnt == 0){cnt = -3}
              if(cnt == -4){cnt = -1}
              $slideWrap.stop().animate({left:cnt*$slideW},0)
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

          $content.each(function(idx){
            $(this).on({
              click:function(e){
                if(clickT == 0 ){
                  $('html').addClass('addScroll');
                  $section3modal.css({'display':'block'});
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
                $section3modal.css({'display':'none'});
                $('html').removeClass('addScroll');
                clickT = 0;
              }
            }
          })

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section3').offset().top-600  ){
              if(t==0){
                setTimeout(function(){
                  $leftContent.addClass('addPalsect3_1');
                  setTimeout(function(){
                    $rightContent.addClass('addPalsect3_1');
                  },600)
                },0)
              }                
            }
            if( $(window).scrollTop() >= $('#section3').offset().top+500  ){
              if(t==0){
                t=1;
                setTimeout(function(){
                  $contentWrap.eq(0).addClass('addPalsect3_all');
                  setTimeout(function(){
                    $contentWrap.eq(1).addClass('addPalsect3_all');
                    setTimeout(function(){
                      $contentWrap.eq(2).addClass('addPalsect3_all');
                    },600)
                  },600)
                },0)
              }                
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              $leftContent.removeClass('addPalsect3_1');
              $rightContent.removeClass('addPalsect3_1');
              $contentWrap.removeClass('addPalsect3_all');
            }
          });

        },//섹션3번끝
        section4Fn:function(){
          var $rightContent = $('#section4 .content .right-content');
          var $leftContent = $('#section4 .content .left-content');
          var t = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section4').offset().top-600  ){
              if(t==0){
                t=1;
                setTimeout(function(){
                  $leftContent.addClass('addPalsect4');
                  setTimeout(function(){
                    $rightContent.addClass('addPalsect4');
                  },600)
                },0)
              }                
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              $leftContent.removeClass('addPalsect4');
              $rightContent.removeClass('addPalsect4');
            }
          });
        },//섹션4번끝
        section5Fn:function(){
          var $ection5 = $('#section5');
          var winW = $(window).innerWidth();

          function resizeFn(){
            winW = $(window).innerWidth();
            if(winW <=770){
              $ection5.css({width:winW,height:winW,'background-size':'cover'});
            }else if(winW >770){
              $ection5.css({width:winW,height:560,'background-size':'cover'});
            }
          }
          $(window).resize(function(){
            resizeFn();
          })
          setTimeout(resizeFn,100);
        },//섹션5번끝
        section6Fn:function(){
          var $rightContent = $('#section6 .content .right-content');
          var $leftContent = $('#section6 .content .left-content');
          var $text = $('#section6 .text-gap .text');
          var t = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section6').offset().top-600  ){
              if(t==0){
                setTimeout(function(){
                  $leftContent.addClass('addPalsect6');
                  setTimeout(function(){
                    $rightContent.addClass('addPalsect6');
                  },600)
                },0)
              }                
            }
            if( $(window).scrollTop() >= $('#section6').offset().top+200  ){
              if(t==0){
                t=1;
                setTimeout(function(){
                  $text.eq(0).addClass('addPalsect6_text')
                  setTimeout(function(){
                    $text.eq(1).addClass('addPalsect6_text')
                    setTimeout(function(){
                      $text.eq(2).addClass('addPalsect6_text')
                    },600)
                  },600)
                },0)
              }
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              $leftContent.removeClass('addPalsect6');
              $rightContent.removeClass('addPalsect6');
              $text.removeClass('addPalsect6_text')
            }
          });
        },//섹션4번끝
        section7Fn:function(){
          var $section7 = $('#section7');
          var winW = $(window).innerWidth();

          function resizeFn(){
            winW = $(window).innerWidth();
            if(winW <=770){
              $section7.css({width:winW,height:winW,'background-size':'cover'});
            }else if(winW >770){
              $section7.css({width:winW,height:560,'background-size':'cover'});
            }
          }
          $(window).resize(function(){
            resizeFn();
          })
          setTimeout(resizeFn,100);
        },//섹션7번끝
        section8Fn:function(){
          var $rightContent = $('#section8 .content .right-content');
          var $leftContent = $('#section8 .content .left-content');
          var t = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section8').offset().top-600  ){
              if(t==0){
                t=1;
                setTimeout(function(){
                  $leftContent.addClass('addPalsect8');
                  setTimeout(function(){
                    $rightContent.addClass('addPalsect8');
                  },600)
                },0)
              }                
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              $leftContent.removeClass('addPalsect8');
              $rightContent.removeClass('addPalsect8');
            }
          });
        },//섹션4번끝
        section9Fn:function(){
          var $slideWrap = $('#section9 .gal-wrap');
          var cnt = 0;
          var $window = $(window);
          var $winW = $(window).innerWidth();
          var $winH = $(window).innerHeight();
          var $slide = $('#section9 .gal-slide-gap .slide');
          var $slideGap = $('#section9 .gal-slide-gap');
          var $slideLi = $('#section9 li.gal-slide');
          var $slideLiW = $winW/1.812380;
          var $slideW = $winW/1.865686;
          var slideLeft = 0;
          var $rightContent = $('#section9 .top-col .right-content');
          var $leftContent = $('#section9 .top-col .left-content');
          var t = 0;

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
            if( $(window).scrollTop() >= $('#section9').offset().top-600  ){
              if(t==0){
                t=1;
                setTimeout(function(){
                  $leftContent.addClass('addPalsect9');
                  setTimeout(function(){
                    $rightContent.addClass('addPalsect9');
                  },600)
                },0)
              }                
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              $leftContent.removeClass('addPalsect9');
              $rightContent.removeClass('addPalsect9');
            }
          });
        }// 섹션9번끝
    }
    sub2bank.init();

})(jQuery);