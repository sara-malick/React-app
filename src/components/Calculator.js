
import React, { useState } from 'react';

function Calculator() {

  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult('')
  }

  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }
    catch(err){
      setResult('Error')
    }

  }

  return (

    <div className='calculator'>
      <form>
        <input type='text' value={result} />
      </form>

      <div className='keypad'>
        <button className='highlight btn' onClick={clear} id='clear'>Clear</button>
        <button className='highlight btn' onClick={backspace} id='backspace'>C</button>
        <button className='highlight btn' name="/" onClick={handleClick}>&divide;</button>
        <button className='btn' name="7" onClick={handleClick}>7</button>
        <button className='btn' name="8" onClick={handleClick}>8</button>
        <button className='btn' name="9" onClick={handleClick}>9</button>
        <button className='highlight btn' name="*" onClick={handleClick}>&times;</button>
        <button className='btn' name="4" onClick={handleClick}>4</button>
        <button className='btn' name="5" onClick={handleClick}>5</button>
        <button className='btn' name="6" onClick={handleClick}>6</button>
        <button className='highlight btn' name="-" onClick={handleClick}>&ndash;</button>
        <button className='btn' name="1" onClick={handleClick}>1</button>
        <button className='btn' name="2" onClick={handleClick}>2</button>
        <button className='btn' name="3" onClick={handleClick}>3</button>
        <button className='highlight btn' name="+" onClick={handleClick}>+</button>
        <button className='btn' name="0" onClick={handleClick}>0</button>
        <button className='btn' name="." onClick={handleClick}>.</button>
        <button className='highlight btn' onClick={calculate} id='result'>=</button>

      </div>

    </div>
  );

}

export default Calculator;
