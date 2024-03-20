/*function fetchMovieDetails() {
    const apiKey = "b293b774"; // Use your actual API key here
    
    const url = `http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Movie Details:", data);
            // You can manipulate the DOM here to display data on the webpage.
            // For example, display the movie title:
            // document.body.innerHTML += `<h1>${data.Title}</h1>`;
        })
        .catch(error => {
            console.error("Fetching movie details failed:", error);
        });
        
        // Get all movie elements
        var movieTitles = document.querySelectorAll(".movieTitle");
        var movieRatings = document.querySelectorAll(".movieRating");
        
        // Add click event listener to each movie title
        movieTitles.forEach(function(movieTitle, index) {
            movieTitle.onclick = function() {
                // Toggle the display of the corresponding movie rating
                if (movieRatings[index].style.display === "none") {
                    movieRatings[index].style.display = "block";
                } else {
                    movieRatings[index].style.display = "none";
                }
            };
        });   
    };
    document.addEventListener("DOMContentLoaded", function() {
    // This function is called after the document is fully loaded
    var imageElement = document.getElementById('thumbnail');
    imageElement.addEventListener('mouseover', function(){
        var movieTitle = imageElement.alt; // Get the movie title from the 'alt' attribute
            
        fetchMovieRatingsByTitle(movieTitle); // Call the function to fetch movie ratings by title
        })
    });
    
    function fetchMovieRatingsByTitle(title) {
    const apiKey = "b293b774"; 
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Ratings:", data.Ratings);
            displayRatings(data.Ratings);
        })
        .catch(error => {
            console.error("Fetching movie ratings failed:", error);
        });
    }

    function displayRatings(ratings) {
    if (ratings.length > 0) {
        const ratingsContainer = document.createElement('div');
        ratings.forEach(rating => {
            const ratingElement = document.createElement('p');
            ratingElement.textContent = `${rating.Source}: ${rating.Value}`;
            ratingsContainer.appendChild(ratingElement);
        });
        document.body.appendChild(ratingsContainer);
    } else {
        console.log("No ratings available for this movie.");
    }
}

// Example usage
//fetchMovieRatingsByTitle("Ironman");
*/
/*document.addEventListener("DOMContentLoaded", function() {
    var imageElement = document.getElementById('thumbnail');
    var movieRatings = document.getElementById('movieRatings');

    imageElement.addEventListener('mouseover', function() {
        var imdbId = imageElement.getAttribute('data-imdb-id'); // Assuming you have imdbId in data attribute
        fetchMovieRatingsById(imdbId, movieRatings); // Call the function to fetch movie ratings by IMDb ID
    });

        // Mouseout event to hide ratings
        imageElement.addEventListener('mouseout', function() {
            // Clear the ratings display or hide it
            movieRatings.innerHTML = ""; // This will clear the content
            // Or, to hide the element, you can do:
            // movieRatings.style.display = 'none';
        });

    function fetchMovieRatingsById(imdbId, ratingsElement) {
        const apiKey = "b293b774"; // Use your actual API key here
        const url = `https://www.omdbapi.com/?i=${encodeURIComponent(imdbId)}&apikey=${apiKey}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Ratings:", data.Ratings);
                displayRatings(data.Ratings, ratingsElement);
            })
            .catch(error => {
                console.error("Fetching movie ratings failed:", error);
            });
    }

    function displayRatings(ratings, ratingsElement) {
        if (ratings && ratings.length > 0) {
            const ratingsHTML = ratings.map(rating => `${rating.Source}: ${rating.Value}`).join('<br>');
            ratingsElement.innerHTML = ratingsHTML;
        } else {
            console.log("No ratings available for this movie.");
            ratingsElement.innerHTML = "No ratings available.";
        }
    }
}); */
document.addEventListener("DOMContentLoaded", function() {
    var imageElements = document.querySelectorAll('.thumbnail');

    imageElements.forEach(function(imageElement) {
        var movieRatings = imageElement.nextElementSibling.querySelector('.movieRatings');

        imageElement.addEventListener('mouseover', function() {
            var imdbId = imageElement.getAttribute('data-imdb-id');
            fetchMovieRatingsById(imdbId, movieRatings);
        });

        imageElement.addEventListener('mouseout', function() {
            movieRatings.innerHTML = "";
        });
    });

    function fetchMovieRatingsById(imdbId, ratingsElement) {
        const apiKey = "b293b774";
        const url = `https://www.omdbapi.com/?i=${encodeURIComponent(imdbId)}&apikey=${apiKey}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Ratings:", data.Ratings);
                displayRatings(data.Ratings, ratingsElement);
            })
            .catch(error => {
                console.error("Fetching movie ratings failed:", error);
            });
    }

    function displayRatings(ratings, ratingsElement) {
        if (ratings && ratings.length > 0) {
            const ratingsHTML = ratings.map(rating => `${rating.Source}: ${rating.Value}`).join('<br>');
            ratingsElement.innerHTML = ratingsHTML;
        } else {
            console.log("No ratings available for this movie.");
            ratingsElement.innerHTML = "No ratings available.";
        }
    }
});