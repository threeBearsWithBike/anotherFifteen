import './dice.css';

const Dice = ({ numberDice, handlerClickDice }) => {
    return (
        <button
            className={ numberDice !== 0 ? 'dice' : 'without-dice' }
            onClick={ () => handlerClickDice(numberDice) }
        > 
        { numberDice !== 0 ? numberDice : '' }
        </button>
    )
}

export default Dice;