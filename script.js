console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/Spotify-Clone/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Warriyo - Mortals ", filePath: "/Spotify-Clone/songs/1.mp3", coverPath: "/Spotify-Clone/covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "/Spotify-Clone/songs/2.mp3", coverPath: "/Spotify-Clone/covers/2.jpg" },
    { songName: "DEAF KEV - Invincible -320k", filePath: "/Spotify-Clone/songs/3.mp3", coverPath: "/Spotify-Clone/covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart ", filePath: "/Spotify-Clone/songs/4.mp3", coverPath: "/Spotify-Clone/covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning", filePath: "/Spotify-Clone/songs/5.mp3", coverPath: "/Spotify-Clone/covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "/Spotify-Clone/songs/2.mp3", coverPath: "/Spotify-Clone/covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "/Spotify-Clone/songs/2.mp3", coverPath: "/Spotify-Clone/covers/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "/Spotify-Clone/songs/2.mp3", coverPath: "/Spotify-Clone/covers/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "/Spotify-Clone/songs/2.mp3", coverPath: "/Spotify-Clone/covers/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "/Spotify-Clone/songs/4.mp3", coverPath: "/Spotify-Clone/covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById(songIndex).classList.add("fa-pause-circle");
        document.getElementById(songIndex).classList.remove("fa-play-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        document.getElementById(songIndex).classList.add("fa-play-circle");
        document.getElementById(songIndex).classList.remove("fa-pause-circle");
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/Spotify-Clone/songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    makeAllPlays();
    document.getElementById(songIndex).classList.add("fa-pause-circle");
    document.getElementById(songIndex).classList.remove("fa-play-circle");
    audioElement.src = `/Spotify-Clone/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    makeAllPlays();
    document.getElementById(songIndex).classList.add("fa-pause-circle");
    document.getElementById(songIndex).classList.remove("fa-play-circle");
    audioElement.src = `/Spotify-Clone/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
//when user clicks on somg name then a click function should be triggered

/* This code is selecting all elements with the class "songName" using the `querySelectorAll` method
and storing them in the variable `a`. It then loops through each element in `a` using a for loop and
adds a click event listener to each element. The event listener calls the `callme` function with the
index `i` as an argument. However, the `callme` function is currently empty and does not perform any
actions. */
Array.from(document.querySelectorAll(".songName")).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        songIndex= parseInt(e.target.id);
        songIndex-=10;
        makeAllPlays();
        document.getElementById(songIndex).classList.add("fa-pause-circle");
        document.getElementById(songIndex).classList.remove("fa-play-circle");
        audioElement.src = `/Spotify-Clone/songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })



})
