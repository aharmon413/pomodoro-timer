import { useState, useRef } from "react";
import stopAudio from '../functions/stopAudio';
import TimeBlockLengthSetter from "./TimeBlockLengthSetter";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";

const Timer = () => {
    const [sessionLength, setSessionLength] = useState(1500);
    const [breakLength,  setBreakLength] = useState(300);
    const [isSession, setIsSession] = useState(true);
    const [timeRemaining, setTimeRemaining] = useState(1500);
    const [timerRunning, setTimerRunning] = useState(false);
    const [timesUp, setTimesUp] = useState(false);

    const audioRef = useRef();

    const incrementTimeBlock = (mode) => {
        if (mode == 'session' && sessionLength < 3600) {
          setSessionLength((prevState) => prevState + 60);
          setTimeRemaining(sessionLength + 60);
        } else if (mode == 'break' && breakLength < 3600) {
          setBreakLength((prevState) => prevState + 60);
        }
    };

    const decrementTimeBlock = (mode) => {
        if (mode == 'session' && sessionLength > 60) {
          setSessionLength((prevState) => prevState - 60);
          setTimeRemaining(sessionLength - 60);
        } else if (mode == 'break' && breakLength > 60) {
          setBreakLength((prevState) => prevState - 60);
        }
    };
   
    const startStopTimer = () => {
        window.timeBlock = isSession ? sessionLength : breakLength;
        window.timeLeft = window.timeBlock > timeRemaining ? timeRemaining : window.timeBlock;
        
        if (!timerRunning) {
          setTimerRunning(true);  
          window.timerId = setInterval(() => updateTimer(), 1000);
        } else {
          stopAudio(audioRef);
          setTimesUp(false);
          setTimerRunning(false);
          clearInterval(window.timerId);
        }
    }
        
    const updateTimer = () => {
          if (window.timeLeft === 0) {
            setTimesUp(true);
            setTimeout(() => setTimesUp(false), 7000);
            if (!audioRef.muted) audioRef.current.play();
          // when a time block ends: clear the old timer, grab the next time block's length, 
          // update state, update timeLeft with the new time block length, and start a new timer
            clearInterval(window.timerId);
            window.timeBlock = isSession ? breakLength : sessionLength;
            let newTimeRemaining = window.timeBlock;
            setTimeRemaining(newTimeRemaining);
            setIsSession((prevState) => !prevState);
            window.timeLeft = window.timeBlock > newTimeRemaining ? newTimeRemaining :window.timeBlock;
            window.timerId = setInterval(() => updateTimer(), 1000);
          } else {
            window.timeLeft--;
            setTimeRemaining(window.timeLeft);
          }
    }
    
    const resetTimer = () => {
        clearInterval(window.timerId);
        if (!audioRef.muted) stopAudio(audioRef);
        setTimesUp(false);
        setIsSession(true);
        setTimeRemaining(sessionLength);
        setTimerRunning(false);
    }

    return ( 
        <main className="timer">
          <div className="emojis">🍅⏲️</div>
          
          <TimeBlockLengthSetter 
            label="session" 
            value={parseInt(sessionLength / 60)} 
            onClickInc={() => incrementTimeBlock('session')} 
            onClickDec={() => decrementTimeBlock('session')} 
            timerRunning={timerRunning} />
          <TimeBlockLengthSetter 
            label="break"
            value={parseInt(breakLength / 60)}
            onClickInc={() => incrementTimeBlock('break')}
            onClickDec={() => decrementTimeBlock('break')} 
            timerRunning={timerRunning} />

          <ProgressBar 
            isSession={isSession}
            timeRemaining={timeRemaining}
            progressBarMax={isSession ? sessionLength : breakLength}
            timesUp={timesUp} />

          <Controls
            startStopTimer={startStopTimer}
            resetTimer={resetTimer}
            timerRunning={timerRunning}
            audioRef={audioRef} />
          
          <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref={audioRef}></audio>
        </main>
     );
}
 
export default Timer;