import { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);
  const [DarkMode, setDarkMode] = useState(false); 

 
  
    if (DarkMode) {
      document.body.style.backgroundColor = '#3C3D37';
      document.body.style.color = '#ECDFCC';
    } else {
      document.body.style.backgroundColor = '#ECDFCC';
      document.body.style.color = '#3C3D37';
    }
 

  return (
    <>
      <h1>Calc</h1>
      <div className="">
        <button onClick={() => setNumber1(number1 + 1)}>
          + 
        </button>
        <button onClick={() => setNumber1(number1 - 1)}>
          -
        </button>
        <h1 className='w-24'>{number1}</h1>
        <button onClick={() => setNumber2(number2 + 1)}>
          + 
        </button>
        <button onClick={() => setNumber2(number2 - 1)}>
          -
        </button>
        <h1 className='w-24'>{number2}</h1>

        <button onClick={() => setResult(number1 + number2)}>+</button>
        <button onClick={() => setResult(number1 - number2)}>-</button>
        <button onClick={() => setResult(number1 * number2)}>*</button>
        <button onClick={() => setResult(number1 % number2)}>%</button>

        <h1>{result}</h1>

        
        <button onClick={() => setDarkMode(!DarkMode)}>
         Dark Mode
        </button>
      </div>
    </>
  );
}

export default App;
