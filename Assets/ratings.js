// The entire script waits for the page's content to fully load before executing, ensuring all elements it needs to enteract with are available.
document.addEventListener("DOMContentLoaded", function() {
    var imageElements = document.querySelectorAll('.thumbnail');

    imageElements.forEach(function(imageElement) {
        var movieRatings = imageElement.nextElementSibling.querySelector('.movieRatings');

        imageElement.addEventListener('mouseover', function() { // listens for mouse over to fetch the movie ratings based on the movies IMDb ID and then displays them in the element "movieRatings"
            var imdbId = imageElement.getAttribute('data-imdb-id');
            fetchMovieRatingsById(imdbId, movieRatings);
        });

        imageElement.addEventListener('mouseout', function() { // when the user moves the mouse away from the thumbnailit clears the displayed ratings
            movieRatings.innerHTML = "";
        });
    });

    function fetchMovieRatingsById(imdbId, ratingsElement) { // takes the imdb ID and a dom element to display the ratings. It constructs the URL to query the OMDb  api using the imdb ID and an API key.
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

//This code enhances the user interface by providing immediate, interactive feedback when exploring movie thumbnails, offering a dynamic way to access and display movie ratings without navigating away from the current page.