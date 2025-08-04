import React, { use, useMemo } from "react";
import { useState } from "react";
import './App.css';

const App = () => {

  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(55);

  function onWeightChange(event){
    setWeight(event.target.value)
  }

  function onHeightChange(event){
    setHeight(event.target.value)
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight*calculateHeight)).toFixed(2);
  },[weight,height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-sction' >
        <p className='slider-output'>Weight : {weight}KG </p>
        <input 
          className='input-slider' 
          type='range' 
          step="1" 
          min="25" 
          max="220" 
          onChange={onWeightChange}
        />

        <p className='slider-output'>Height : {height}cm </p>
        <input 
          className='input-slider' 
          type='range' 
          onChange={onHeightChange}
          min="120"
          max="300"
        />
      </div>
      <div className='output-section'>
        <p>Your BMI is </p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App;