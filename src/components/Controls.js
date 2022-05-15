import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Controls = ({ startStopTimer, resetTimer, timerRunning }) => {
    return ( 
        <div className="controls">
          <button type="button" className="start_stop" id="start_stop" onClick={startStopTimer} aria-label={timerRunning ? 'Pause timer' : 'Start timer'}>{timerRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
          <button type="button" className="reset" id="reset" onClick={resetTimer} aria-label="Reset timer"><FontAwesomeIcon icon={faSyncAlt} /></button>
        </div>
     );
}
 
export default Controls;