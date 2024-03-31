import { useState } from 'react';
import './controlPanel.css';
import win from '../../img/simpsonWin.png';
import lose from '../../img/simpsonLose.png';
import luck from '../../img/goodluck.png';

const ControlPanel = ({ startGame, restartGame, status }) => {
    const [time, setTime] = useState(600);
    
    return (
            <div className='control-panel'>
                <p className='status'>
                    { status === '' ? 'Удачи!' : status }
                </p>
                <img 
                    src={ status === ''
                    ? luck : status === 'Вы проиграли !'
                    ? lose : win }
                    alt='avatar'
                    className='avatar'
                />
                
                <p>
                    <button onClick={ () => startGame(time) } className='btn'>
                        Новая
                    </button>
                    <button onClick={ () => restartGame(time) } className='btn'>
                        Рестарт
                    </button>
                </p>
                <p>
                    <button onClick={() => setTime(300)} className={time === 300 ? 'btn activ' : 'btn'}>
                        05:00
                    </button>
                    <button onClick={() => setTime(600)} className={time === 600 ? 'btn activ' : 'btn'}>
                        10:00
                    </button>
                    <button onClick={() => setTime(900)} className={time === 900 ? 'btn activ' : 'btn'}>
                        15:00
                    </button>
                </p>
            </div>
    )
}

export default ControlPanel;