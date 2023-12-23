"use client";

import { useState } from 'react';

import styles from './Calculator.module.css';

const Calculator = () => {
  const [distance, setDistance] = useState('');
  const [speed, setSpeed] = useState('');

  const calculatePace = () => {
    // Calculate pace logic here
  };

  return (
    <div className={styles.calculatorContainer}>
      <select onChange={(e) => setDistance(e.target.value)} value={distance}>
        {/* Populate with options for distances */}
        <option value="5">5 km</option>
        <option value="10">10 km</option>
        {/* ... other distances */}
      </select>
      <input 
        type="number" 
        value={speed} 
        onChange={(e) => setSpeed(e.target.value)} 
        placeholder="Enter speed (km/h)" 
      />
      <button onClick={calculatePace}>Calculate Pace</button>
      {/* Display result */}
    </div>
  );
};

export default Calculator;
