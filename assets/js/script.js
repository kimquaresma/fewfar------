$(document).ready(function() {
  var video = $('#videoplay')[0];
  video.play();
});

$(function(){  //로드후 실행되는 스크립트구현시 사용

  let lastScroll = 0;
  $(window).scroll(function(){
    current = $(this).scrollTop
    () //스크롤바의 시작위치
    target = $('.sc-work').offset().top;
    $('.fix').html(Math.floor(current)+'///'+target)

    if (current > lastScroll){
      $('.header-part').addClass('hide');
    } else {
      $('.header-part').removeClass('hide');
    }

    lastScroll = current
  })



}) 


gsap.from('.sc-first .content1 .first-title',{
  delay:1,
  opacity:0
})



$(document).mousemove(function(e){
  x=e.clientX;
  y=e.clientY;

  gsap.to('.cursor',{
    left:x,
    top:y
  })
})

ScrollTrigger.create({
  trigger:".content2",
  start:"0% 0%",
  end:"100% 0%",
  markers:false,
  onEnter:function(){
    $('.header').addClass('white')
  },
  onLeaveBack:function(){
    $('.header').removeClass('white')
  }
})





gsap.from('.content2 .desc',{
  scrollTrigger:{
    trigger:".content2",
    start:"0% 50%",
    end:"100% 0%",
    // markers:true,
    toggleActions:"play none none reverse"
  },
  opacity:0,
})



introTl = gsap.timeline({
  scrollTrigger:{
    trigger:".content2 .inner",
    start:"0% 100%",
    end:"100% 0%",
    // markers:true,
    scrub:0,
    onUpdate:function(self){
      val = self.progress*10;
      // gsap

      // gsap.set('.content2 .image.item2 img',{
      //   y:2590
      // },'a')

    }
  },
})

introTl.to('.content2 .image.item1 img',{
  yPercent:-100
},'a')
introTl.to('.content2 .image.item2 img',{
  yPercent:40,
},'a')
introTl.to('.content2 .image.item3 img',{
  yPercent:300,
},'a')
introTl.to('.content2 .image.item4 img',{
  yPercent:400,
},'a')





