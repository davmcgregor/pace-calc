"use client";

import { useState } from 'react';

import { DISTANCES } from '@/app/constants/distances';

import styles from './Calculator.module.css';

const Calculator = () => {
  const [distance, setDistance] = useState('');
  const [speed, setSpeed] = useState('');

  const calculatePace = () => {
    // Calculate pace logic here
  };

  const reset = () => {
    setDistance('');
    setSpeed(''); 
  };

  return (
    <form className={styles.form}>
      <select onChange={(e) => setDistance(e.target.value)} value={distance}>
        {DISTANCES.map((distance) => (
          <option key={distance} value={distance}>
            {distance}
          </option>
        ))}
      </select>
      <input 
        type="number" 
        value={speed} 
        onChange={(e) => setSpeed(e.target.value)} 
        placeholder="Enter speed (km/h)" 
      />
      <div className={styles.submitSection}>
        <button
          onClick={calculatePace}
          type="submit"
        >
          Calculate Pace
        </button>
        <button
          onClick={reset}
        >
          Reset
        </button>
      </div>
      {/* Display result */}
    </form>
  );
};

export default Calculator;
