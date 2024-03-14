// 4 API calls two for movies and youtube on page load, two for movies and youtube for searching, 
// one for youtube videos that respond to search, one for youtube videos on load
// 4 fetches

// var exampleDataReturn = {
//     title: "Iron Man",
//     rating: "9.6",
//     length: "152"
// }

// fetch("moviedb/marvel/ironman")
// .then(response => response.json())
// .then(movieData =>{
    
//     console.log(movieData)
//     console.log(movieData.title, movieData.rating, movieData.length)

//     var movieTitle =  document.createElement("h2")
//     movieTitle.textContent = movieData.title


//     card.append(movieTitle)
// })
// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
const apiKey = 'AIzaSyB_Q_N5U2Hnsr2IEO-TbhaG3or0ya7nJao';
const maxResults = 1; // Number of videos to display

async function fetchVideos() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=${maxResults}&q=cats`);
        const data = await response.json();
        renderVideos(data.items);
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
}

function renderVideos(videos) {
    const videosContainer = document.getElementById('videos');
    videos.forEach(video => {
        const videoElement = document.createElement('iframe');
        videoElement.src = `https://www.youtube.com/embed/${video.id.videoId}`;
        videoElement.width = '560';
        videoElement.height = '315';
        videoElement.title = video.snippet.title;
        videoElement.frameBorder = '0';
        videosContainer.appendChild(videoElement);
    });
}

fetchVideos();