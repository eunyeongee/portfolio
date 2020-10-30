$(document).ready(function(){
    var winH=$(window).height();
    var $sec=$('section');
    $sec.css('height',winH);
    
    $('#s1').find('.animation').addClass('active');
    
    $(window).scroll(function(){
       var winTop=$(this).scrollTop()+$(window).height();
        $sec.each(function(){
           if($(this).offset().top+$(this).height()-200<winTop){
               $(this).find('.animation').addClass('active');
            }
        });
    });
    
    //슬라이드
        var sw=0;
      var liw=$('.slide > ul > li').width();
      $('.slide > ul > li:last-child').prependTo('.slide > ul');
      $('.slide > ul').css('left',-liw);
      $('.prev a').click(function(e){
            e.preventDefault();
         sw=1;
         move();
      });
      $('.next a').click(function(e){
            e.preventDefault();
         sw=0;
         move();
      });
      
      function move(){
         if(sw==0){
            $('.slide > ul').animate({
               left:'-='+liw},500,function(){
               $('.slide > ul > li:first-child').appendTo('.slide > ul');
               $('.slide > ul').css('left',-liw);
            });
         }else{
            $('.slide > ul').animate({
               left:'+='+liw},500,function(){
               $('.slide > ul > li:last-child').prependTo('.slide > ul');
               $('.slide > ul').css('left',-liw);
            });
         }
      }
    
    //팝업갤러리(.box4)
    
    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by HanEunYeong</small>';
			}
		}
	});
    
    //top버튼
    $('.top').click(function(){
        
        $('html,body').animate({
            scrollTop:0
            
        });
        
    });
    
    
    //click 이벤트
     $('#s1 header .header_wrap nav ul li a').click(function(e){
       e.preventDefault();
        $('header nav ul li a').removeClass('active');
        $(this).addClass('active');
        
        var navAttr=$(this).attr('href');
        $('html,body').animate({
            'scrollTop':$(navAttr).offset().top
        });
    
    
});
    
    //window 스크롤 이벤트 설정
    $(window).scroll(function(){
        
        //윈도우 화면 맨 윗 부분 위치값
        var scrollTop=$(window).scrollTop();
        
        
        //section영역을 section변수에 저장
        $sec.each(function(){
            //현재 section의 id속성값을 변수에 저장
            var secId=$(this).attr('id');
            
            //section의 처음 시작 부분의 위치값을 divTop변수에 저장
            var divTop=$(this).offset().top;
            
            
            //만약 윈도우의 top위치값 보다 section의 top-100값이 작아지면 
            if(scrollTop > divTop-100){
                
                //section의 자식 객체div를 찾아서 active에 추가하기
                $(this).find('div').addClass('active');
                
                $('nav ul li a').removeClass('active');
                $('nav ul li').find('a[href="#'+secId+'"]').addClass('active');
                
                
            }
                     });
    })
   
    
});







