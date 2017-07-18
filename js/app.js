//Create lightbox for about.png, when about is clicked.
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");

  $overlay.append($image);

  //Add Overlay
  $("body").append($overlay);

  //Capture the click event
  $("#aboutLightbox").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);

    $overlay.show();
  });

  //When overlay is clicked hide lightbox
  $overlay.click(function(){
    $overlay.hide();
  });
