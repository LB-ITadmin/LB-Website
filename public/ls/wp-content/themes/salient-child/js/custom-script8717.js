var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {
  $(".jobs-listing").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="/wp-content/themes/salient-child/images/prev.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="/wp-content/themes/salient-child/images/next.png"></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  $(".con-read-more").each(function () {
    $(this)
      .closest(".wpb_raw_code")
      .siblings(".nectar-responsive-text")
      .addClass("close");
  });

  $(".con-read-more").each(function () {
    $(this).on("click", function () {
      $(this).find("span").text() == "Read More"
        ? $(this).find("span").text("Read Less")
        : $(this).find("span").text("Read More");

      if (
        $(this)
          .closest(".wpb_raw_code")
          .siblings(".nectar-responsive-text")
          .hasClass("close")
      ) {
        $(this)
          .closest(".wpb_raw_code")
          .siblings(".nectar-responsive-text")
          .removeClass("close");
      } else {
        $(this)
          .closest(".wpb_raw_code")
          .siblings(".nectar-responsive-text")
          .addClass("close");
      }
    });
  });

  // $('.read_more_button').on('click', function(e) {
  //   e.preventDefault(); // Prevent the default anchor behavior
  //   $(this).siblings('.reduce_text').toggleClass('open'); // Toggle the 'open' class on the sibling element with class 'reduce_text'
  // });
});

jQuery(document).ready(function ($) {
  function destroyFlickityOnMobile() {
    if ($(window).width() <= 768) {
      // Mobile screen width threshold (768px or less)
      setTimeout(function () {
        $(".carousel").each(function () {
          var $carousel = $(this);

          // Check if Flickity is initialized
          if ($carousel.hasClass("flickity-enabled")) {
            $carousel.flickity("destroy"); // Destroy the Flickity slider
            $carousel.removeClass("flickity-enabled"); // Remove the enabled class to prevent reinitialization

            // Add a class to adjust the styling if needed
            $carousel.addClass("mobile-carousel-cards");
          }
        });
      }, 1000);
    }
  }

  destroyFlickityOnMobile(); // Initial check

  $(window).on("resize", function () {
    destroyFlickityOnMobile(); // Re-check on window resize
  });
});

jQuery(window).on('load', function($) {
	jQuery('a[href*="https://elfsight.com"]').hide();
});

// Keep the footer copyright year current (auto-updates each year).
jQuery(function ($) {
	var year = new Date().getFullYear();
	$(".copyright, .m-copyright, #footer-outer li, #footer-widgets li").each(function () {
		if (/©\s*Loudbound/i.test($(this).text())) {
			this.innerHTML = this.innerHTML.replace(/20\d\d/, year);
		}
	});
});
