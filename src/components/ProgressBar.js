import toMMSS from '../functions/toMMSS';

const ProgressBar = ({ isSession, timeRemaining, progressBarMax, timesUp }) => {
    return ( 
        <div className={`progress ${timesUp ? 'times-up' : ''}`}>
            <label htmlFor="progress-bar" id="timer-label" data-testid="progress-label">{isSession ? 'Session' : 'Break'}<span className="time-left" id="time-left">{toMMSS(timeRemaining)}</span></label>
            <progress id="progress-bar" value={timeRemaining} max={progressBarMax} className="progress-bar"></progress>
        </div>
     );
}
 
export default ProgressBar;