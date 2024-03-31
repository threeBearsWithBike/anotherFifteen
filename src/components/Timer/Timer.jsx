import './timer.css';

const Timer = ({ time }) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return (
        <div className='timer-wrapper'>            
            <span className='time'>
                { `${minutes}`.padStart(2, 0) + ' : ' + `${seconds}`.padStart(2, 0) }
            </span>
        </div>
    )
}

export default Timer;