function playSong(mp3File) { // pass in the song given by the html file 
    let audioPlayer = document.getElementById("audioPlayer"); //retrieves html stuff w the specified id values 
    let audioSource = document.getElementById("audioSource"); //assigns them to JavaScript variables to manipulate it >>

    // audio and source defined in the html files 
    audioSource.src = mp3File; // uses the argument ^
    audioPlayer.load(); // reloads it
    audioPlayer.play(); 
}
