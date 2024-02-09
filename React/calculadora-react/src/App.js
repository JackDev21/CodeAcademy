import './App.css';
import Button from './components/Button'
import Display from './components/Display';
import Logo from './components/Logo';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');
  const [lastCharIsOperator, setLastCharIsOperator] = useState(false)

  const addInput = value => {

    if (!('+*/-'.includes(value) && lastCharIsOperator)) {
      setInput(input + value)
      setLastCharIsOperator('+*/-'.includes(value))
    };
  }
  const clearInput = () => {
    setInput('')
    setLastCharIsOperator(false) // Reinicia el estado de lastCharIsOperator
  };

  const calcResult = () => {
    if (input) {
      const result = evaluate(input)
      const formatResult = Number.isInteger(result) ? result : result.toFixed(6)
      setInput(formatResult.toString())
    } else {
      alert('Por favor ingrese valores')
    }
  };


  return (
    <div className='App'>
      <Logo />
      <div className='contenedor-calculadora'>
        <Display input={input} />
        <div className="fila">
          <Button clickButton={addInput}>7</Button>
          <Button clickButton={addInput}>8</Button>
          <Button clickButton={addInput}>9</Button>
          <Button clickButton={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button clickButton={addInput}>4</Button>
          <Button clickButton={addInput}>5</Button>
          <Button clickButton={addInput}>6</Button>
          <Button clickButton={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button clickButton={addInput}>1</Button>
          <Button clickButton={addInput}>2</Button>
          <Button clickButton={addInput}>3</Button>
          <Button clickButton={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button clickButton={calcResult}>=</Button>
          <Button clickButton={addInput}>0</Button>
          <Button clickButton={addInput}>.</Button>
          <Button clickButton={addInput}>/</Button>
        </div>
        <div className="fila">
          <ClearButton clearInput={clearInput}>Clear</ClearButton>
        </div>

      </div>

    </div>
  );
}

export default App;
