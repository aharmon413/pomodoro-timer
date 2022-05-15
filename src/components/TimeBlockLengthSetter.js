import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const TimeBlockLengthSetter = ({ label, onClickDec, onClickInc, timerRunning, value }) => {
    return ( 
        <div className="length-setter">
            <h2 id={label + '-label'}>{label} Length</h2>
        <button type="button" id={label + '-decrement'} className="decrement" onClick={onClickDec} disabled={timerRunning} aria-label={'Decrement' + label}><FontAwesomeIcon icon={faChevronDown} /></button>
        <p id={label + '-length'} className="time-length">{value}</p>
        <button type="button" id={label + '-increment'} className="increment" onClick={onClickInc} disabled={timerRunning} aria-label={'Increment' + label}><FontAwesomeIcon icon={faChevronUp} /></button>
        </div>
     );
}
 
export default TimeBlockLengthSetter;