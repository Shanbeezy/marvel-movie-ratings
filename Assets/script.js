// 4 API calls two for movies and youtube on page load, two for movies and youtube for searching, 
// one for youtube videos that respond to search, one for youtube videos on load
// 4 fetches

// Video Ids: 
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




const apiKey = 'AIzaSyB_Q_N5U2Hnsr2IEO-TbhaG3or0ya7nJao';
const videoId = '8ugaeA-nMTc';

async function fetchVideoById() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`);
        const data = await response.json();
        renderVideo(data.items[0]);
    } catch (error) {
        console.error('Error fetching video:', error);
    }
}

function renderVideo(video) {
    const videoContainer = document.getElementById('video');
    const videoElement = document.createElement('iframe');
    videoElement.src = `https://www.youtube.com/embed/${video.id}`;
    videoElement.width = '560';
    videoElement.height = '315';
    videoElement.title = video.snippet.title;
    videoElement.frameBorder = '0';
    videoContainer.appendChild(videoElement);
}

fetchVideoById();






