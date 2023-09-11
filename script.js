console.log("Welcome to spotify")

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1 (1).mp3")
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName("songItem"))

// console.log(songItems)



let songs = [
    { songName: "Sample song 1", filePath: "songs/1 (1).mp3", coverPath: "covers/1.jpeg", duration: "00:00" },
    { songName: "Sample song 2", filePath: "songs/1 (2).mp3", coverPath: "covers/2.jpg", duration: "00:00" },
    { songName: "Sample song 3", filePath: "songs/1 (3).mp3", coverPath: "covers/3.jpeg", duration: "00:00" },
    { songName: "Sample song 4", filePath: "songs/1 (4).mp3", coverPath: "covers/4.jpeg", duration: "00:00" },
    { songName: "Sample song 5", filePath: "songs/1 (5).mp3", coverPath: "covers/5.jpeg", duration: "00:00" },
    { songName: "Sample song 6", filePath: "songs/1 (6).mp3", coverPath: "covers/6.jpeg", duration: "00:00" },
    { songName: "Sample song 7", filePath: "songs/1 (7).mp3", coverPath: "covers/7.jpeg", duration: "00:00" },
    { songName: "Sample song 8", filePath: "songs/1 (8).mp3", coverPath: "covers/8.jpeg", duration: "00:00" },
    { songName: "Sample song 9", filePath: "songs/1 (9).mp3", coverPath: "covers/9.png", duration: "00:00" },

]

songItems.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

    
    // element.getElementsByClassName("timeStamp")[0].innerText = songs[i].duration;
})


// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

// Listen to Events 
audioElement.addEventListener('timeupdate', () => {

    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.add('fa-pause-circle');
        element.classList.remove('fa-play-circle');
    }
    )


}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pasue-circle');
    })
})