import { useState, useMemo } from 'react'
import './App.css'

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);
  
  const onWeightCHange=(e)=>{
     const inputHeight = e.target.value;
     setHeight(inputHeight);
  }

  const onHeightChange=(e)=>{
    const inputHeight = e.target.value;
    setHeight(inputHeight);
  }

  const output = useMemo(()=>{
    const calculatedHeight = height/100;
    return (weight/(calculatedHeight * calculatedHeight)).toFixed(2);
  },[weight,height])
  return (
    <>
     <main>
        <h1>BMI CALCULATOR</h1>
        <div className='input-section'> 
        <p className="slider-output">Weight: {weight} kg</p>
        <input 
          className='input-slider' 
          type='range'
          onChange={onWeightCHange}
          step='1'
          min="40"
          max='220'
        />
        <p className="slider-output">Height: {height} cm</p>
          <input
             type="range" 
             className='input-slider'
             onChange={onHeightChange}
             min='140'
             max='220'
             />
        </div>
        <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
     </main>
    </>
  )
}

export default App
