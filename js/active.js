(function ($) {
  "use strict";

  var $window = $(window);

  // :: Preloader Active Code
  $window.on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  // :: Nav Active Code
  $("#classyNav").classyNav({
    stickyNav: true,
    theme: "dark",
  });

  // :: Owl Carousel Active JS
  if ($.fn.owlCarousel) {
    var welcomeSlides = $(".welcome_slides");
    welcomeSlides.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: true,
      navText: [
        "<i class='pe-7s-angle-left'</i>",
        "<i class='pe-7s-angle-right'</i>",
      ],
      dots: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
    });

    welcomeSlides.on("translate.owl.carousel", function () {
      var layer = $("[data-animation]");
      layer.each(function () {
        var anim_name = $(this).data("animation");
        $(this)
          .removeClass("animated " + anim_name)
          .css("opacity", "0");
      });
    });

    $("[data-delay]").each(function () {
      var anim_del = $(this).data("delay");
      $(this).css("animation-delay", anim_del);
    });

    $("[data-duration]").each(function () {
      var anim_dur = $(this).data("duration");
      $(this).css("animation-duration", anim_dur);
    });

    welcomeSlides.on("translated.owl.carousel", function () {
      var layer = welcomeSlides
        .find(".owl-item.active")
        .find("[data-animation]");
      layer.each(function () {
        var anim_name = $(this).data("animation");
        $(this)
          .addClass("animated " + anim_name)
          .css("opacity", "1");
      });
    });

    $(".testimonials_slider").owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      margin: 50,
      pagination:false,
      nav: true,
      navText : ["",""],
    //   navigationText: ["", ""],
      center: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });

    $(".left-side-menu-tes-slides").owlCarousel({
      items: 2,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      margin: 50,
      center: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: 2,
        },
      },
    });

    $(".partners-slides").owlCarousel({
      items: 6,
      loop: true,
      autoplay: true,
      smartSpeed: 500,
      margin: 30,
      center: true,
      dots: false,
      nav: true,
      navText : ["",""],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 4,
        },
        1200: {
          items: 6,
        },
      },
    });
  }

  // :: Counterup Active Code
  $(".counter").counterUp({
    time: 1000,
    delay: 50,
  });

  // :: ScrollUp Active
  if ($.fn.scrollUp) {
    $.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="fa fa-angle-up"></i>',
    });
  }

  // :: Countdown Active Code
  $("#clock").countdown("2026/11/10", function (event) {
    $(this).html(
      event.strftime(
        "<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>"
      )
    );
  });

  // :: Gallery Menu Style Code
  $(".portfolio-menu button.btn").on("click", function () {
    $(".portfolio-menu button.btn.btn-md").removeClass("active");
    $(this).addClass("active");
  });
    
  // :: Masonary Gallery Active Code
  
  if ($.fn.imagesLoaded) {
    

    $(".gallery_full_width_images_area").imagesLoaded(function () {
      // Filter items on button click
      

        $(".portfolio-menu").on("click", "button", function () {
        
        var filterValue = $(this).attr("data-filter");
        
        $grid.isotope({
          filter: filterValue,
        });
        });
        
        // Init Isotope
        var $grid = $(".gallery_full_width_images_area").isotope({
        itemSelector: ".portfolio_gallery_iteam",
        filter: '.control',
        percentPosition: true,
      });
    });
  }
  
  // :: onePageNav Active JS
  if ($.fn.onePageNav) {
    $("#nav").onePageNav({
      currentClass: "active",
      scrollSpeed: 1500,
      easing: "easeOutQuad",
    });
  }

  // :: Magnific-popup Video Active Code
  if ($.fn.magnificPopup) {
    $(".video_button").magnificPopup({
      disableOn: 0,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,
      fixedContentPos: false,
    });
    $(".gallery_img").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
      removalDelay: 300,
      mainClass: "mfp-fade",
      preloader: true,
    });
  }

  // :: Jarallax Active JS
  if ($.fn.jarallax) {
    $(".jarallax").jarallax({
      speed: 0.2,
    });
  }

  // :: matchHeight Active JS
  if ($.fn.matchHeight) {
    $(".item").matchHeight();
  }

  // :: Wow Active Code
  if ($window.width() > 767) {
    new WOW().init();
  }

  // :: Left Side Menu Active Code
  $(".left-arrow-btn").on("click", function () {
    $("body").toggleClass("left-side-menu-close");
  });

  // :: PreventDefault a Click
  $("a[href='#']").on("click", function ($) {
    $.preventDefault();
  });
})(jQuery);


