import toMMSS from '../functions/toMMSS';

const ProgressBar = ({ isSession, timeRemaining, progressBarMax }) => {
    return ( 
        <div className="progress">
            <label htmlFor="progress-bar" id="timer-label">{isSession ? 'Session' : 'Break'}<span className="time-left" id="time-left">{toMMSS(timeRemaining)}</span></label>
            <progress id="progress-bar" value={timeRemaining} max={progressBarMax} className="progress-bar"></progress>
        </div>
     );
}
 
export default ProgressBar;