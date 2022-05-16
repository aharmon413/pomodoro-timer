import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSyncAlt, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

const Controls = ({ startStopTimer, resetTimer, timerRunning, audioRef }) => {
  const [muteAudio, setMuteAudio] = useState(false);

    return ( 
        <div className="controls">
          <button type="button" className="start_stop" id="start_stop" data-testid='start-stop'
            onClick={startStopTimer}
            aria-label={timerRunning ? 'Pause timer' : 'Start timer'}>
              {timerRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
          <button type="button" className="reset" id="reset"
            onClick={resetTimer}
            aria-label="Reset timer">
              <FontAwesomeIcon icon={faSyncAlt} />
          </button>
          <button type="button" className="mute" id="mute"
            onClick={() => {audioRef.current.muted = !audioRef.current.muted; setMuteAudio(muteAudio => !muteAudio)}}
            aria-label={muteAudio ? 'Unmute timer audio' : 'Mute timer audio'}>
              {muteAudio ? <FontAwesomeIcon icon={faVolumeXmark} /> : <FontAwesomeIcon icon={faVolumeHigh} />}
          </button>
        </div>
     );
}
 
export default Controls;