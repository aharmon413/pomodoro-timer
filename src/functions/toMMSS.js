export default function toMMSS(time) {
    let seconds = time % 60;
    let minutes = parseInt(time / 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}