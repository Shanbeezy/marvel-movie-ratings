
function getApi() {
    var requestUrl = 'https://www.mediawiki.org/w/api.php';
    fetch(requestUrl)
    .then(function (response) {
      console.log("response", response);
      return response.json();
    });
}

// then(function (data)) {
//       console.log(data);
// }

// 4 API calls two for movies and youtube on page load, two for movies and youtube for searching, 
// one for youtube videos that respond to search, one for youtube videos on load
// 4 fetches

// Video Ids*****************
// Iron man 1 : 8ugaeA-nMTc
// The Incredible Hulk : xbqNb2PFKKA
// Iron man 2 : wKtcmiifycU 
// Thor : JOddp-nlNvQ
// Captain America The First Avenger : JerVrbLldXw
// The Avengers : eOrNdBpGMv8
// Iron Man 3 : oYSD2VQagc4
// Thor The Dark World : npvJ9FTgZbM
// Captain America The Winter Soldier : tbayiPxkUMM
// Guardians of the Galaxy : d96cjJhvlMA
// Avengers Age of Ultron : tmeOjFno6Do
// Ant-Man : pWdKf3MneyI
// Captain America Civil War : FkTybqcX-Yo
// Doctor Strange : h7gvFravm4A
// Guardians of the Galaxy Vol .2 : dW1BIid8Osg
// Spider-man Homecoming : rk-dF1lIbIg
// Thor Ragnarok : v7MGUNV8MxU
// Black Panther : xjDjIWPwcPU
// Avengers Ininifty War : 6ZfuNTqbHE8
// Antman and the Wasp : 8_rTIAOohas
// Captain Marvel : Z1BCujX3pw8
// Avengers Endgame : TcMBFSGVi1c
// Spider-man Far From Home : Nt9L1jCKGnE
// video Ids********************
 
const apiKey = 'AIzaSyB_Q_N5U2Hnsr2IEO-TbhaG3or0ya7nJao';
const videoIds = ['8ugaeA-nMTc','xbqNb2PFKKA','wKtcmiifycU','JOddp-nlNvQ','JerVrbLldXw',
  'eOrNdBpGMv8','oYSD2VQagc4','npvJ9FTgZbM','tbayiPxkUMM','d96cjJhvlMA','tmeOjFno6Do','pWdKf3MneyI',
  'FkTybqcX-Yo','h7gvFravm4A','dW1BIid8Osg','rk-dF1lIbIg','v7MGUNV8MxU','xjDjIWPwcPU','6ZfuNTqbHE8',
  '8_rTIAOohas','Z1BCujX3pw8','TcMBFSGVi1c','Nt9L1jCKGnE']; // Array of video IDs

async function fetchVideoById(videoId) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`);
        const data = await response.json();
        const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
        renderVideo(videoEmbedUrl);

        // Scroll to the video container
        const videoContainer = document.getElementById('video-container');
        videoContainer.scrollIntoView({ behavior: 'instant' });
    } catch (error) {
        console.error('Error fetching video:', error);
    }
}

function renderVideo(videoEmbedUrl) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `<iframe width="560" height="315" src="${videoEmbedUrl}" frameborder="0" allowfullscreen></iframe>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const imgElements = document.querySelectorAll('img#thumbnail');
    imgElements.forEach(img => {
        img.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            fetchVideoById(videoId);
        });
    });
});

document.addEventListener('click', function(event) {
    const videoContainer = document.getElementById('video-container');
    const target = event.target;

    // Check if the clicked element is outside of the video container
    if (!videoContainer.contains(target)) {
        // Close the video container
        closeVideoContainer();
    }
});

function closeVideoContainer() {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // Clear the video content
    videoContainer.classList.remove('open'); // Hide the video container
}






