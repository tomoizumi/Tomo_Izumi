$(window).scroll(function (){
   $('.fadeIn').each(function(){
     var elemPos = $(this).offset().top,
         scroll = $(window).scrollTop(),
         windowHeight = $(window).height();
       if (scroll > elemPos - windowHeight + (windowHeight/4)){
           $(this).addClass('scrollIn');
         }
     });
});
