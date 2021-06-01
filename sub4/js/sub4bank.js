;(function($){

    var sub4bank = {
        init: function(){
            this.headerFn();
            this.section2Fn();
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
          var $liBtn = $('#section2 .content-gap > ul > li');
          var $textWrap = $('#section2 p.text-wrap');
          var $leftContent = $('#section2 .title-gap .left-content')
          var $rightContent = $('#section2 .title-gap .right-content')

          // console.log($liBtn);

          $liBtn.each(function(idx){
            $(this).on({
              click:function(){
                $liBtn.removeClass('addClickOn');
                $(this).addClass('addClickOn');
                $textWrap.css({'display':'none'});
                $textWrap.eq(idx).css({'display':'block'});
              }
            })
          })

          function addPalFn(){
            setTimeout(function(){
              $leftContent.addClass('addPalsect2_title');
              setTimeout(function(){
                $rightContent.addClass('addPalsect2_title')
              },600)
            },0)
          }
          addPalFn();
        },//섹션2번 끝
        section3Fn:function(){
          var $menuBtn = $('#section3 li.menu a');
          var a = ['전체','테크','데이터','디자인','마케팅','PR','경영관리','제품','BD','고객경험'];
          var arrBoard = [];
          var search = "전체";
          var txt = "";
          var txt2= "";
          var $tbody = $('#section3 table tbody');
          var $pageNumberUl = $('#section3 .page-number-box ul');
          var $prevBtn = $('#section3 .before-btn');
          var $firstBtn = $('#section3 .first-btn');
          var $nextBtn = $('#section3 .next-btn');
          var $lastBtn = $('#section3 .last-btn');
          var $pageBtn = $('.page-btn');
          var list = 7;
          var total = 0;
          var totalPageNum = Math.ceil(total/list);
          var pageNumList = 5;
          var groupCnt = 0;
          var startNum = 0;
          var endNum = list;
          var groupStartNum = groupCnt * pageNumList;
          var groupEndNum = groupStartNum + pageNumList;
          var y = 0;    // 페이지네이션 내에서 리스트숫자를 세야할때 쓰기위한변수
          var x = 0;    // 메뉴버튼클릭시 페이지네이션을 하기때문에 listOnFn()이 두번돌아가는걸 방지하는용도
          var g = 0;    // 
          var pageGroupNum = 0;
          var t = 0;
          var $leftContent = $('#section3 .title-gap .left-content');

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section3').offset().top-600  ){
              if(t==0){
                t= 1;
                $leftContent.addClass('addPalsect3_title');
              }
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              $leftContent.removeClass('addPalsect3_title');
            }
          });
          
          

          function ajaxRunFn(){

            $.ajax({
              url:'./data/board.json',
              dataType:'JSON',
              success:function(result){


                  $menuBtn.each(function(idx){
                    $(this).on({
                      click:function(){
                        x = 1;
                        $menuBtn.removeClass('addClickOn');
                        $(this).addClass('addClickOn');
                        switch (a[idx]) {
                          case "전체":
                            x=0;
                            search = "전체";
                            listOnFn();
                            pageNationFn();
                            break;
                          case "테크":
                            search = "테크";
                            startNum = 0;
                            endNum = list;
                            listOnFn(search);
                            groupCnt=0;
                            pageNationFn();
                            break;
                          case "데이터":
                            startNum = 0;
                            endNum = list;
                            search = "데이터";
                            listOnFn(search);
                            groupCnt=0;
                            pageNationFn();
                          break;
                          case "디자인":
                            startNum = 0;
                            endNum = list;
                            search = "디자인";
                            listOnFn(search);
                            groupCnt=0;
                            pageNationFn();
                          break;
                          case "마케팅":
                            startNum = 0;
                            endNum = list;
                            search = "마케팅";
                            listOnFn(search);
                            groupCnt=0;
                            pageNationFn();
                          break;
                          case "PR":
                            startNum = 0;
                            endNum = list;
                            search = "PR";
                            listOnFn(search);
                            groupCnt=0;
                            pageNationFn();
                          break;
                          case "경영관리":
                            startNum = 0;
                            endNum = list;
                            search = "경영관리";
                            listOnFn(search);
                            groupCnt=0;
                            pageNationFn();
                          break;
                          case "제품":
                            startNum = 0;
                            endNum = list;
                            search = "제품";
                            listOnFn(search);
                            groupCnt=0;
                            pageNationFn();
                          break;
                          case "BD":
                            startNum = 0;
                            endNum = list;
                            search = "BD";
                            listOnFn(search);
                            groupCnt=0;
                            pageNationFn();
                          break;
                          case "고객경험":
                            startNum = 0;
                            endNum = list;
                            search = "고객경험";
                            listOnFn(search);
                            groupCnt=0;
                            pageNationFn();
                          break;
                          default:
                            console.log('선택요소가아닙니다. 에러발생');
                          break;
                        }
                      }
                    })
                  })

                  $.each(result.board, function(idx,obj){
                    arrBoard[idx] = [];

                    arrBoard[idx][0] = obj.번호;
                    arrBoard[idx][1] = obj.제목;
                    arrBoard[idx][2] = obj.날짜;
                    arrBoard[idx][3] = obj.조회수;
                    arrBoard[idx][4] = obj.메뉴;

                    total = idx;
                    totalPageNum = Math.ceil(total/list);
                  })



                  function listOnFn(c){
                   
                    if(!c && x==0){
                      txt = "";
                      y=0;
                      $tbody.empty();
                      for(var i=startNum; i<endNum; i++){
                        txt += "<tr>";
                        for(var j=0; j<=3; j++){
                          txt += "<td>"+ arrBoard[i][j]  +"</td>";
                        }
                        txt += "</tr>"; 
                      }
                      $tbody.html( txt );
                      totalPageNum = Math.ceil( total / list );
                      pageGroupNum = Math.ceil(totalPageNum / pageNumList);
                    }
                    else if(c && x==1){
                      txt = "";
                      y=0;
                      g=0;
                      $tbody.empty();
                      for(var i=0; i<total; i++){ // 총 갯수에서 비교를해야하기때문에 total로 for문실행
                        if(arrBoard[i][4] == c){ // 총 데이터중에서 비교검색에 해당되는 데이터만 이벤트발생
                          if(y < endNum && y >= startNum){ //출력되는양은 전달받은 end star 값에 따라서 출력이되야함
                            g++;          // 당장 눈에보이는 리스트의양
                            txt += "<tr>";
                            for(var j=0; j<=3; j++){
                              txt += "<td>"+ arrBoard[i][j]  +"</td>";
                            }
                            txt += "</tr>";
                          }
                          y++;                    // 총 출력되는 리스트의 양
                        }
                      }
                      $tbody.html( txt );
                      totalPageNum = Math.ceil( y / list );
                      pageGroupNum = Math.ceil(totalPageNum / pageNumList);
                    }
                    
                  }setTimeout(listOnFn,200)



                  function pageNationFn(){
                    $pageNumberUl.html('');
                    txt2 = '';
                    groupStartNum = groupCnt * pageNumList;
                    groupEndNum = groupStartNum + pageNumList;

                    if( groupEndNum > totalPageNum ){
                      groupEndNum = totalPageNum;
                    }

                    for(var i=groupStartNum; i<groupEndNum; i++){
                      if(i % pageNumList == 0){
                        txt2 += '<li><a href="javascript:" class="page-btn addpageOn">'+ (i+1) +'</a></li>'
                      }
                      else{
                        txt2 += '<li><a href="javascript:" class="page-btn">'+ (i+1) +'</a></li>'
                      }                                  
                    }

                    $pageNumberUl.html( txt2 );
                    $pageBtn = $('.page-btn');
                    startNum = (parseInt($pageBtn.eq(0).text())-1) * list;
                    endNum = startNum + list;

                    if( endNum > total ){
                        endNum = total;
                    }
                    if(search == "전체"){
                      x = 0;
                      listOnFn();
                    }else if(search != "전체"){
                      x= 1;
                      listOnFn(search);
                    }

                  }setTimeout(pageNationFn,200)



                  $prevBtn.on({
                    click:function(event){
                      event.preventDefault();

                      groupCnt--; 
                      if(groupCnt<0){
                        groupCnt=0;
                      }
                      pageNationFn();
                    }
                  });

                  $nextBtn.on({
                      click:function(event){
                        event.preventDefault();
                        groupCnt++;

                        if(groupCnt>pageGroupNum-1){ //6
                          groupCnt=pageGroupNum-1; //6 화살버튼으로 우측 이동시 7(0~6)
                          return; //마지막 페이지 우측 끝에서 버튼 클릭 취소
                        }
                        pageNationFn();                                    
                      }
                  });

                  $firstBtn.on({
                    click:function(event){
                      event.preventDefault();
                      groupCnt=0;

                      pageNationFn();                                    
                    }
                  });

                  $lastBtn.on({
                    click:function(event){
                      event.preventDefault();
                      console.log(pageGroupNum);
                      groupCnt=pageGroupNum-1;

                      pageNationFn();                                    
                    }
                  });


                  $(document).on('mouseenter', '.page-btn', function(){
                    $pageBtn.each(function(idx){
                      $(this).on({
                        click: function(event){
                                event.stopImmediatePropagation()
                                event.preventDefault();
                                $pageBtn.removeClass('addpageOn');
                                $(this).addClass('addpageOn');
                            
                                startNum = (parseInt($(this).text())-1) * list;
                                endNum = startNum + list;

                                if( endNum > total ){
                                    endNum = total;
                                }

                                if(search == "전체"){
                                  x = 0;
                                  listOnFn();
                                }else if(search != "전체"){
                                  x= 1;
                                  listOnFn(search);
                                }
                            }
                          });
                      });
                  });
                
              },
              error:function(result){
                console.log(result);
              }
            })

          }
          setTimeout(ajaxRunFn,100);
        }
    }
    sub4bank.init();

})(jQuery);
