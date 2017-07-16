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
    //Show Overlay
    //Show about.png


  //When overlay is clicked hide lightbox
  $overlay.click(function(){
    $overlay.hide();
  });


//Create lightbox or Overlay for image galleries, jQuery Watch same videos, "Preform part 4 for caption."

//Create a contact box (Reference from Class Challenge 4)
// ### Challenge 4
