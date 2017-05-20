var buttonTopics =['bonsai', 'mars', 'wine', 'dinosaur', 'pokemon', 'spiders', 'RuPaul', 'pugs']




for (var i=0; i < buttonTopics.length; i++) {
var buttonElem = $("<button>");


buttonElem.addClass("buttons")
buttonElem.attr("id", buttonTopics[i]);
buttonElem.text(buttonTopics[i]);


$("#buttons").append(buttonElem);


}





$("#submit").on("click", function(event) {
	event.preventDefault();


	var userInput = $("#input").val().trim();
	console.log(userInput);
	buttonTopics.push(userInput);

	if (userInput !== "") {
	var newButton = $("<button>")
	newButton.addClass("buttons")
	newButton.attr("id", userInput);
	newButton.text(userInput);
	$("#buttons").append(newButton);
}
})


$('body').on('click', 'button', function() {
// $("button").on("click", function() {
 
var giphyTopic = $(this).attr("id");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        giphyTopic + "&api_key=dc6zaTOxFJmzC&limit=10";


  $.ajax({
          url: queryURL,
          method: "GET"
        })

 .done(function(response) {

 	console.log(response);

 	var results = response.data;

for (var i = 0; i < results.length; i++) {

         
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        
              var gifDiv = $("<div class='item'>")

             
              var rating = results[i].rating;

           
              var p = $("<p>").text("Rating: " + rating);

            
              var giphImage = $("<img>");

              giphImage.attr("src", results[i].images.fixed_height_still.url);
              giphImage.attr("condition", "still");
              giphImage.attr("id", giphyTopic)
              giphImage.attr("animated-url", results[i].images.fixed_height.url);
              giphImage.attr("still-url", results[i].images.fixed_height_still.url);


              
             
              gifDiv.append(p);
              gifDiv.append(giphImage);

            
              $("#giphys").prepend(gifDiv);
                                    
}
}
                                    });
                                    });







 $("body").on("click", "img", function(){


var state = $(this).attr("condition");
console.log(state)






if (state === "still") {
  $(this).attr("src",  $(this).attr("animated-url"));
  $(this).attr("condition", "animate");
}else {
  $(this).attr("src", $(this).attr("still-url"));
  $(this).attr("condition", "still");
};

});














