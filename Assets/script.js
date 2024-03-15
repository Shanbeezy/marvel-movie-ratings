(function fetchMovieDetails() {
    const apiKey = "b293b774"; // Use your actual API key here
    const imdbId = "tt3896198"; // IMDb ID for "Guardians of the Galaxy Vol. 2"
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
})();

function fetchMovieRatingsByTitle(title) {
    const apiKey = "b293b774"; // Use your actual API key here
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
fetchMovieRatingsByTitle("Ironman");