

document.addEventListener('DOMContentLoaded', function() {
  $('#preloader').fadeOut(800);
}, false);

$(document).ready(function () {

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  $.getJSON("assets/js/data.json", function (data) {
    // shuffle(data);
    Object.entries(data).forEach(([key, value]) => {
      $('#image-gallery .row').append(`<div class="all ${value.cls} image active"z>
          <div class="img-wrapper">
          <a href="assets/images/portfolio/${value.image}.png" data-title="${value.title}" data-category="${value.category}" data-tools="${value.tools}"><img class="img-responsive" src="assets/images/portfolio/${value.image}.png" ></a>
          <div class="img-overlay">
            <span>${value.title}</span>
            <h5>${value.category}</h5>
          </div>
          </div>
      </div>`);
    });

    // Lightbox
    var $overlay = $('<div id="overlay"></div>');
    var $image = $('<img class="listItem">');
    var $logo = $('<div class="logo"></div>')
    var $title = $('<div class="project-info"><h4 class="title">Protectt.ai</h4> <h5>Category: <span class="category">Logo</span></h5> <h5>Tools Used: <span class="tools">Illustrator</span></h5></div>');
    var $prevButton = $('<div id="prevButton"><i class="lni lni-chevron-left"></i></div>');
    var $nextButton = $('<div id="nextButton"><i class="lni lni-chevron-right"></i></div>');
    var $exitButton = $('<div id="exitButton"><i class="lni lni-close"></i></div>');

    // Add overlay
    $overlay.append($logo).append($title).append($image).prepend($prevButton).append($nextButton).append($exitButton);
    $("#gallery").append($overlay);

    // Hide overlay on default
    $overlay.removeClass('active');

    // When an image is clicked
    $(".img-overlay").click(function (event) {
      // Prevents default behavior
      event.preventDefault();
      // Adds href attribute to variable
      var imageLocation = $(this).prev().attr("href");

      var imageTitle = $(this).prev().attr("data-title");
      var imageCategory = $(this).prev().attr("data-category");
      var toolsUsed = $(this).prev().attr("data-tools");

      $('.project-info').find('.title').text(imageTitle);
      $('.project-info').find('.category').text(imageCategory);
      $('.project-info').find('.tools').text(toolsUsed);

      // Add the image src to $image
      $image.attr("src", imageLocation);
      // Fade in the overlay
      $overlay.addClass("active");
    });

    // When the overlay is clicked
    $overlay.click(function () {
      // Fade out the overlay
      $(this).removeClass("active");
    });

    // When next button is clicked
    $nextButton.click(function (event) {
      // Hide the current image
      $("#overlay img").hide();
      // Overlay image location
      var $currentImgSrc = $("#overlay img").attr("src");

      // Image with matching location of the overlay image
      var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');

      // Finds the next image
      var $nextImg = $($currentImg.closest(".image").next().find("img"));
      var $nextImgInfo = $($currentImg.closest(".image").next().find("a"));

      // All of the images in the gallery
      var $images = $("#image-gallery img");
      // If there is a next image
      if ($nextImg.length > 0) {
        // Fade in the next image
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        $("#overlay .title").text($nextImgInfo.attr('data-title'));
        $("#overlay .category").text($nextImgInfo.attr('data-category'));
        $("#overlay .tools").text($nextImgInfo.attr('data-tools'));

      } else {
        // Otherwise fade in the first image
        $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
        $("#overlay .title").text($($images[0]).parent('a').attr('data-title'));
        $("#overlay .category").text($($images[0]).parent('a').attr('data-category'));
        $("#overlay .tools").text($($images[0]).parent('a').attr('data-tools'));
      }
      // Prevents overlay from being hidden
      event.stopPropagation();
    });

    // When previous button is clicked
    $prevButton.click(function (event) {
      // Hide the current image
      $("#overlay img").hide();
      // Overlay image location
      var $currentImgSrc = $("#overlay img").attr("src");
      // Image with matching location of the overlay image
      var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
      // Finds the next image
      var $prevImg = $($currentImg.closest(".image").prev().find("img"));
      var $prevImgInfo = $($currentImg.closest(".image").prev().find("a"));
      // Fade in the next image
      $("#overlay img").attr("src", $prevImg.attr("src")).fadeIn(800);
      $("#overlay .title").text($prevImgInfo.attr('data-title'));
      $("#overlay .category").text($prevImgInfo.attr('data-category'));
      $("#overlay .tools").text($prevImgInfo.attr('data-tools'));
      // Prevents overlay from being hidden
      event.stopPropagation();
    });

    // When the exit button is clicked
    $exitButton.click(function () {
      // Fade out the overlay
      $("#overlay").removeClass("active");
    });

  });

  $('.profile-header .logo img').on('mouseover', function(){
    $(this).attr('src', 'assets/images/logo_hover.png');
  })


  $('.filter span').click(function () {
    let currentList = $(this).attr('data-item');
    $('.filter span').removeClass('active');
    $(this).addClass('active');
    $('#image-gallery').find('.image').removeClass('active');
    setTimeout(function () {
      $('#image-gallery').find('.' + currentList).addClass('active');
    }, 150)

  });

  $('.drawer-icon').click(function () {
    $(this).parent('#bottom-drawer').toggleClass('active');
  });

  $('#bottom-drawer ul li').click(function () {
    $('#bottom-drawer ul li').removeClass('active');
    $(this).addClass('active');
  })

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    var currHeight = $(window).height() - 1;

    if (height > currHeight) {
      $('.menu .header-text').removeClass('active');
      $('.menu .header-text:nth-child(2)').addClass('active');

      $('#bottom-drawer ul li').removeClass('active');
      $('#bottom-drawer ul li:nth-child(2)').addClass('active');

      $('.profile-header').css('background', 'rgba(255, 255, 255, 1)');
    } else {
      $('.menu .header-text').removeClass('active');
      $('.menu .header-text:nth-child(1)').addClass('active');

      $('#bottom-drawer ul li').removeClass('active');
      $('#bottom-drawer ul li:nth-child(1)').addClass('active');
      $('.profile-header').css('background', 'rgba(255, 255, 255, 0.75)');
    }
  });

  $('.menu .header-text').click(function () {
    $('.menu .header-text').removeClass('active');
    setTimeout(function () {
      $(this).addClass('active');
    }, 1000)
  });

  $(".scroller").click(function () {
    let scrollTarget = $(this).attr('data-scroll');
    $('html, body').animate({
      scrollTop: $(`#${scrollTarget}`).offset().top
    }, 500);
  });

});