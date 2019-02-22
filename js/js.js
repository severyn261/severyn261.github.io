  $('.sl__content#first').slick({
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	speed:500,
  	infinite:false,
    customPaging:true,
    swipeToSlide:true,
    nextArrow: '<div class="nextBut"><i class="fas fa-chevron-right fa-2x"></i></div>',
    prevArrow: '<div class="prevBut"><i class="fas fa-chevron-left fa-2x"></i></div>',
  	appendArrows:$('.arrowsSlick#firstBut'),
  	 responsive: [
 {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 479,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    }
  ]
  });   
    $('.sl__content#second').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:500,
    infinite:false,
    customPaging:true,
    swipeToSlide:true,
    nextArrow: '<div class="nextBut"><i class="fas fa-chevron-right fa-2x"></i></div>',
    prevArrow: '<div class="prevBut"><i class="fas fa-chevron-left fa-2x"></i></div>',
    appendArrows:$('.arrowsSlick#secondBut'),
    responsive: [
 {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 479,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
  });  
 $('.sl__content#third').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:500,
    infinite:false,
    customPaging:true,
    swipeToSlide:true,
    nextArrow: '<div class="nextBut"><i class="fas fa-chevron-right fa-2x"></i></div>',
    prevArrow: '<div class="prevBut"><i class="fas fa-chevron-left fa-2x"></i></div>',
    appendArrows:$('.arrowsSlick#thirdBut'),
    responsive: [
 {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 479,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
  });
 $('.sl__content#fourth').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:500,
    infinite:false,
    customPaging:true,
    swipeToSlide:true,
    nextArrow: '<div class="nextBut"><i class="fas fa-chevron-right fa-2x"></i></div>',
    prevArrow: '<div class="prevBut"><i class="fas fa-chevron-left fa-2x"></i></div>',
    appendArrows:$('.arrowsSlick#fourthBut'),
    responsive: [
 {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 479,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
  });
 $('.sl__content#fifth').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:500,
    infinite:false,
    customPaging:true,
    swipeToSlide:true,
    nextArrow: '<div class="nextBut"><i class="fas fa-chevron-right fa-2x"></i></div>',
    prevArrow: '<div class="prevBut"><i class="fas fa-chevron-left fa-2x"></i></div>',
    appendArrows:$('.arrowsSlick#fifth'),
    responsive: [
 {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 479,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
  });  


if ($(window).width() < 769) {
   var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
else{
  // $("button").removeClass("")  в процесі розробки
}
