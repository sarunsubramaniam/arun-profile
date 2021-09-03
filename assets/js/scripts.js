$(document).ready(function() {
    let portfolioItem = [
      {
        "image": "protectt",
        "cls": "logo",
        "title": "Protectt.ai",
        "category": "Logo",
      },
      {
        "image": "dividend",
        "cls": "logo",
        "title": "Dividend",
        "category": "Logo",
      },
      {
        "image": "shopr",
        "cls": "logo",
        "title": "CoShopr",
        "category": "Logo",
      },
      {
        "image": "taliaferro",
        "cls": "logo",
        "title": "Taliaferro",
        "category": "Logo",
      },
      {
        "image": "arithmetic-lab",
        "cls": "logo",
        "title": "Arithmetic Lab",
        "category": "Logo",
      },
      {
        "image": "lead-faucet",
        "cls": "logo",
        "title": "Lead Faucet",
        "category": "Logo",
      },
      {
        "image": "two-doors-down",
        "cls": "logo",
        "title": "Two Doors Down",
        "category": "Logo",
      },
      {
        "image": "social-wallet",
        "cls": "logo",
        "title": "Social Wallet",
        "category": "Logo",
      },
      {
        "image": "all-natural-life",
        "cls": "logo",
        "title": "All Natural Wallet",
        "category": "Logo",
      },
      {
        "image": "wolf-head",
        "cls": "logo",
        "title": "Wolf Head",
        "category": "Logo",
      },
      {
        "image": "solvent",
        "cls": "logo",
        "title": "Solvent",
        "category": "Logo",
      },
      {
        "image": "daveys",
        "cls": "logo",
        "title": "Daveys",
        "category": "Logo",
      },
      {
        "image": "cantaarte",
        "cls": "logo",
        "title": "Cantaarte",
        "category": "Logo",
      },
      {
        "image": "payn",
        "cls": "logo",
        "title": "PAYN",
        "category": "Logo",
      },
      {
        "image": "spiralverse",
        "cls": "logo",
        "title": "Spiral Verse",
        "category": "Logo",
      },
      {
        "image": "meerea",
        "cls": "logo",
        "title": "Meerea",
        "category": "Logo",
      },
      {
        "image": "digital-art-jobs",
        "cls": "digital",
        "title": "Steve Jobs",
        "category": "Digital Art",
      },
      {
        "image": "scribble-art-dhanush",
        "cls": "digital",
        "title": "Dhanush",
        "category": "Digital Art",
      },
      {
        "image": "digital-art-nikhil",
        "cls": "digital",
        "title": "Kids' Digital Painting",
        "category": "Digital Art",
      },
      {
        "image": "digital-art-kingfisher",
        "cls": "digital",
        "title": "Kingfisher",
        "category": "Digital Art",
      },
      {
        "image": "digital-art-landscape",
        "cls": "digital",
        "title": "Landscape",
        "category": "Digital Art",
      },
      {
        "image": "poly-art-lionking",
        "cls": "digital",
        "title": "Lion King Poly Art",
        "category": "Digital Art",
      },
      {
        "image": "charlie-chaplin",
        "cls": "sketch",
        "title": "Charlie Chaplin",
        "category": "Sketch",
      },
      {
        "image": "sachin",
        "cls": "sketch",
        "title": "Sachin Tendulkar",
        "category": "Sketch",
      },
      {
        "image": "nikhilesh",
        "cls": "sketch",
        "title": "Kids' Portrait",
        "category": "Sketch",
      },
      {
        "image": "rishanth",
        "cls": "sketch",
        "title": "Kids' Portrait",
        "category": "Sketch",
      },
      {
        "image": "kid-1",
        "cls": "sketch",
        "title": "Kids' Portrait",
        "category": "Sketch",
      },
      {
        "image": "rajinikanth",
        "cls": "sketch",
        "title": "Rajinikanth",
        "category": "Sketch",
      },
      {
        "image": "kohli",
        "cls": "sketch",
        "title": "Virat Kohli",
        "category": "Sketch",
      },
      {
        "image": "sketch-steve-jobs",
        "cls": "sketch",
        "title": "Steve Jobs",
        "category": "Sketch",
      },
      {
        "image": "socially",
        "cls": "prototype",
        "title": "Socially",
        "category": "Prototype",
      },
      {
        "image": "socially-login",
        "cls": "prototype",
        "title": "Socially",
        "category": "Prototype",
      },
      {
        "image": "messenger",
        "cls": "prototype",
        "title": "Messenger",
        "category": "Prototype",
      }
    ];

    Object.entries(portfolioItem).forEach(([key, value]) => {
      $('#image-gallery .row').append(`<div class="all ${value.cls} image active">
          <div class="img-wrapper">
          <a href="assets/images/portfolio/${value.image}.png"><img src="assets/images/portfolio/${value.image}.png" class="img-responsive"></a>
          <div class="img-overlay">
            <span>${value.title}</span>
            <h5>${value.category}</h5>
          </div>
          </div>
      </div>`);
    });

    $('.filter span').click(function(){
        let currentList = $(this).attr('data-item');
        $('.filter span').removeClass('active');
        $(this).addClass('active');
        $('#image-gallery').find('.image').removeClass('active');
        $('#image-gallery').find('.' + currentList).addClass('active');
    });

    $('.drawer-icon').click(function(){
      $(this).parent('#bottom-drawer').toggleClass('active');
    });

    $('#bottom-drawer ul li').click(function(){
      $('#bottom-drawer ul li').removeClass('active');
      $(this).addClass('active');
    })

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var currHeight = $(window).height() - 1;
    
        if(height  > currHeight) {
            $('.menu .header-text').removeClass('active');
            $('.menu .header-text:nth-child(2)').addClass('active');

            $('#bottom-drawer ul li').removeClass('active');
            $('#bottom-drawer ul li:nth-child(2)').addClass('active');

            $('.profile-header').css('background', 'rgba(255, 255, 255, 1)');
        }
        else {
            $('.menu .header-text').removeClass('active');
            $('.menu .header-text:nth-child(1)').addClass('active');

            $('#bottom-drawer ul li').removeClass('active');
            $('#bottom-drawer ul li:nth-child(1)').addClass('active');
            $('.profile-header').css('background', 'rgba(255, 255, 255, 0.75)');
        }
    });

    $('.menu .header-text').click(function(){
        $('.menu .header-text').removeClass('active');
        setTimeout(function(){
            $(this).addClass('active');
        }, 1000)  
    });

    // Lightbox
    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $prevButton = $('<div id="prevButton"><i class="lni lni-chevron-left"></i></div>');
    var $nextButton = $('<div id="nextButton"><i class="lni lni-chevron-right"></i></div>');
    var $exitButton = $('<div id="exitButton"><i class="lni lni-close"></i></div>');

    // Add overlay
    $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
    $("#gallery").append($overlay);

    // Hide overlay on default
    $overlay.removeClass('active');

    // When an image is clicked
    $(".img-overlay").click(function(event) {
      // Prevents default behavior
      event.preventDefault();
      // Adds href attribute to variable
      var imageLocation = $(this).prev().attr("href");
      // Add the image src to $image
      $image.attr("src", imageLocation);
      // Fade in the overlay
      $overlay.addClass("active");
    });

    // When the overlay is clicked
    $overlay.click(function() {
      // Fade out the overlay
      $(this).removeClass("active");
    });

    // When next button is clicked
    $nextButton.click(function(event) {
      // Hide the current image
      $("#overlay img").hide();
      // Overlay image location
      var $currentImgSrc = $("#overlay img").attr("src");
      // Image with matching location of the overlay image
      var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
      // Finds the next image
      var $nextImg = $($currentImg.closest(".image").next().find("img"));
      // All of the images in the gallery
      var $images = $("#image-gallery img");
      // If there is a next image
      if ($nextImg.length > 0) { 
        // Fade in the next image
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
      } else {
        // Otherwise fade in the first image
        $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
      }
      // Prevents overlay from being hidden
      event.stopPropagation();
    });

    // When previous button is clicked
    $prevButton.click(function(event) {
      // Hide the current image
      $("#overlay img").hide();
      // Overlay image location
      var $currentImgSrc = $("#overlay img").attr("src");
      // Image with matching location of the overlay image
      var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
      // Finds the next image
      var $nextImg = $($currentImg.closest(".image").prev().find("img"));
      // Fade in the next image
      $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
      // Prevents overlay from being hidden
      event.stopPropagation();
    });

    // When the exit button is clicked
    $exitButton.click(function() {
      // Fade out the overlay
      $("#overlay").removeClass("active");
    });

    $(".scroller").click(function() {
      let scrollTarget = $(this).attr('data-scroll');
        $('html, body').animate({
            scrollTop: $(`#${scrollTarget}`).offset().top
        }, 500);
    });

  });