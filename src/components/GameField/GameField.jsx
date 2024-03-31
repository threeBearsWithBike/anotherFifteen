import Dice from '../Dice/Dice';
import Timer from '../Timer/Timer';
import './gameField.css';



const GameField = ({ field, handlerClickDice, time }) => {
    return (
        <>
            <div className='field'>
                { field.map(numberDice => 
                    <Dice 
                        key={ numberDice }
                        numberDice={ numberDice }
                        handlerClickDice={ handlerClickDice } 
                    />
                    )
                }
            </div>
            <Timer time={ time }/>
        </>
    )
}

export default GameField;