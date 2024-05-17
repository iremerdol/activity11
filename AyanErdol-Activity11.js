$(document).ready(function() {
    $("#nav_list a").click(function(e) {
      e.preventDefault(); 
  
      var jsonFile = $(this).attr("title") + ".json"; 
 
      $("main").empty();

      $.ajax({
        url: jsonFile,
        dataType: "json",
        success: function(data) {
          var speaker = data.speakers[0];

          var image = $("<img>").attr("src", speaker.image);
          var heading = $("<h2>").html(speaker.month + "<br>" + speaker.speaker);
          var paragraph = $("<p>").text(speaker.text);

          $("main").append(image, heading, paragraph);
        },
        error: function() {
          console.log("Error loading JSON file.");
        }
      });
    });
  });
  