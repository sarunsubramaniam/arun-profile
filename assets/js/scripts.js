$(document).ready(function() {
    let portfolioItem = {logo: 16, sketch: 8, digital: 8, mockup: 3};

    Object.entries(portfolioItem).forEach(([key, value]) => {
        for(let i=1; i<=value; i++) {
            $('#image-gallery').append(`<div class="col-lg-2 col-md-6 col-sm-6 col-xs-12 all ${key} image active">
                <div class="img-wrapper">
                <a href="assets/images/portfolio/${key}/img-${i}.png"><img src="assets/images/portfolio/${key}/img-${i}.png" class="img-responsive"></a>
                <div class="img-overlay">
                  <i class="lni lni-magnifier"></i>
                  <span>${key == 'logo'? 'Logo' : key == 'sketch' ? 'Sketch' : key == 'digital' ? 'Digital Art' : key == 'mockup' ? 'Prototype' : 'Micro Interaction'}</span>
                </div>
                </div>
            </div>`);
        }
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
    $overlay.hide();

    // When an image is clicked
    $(".img-overlay").click(function(event) {
      // Prevents default behavior
      event.preventDefault();
      // Adds href attribute to variable
      var imageLocation = $(this).prev().attr("href");
      // Add the image src to $image
      $image.attr("src", imageLocation);
      // Fade in the overlay
      $overlay.fadeIn("slow");
    });

    // When the overlay is clicked
    $overlay.click(function() {
      // Fade out the overlay
      $(this).fadeOut("slow");
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
      $("#overlay").fadeOut("slow");
    });

    $(".scroller").click(function() {
      let scrollTarget = $(this).attr('data-scroll');
        $('html, body').animate({
            scrollTop: $(`#${scrollTarget}`).offset().top
        }, 500);
    });

  });