$(document).on("ready", function() {




  var giphyUrl = "https://api.giphy.com/v1/gifs/search?q="

  var key = 'OPUA1huhI0ubJoz05mwVGjNzW27Rfnnm'

  $('form').on('submit', function(e) {
    e.preventDefault();
    console.log(e);
    $.ajax({
      method: 'GET',
      url: giphyUrl + $('input').val() + '\&api_key=' + key + '&limit=25',
      success: function(response) {
        console.log(response);
        $.ajax({
          type: "POST",
          url: 'https://giphy.com/gifs/' + $('.data').siblings(),
          data: $("form").serialize(),
        });



      }
    })
  })

});

//

// success: function (msg) {
//   function onSuccess(json) {
// 	$("div").append("<h1>"+json.title+"</h1>");
// }
//
// function onError(xhr, status, errorThrown) {
// 	alert("Sorry, there was a problem!");
// 	console.log("Error: " + errorThrown);
// 	console.log("Status: " + status);
// 	console.dir(xhr);
// }





// I am getting $response here as ajax response.
//alert(msg);

// Here I want to check whether response is in array format or not. if it is in array format, I want to extract msg here and want to use response array values.
//     }
// });
//       var tempInKelvin = response.main.temp;
//
//       var tempInF = Math.floor(((9/5) * (tempInKelvin - 273)) + 32);
//
//       $('h2').text('It is ' + tempInF + ' outside!');
//     }
//   })
// })
//
//
//
// $.ajax({

// What kind of request
// 	method: "GET",
//
// 	// The URL for the request
// 	url: "http://api.api.com/search",
//
// 	// The data to send aka query parameters
// 	data: $("form").serialize(),
//
// 	// Code to run if the request succeeds;
// 	// the response is passed to the function
// 	success: onSuccess,
//
// 	// Code to run if the request fails; the raw request and
// 	// status codes are passed to the function
// 	error: onError
// });
//
// function onSuccess(json) {
// 	$("div").append("<h1>"+json.title+"</h1>");
// }
//
// function onError(xhr, status, errorThrown) {
// 	alert("Sorry, there was a problem!");
// 	console.log("Error: " + errorThrown);
// 	console.log("Status: " + status);
// 	console.dir(xhr);
// }


// Your goal is to integrate with the Giphy API.
//
// https://developers.giphy.com/docs/
//
// Basic Requirements:
//
// A user can see the top 25 gifs (on page load)
// A user can search for gifs, using the input field
// Super Bonus: A user can "load more" gifs

// <!DOCTYPE html>
// <html lang="en">
// 	<head>
//     <meta charset="utf-8">
// 		<!-- set viewport to device width to allow responsiveness -->
// 		<meta name="viewport" content="width=device-width, initial-scale=1">
//
// 		<!-- Bootstrap CDN -->
// 		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
//
// 		<!-- Custom CSS -->
// 		<link rfel="stylesheet" href="styles/styles.css">
//
//     <!-- JS -->
// 		<script src="http://code.jquery.com/jquery-2.2.2.min.js"></script>
//     <script src="scripts/app.js"></script>
//
// 		<title>Giffaw</title>
//
// 	</head>
// 	<body>
// 		<div class="container">
// 			<h1 class="text-center">Giffaw</h1>
// 			<div class="row">
// 				<div class="col-sm-4">
// 					<form class="form-inline">
// 						<label>Search Gifs</label>
// 						<input type="text" class="form-control gif-input" name="q" value="cats" placeholder="search gifs">
// 						<input type="hidden" name="api_key" value="dc6zaTOxFJmzC">
// 						<input type="submit" value="Go!" class="btn btn-primary">
// 					</form>
// 				</div>
// 				<div class="col-sm-8">
// 					<div class="gif-gallery"></div>
// 				</div>
// 			</div>
// 		</div>
// 	</body>
// </html>
