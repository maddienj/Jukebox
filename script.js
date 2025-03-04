function playSong(mp3File) {
    let audioPlayer = document.getElementById("audioPlayer");
    let audioSource = document.getElementById("audioSource");

    // Set the new song source
    audioSource.src = mp3File;
    audioPlayer.load(); // Reload the audio player to apply changes
    audioPlayer.play(); // Auto-play the song
}
