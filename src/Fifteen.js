import { useState, useEffect } from "react";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import GameField from "./components/GameField/GameField";
import './fifteen.css';

const FifteenNew = () => {
    const [startField, setStartField] = useState();
    const [currentField, setCurrentField] = useState();
    const [time, setTime] = useState();
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (JSON.stringify([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]) === JSON.stringify(currentField) && time !== 0) {
            setStatus('Вы победили !');
        }
    }, [time, currentField]);

    useEffect(() => {
        if (time === 0) {
            setStatus('Вы проиграли !');
        }
        let timerID = setInterval(() => {
            if (time > 0) {
                setTime(prev => prev -= 1);
            }
        }, 1000);
        return () => clearInterval(timerID)
    }, [time]);

    const createGameField = (gameField = [], numberDice = undefined) => {
        if (gameField.length === 16) {
            return gameField;
          }
        
          numberDice = Math.floor(Math.random() * 16);
        
          if (gameField.includes(numberDice)) {
            return createGameField(gameField);
          } else {
            return createGameField([...gameField, numberDice]);
          }
    }

    const handlerClickStartGame = (time) => {
        let field = createGameField();
        setStartField(field);
        setCurrentField([...field]);
        setStatus('');
        setTime(time);
    }

    const restartGame = (time) => {
        if (typeof startField === 'undefined') {
            return;
        }
        setCurrentField([...startField]);
        setStatus('');
        setTime(time);
    }

    const handlerClickDice = (numberDice) => {
        if (numberDice === 0) {
            return;
        }

        let zeroIdx = currentField.indexOf(0);
        let numberDiceIdx = currentField.indexOf(numberDice);
        let position = Math.abs(zeroIdx - numberDiceIdx);
      
        if (position === 1 || position === 4) {
            setCurrentField(prev => {
            prev[zeroIdx] = numberDice;
            prev[numberDiceIdx] = 0;
            return [...prev];
          })
        }
    }

    return (
        <>
            <h1>Пятнашки</h1>
            {
                status === '' && startField && time !== 0
                ? <GameField
                    field={ currentField }
                    handlerClickDice={ handlerClickDice }
                    time={time} 
                />
                : <ControlPanel
                    startGame={ handlerClickStartGame }
                    restartGame={ restartGame }
                    status={ status } 
                />
            }
            
        </>
    )
}

export default FifteenNew;