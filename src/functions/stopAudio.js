export default function stopAudio(audioRef) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
}