$(document).ready(function () {

  //loadMore
  $(".accordion-item").slice(0, 4).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".accordion-item:hidden").slice(0, 4).slideDown();
    if ($(".accordion-item:hidden").length == 0) {
      // $("#loadMore").text("No Content").addClass("noContent");
      $("#loadMore .btn_text").text("No Content");
      $("#loadMore").addClass("disabled");
    }
  });

 //MOdal Popup 
  $('#myModal').on('shown.bs.modal', function () {
    $('#video')[0].play();
  })
  $('#myModal').on('hidden.bs.modal', function () {
    $('#video')[0].pause();
  })

// set maxHeight of the sliders
  // var maxHeight = 0;

  // $(".maxHeight").each(function(){
  //    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  // });
  
  // $(".maxHeight").height(maxHeight);


  function reveal() {
    var reveals = document.querySelectorAll(".animation");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);


  function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  //OwlCarouselConfigs

  $("#owl-carousel-demo, #owl-carousel-reusable").each(function () {
    $(this).owlCarousel({
      loop: true,
      nav: true,
      responsive: {
        0: {
          items: 1.2
        },
        600: {
          items: 1.5
        },
        1000: {
          items: 1
        }
      }
    });
  })

  $("#testimonial").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
