import '../components/Calculator.css';
import { useState } from 'react';
const Calculator = () => {
  const [digit, setDigit] = useState(0)
  const [prevDigit, setPrevDigit] = useState(0)
  const [operator, setOperator] = useState()

  const HandlerInputNum = (e) => {
    if (digit !== 0) {
      setDigit(digit + e.target.value)
    } else {
      setDigit(e.target.value);
    }
  }

  const HandlerCleanInput = () => {
    setDigit(0)
  }

  const HandlerPercent = () => {
    setDigit(digit/100)
  }

  const HandlerChangeSign = () => {
    if (digit > 0) {
      setDigit(-digit)
    } else {
      setDigit(Math.abs(digit))
    }
  }

  const HandlerOperator = (e) => {
    setOperator(e.target.value);
    setPrevDigit(digit);
    setDigit(0)
  }

  const HandlerResults = () => {
    if (operator === "/") {
      return setDigit((parseFloat(prevDigit) / parseFloat(digit)).toFixed(2));
    } else if (operator === "+") {
      return setDigit((parseFloat(prevDigit) + parseFloat(digit)).toFixed(2));
    } else if (operator === "X") {
      return setDigit((parseFloat(prevDigit) * parseFloat(digit)).toFixed(2));
    } else if (operator === "-"){
      return setDigit((parseFloat(prevDigit) - parseFloat(digit)).toFixed(2));
    }
  }

  return (
    <>    
          <div className="wrapper">
            <p className="result">{digit}</p>
            <button onClick={HandlerCleanInput} className="pastelPink">
              AC
            </button>
            <button onClick={HandlerChangeSign} className="pastelPink">
              +/-
            </button>
            <button onClick={HandlerPercent} className="pastelPink">
              %
            </button>
            <button onClick={HandlerOperator} value="/" className="ultraRed">
              /
            </button>
            <button onClick={HandlerInputNum} value={7} className="queenPink">
              7
            </button>
            <button onClick={HandlerInputNum} value={8} className="queenPink">
              8
            </button>
            <button onClick={HandlerInputNum} value={9} className="queenPink">
              9
            </button>
            <button onClick={HandlerOperator} value={'X'} className="ultraRed">
              X
            </button>
            <button onClick={HandlerInputNum} className="queenPink" value={4}>
              4
            </button>
            <button onClick={HandlerInputNum} className="queenPink" value={5}>
              5
            </button>
            <button onClick={HandlerInputNum} className="queenPink" value={6}>
              6
            </button>
            <button onClick={HandlerOperator} value="-" className="ultraRed">
              -
            </button>
            <button onClick={HandlerInputNum} className="queenPink" value={1}>
              1
            </button>
            <button onClick={HandlerInputNum} className="queenPink" value={2}>
              2
            </button>
            <button onClick={HandlerInputNum} className="queenPink" value={3}>
              3
            </button>
            <button onClick={HandlerOperator} className="ultraRed" value="+">
              +
            </button>
            <button onClick={HandlerInputNum} className="queenPink" value={0}>
              0
            </button>
            <button onClick={HandlerInputNum} value={'.'} className="queenPink">
              .
            </button>
            <button style={{ visibility: 'hidden' }}>.</button>
            <button onClick={HandlerResults}>=</button>
          </div>
    </>
  );
};
export default Calculator;
