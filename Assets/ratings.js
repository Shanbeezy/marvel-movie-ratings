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
