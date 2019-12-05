import React, { useState } from 'react';

import Display from './Display';

function DashBoard() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);

  const ball = () => {
    if (balls < 4) {
      setBalls(balls + 1);
    } else {
      setBalls(0);
    }
  };
  const strike = () => {
    if (strikes < 3) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
    }
  };

  const foul = () => {
    if (strikes === 0) {
      setStrikes(1);
    } else if (strikes === 1) {
      setStrikes(2);
    } else {
      setStrikes(strikes);
    }
  };
  const hit = () => {
    if (hits === 0) {
      setStrikes(0);
      setBalls(0);
    } 
  };

  return (
    <div>
      <h1>Baseball Dashboard</h1>

      <button onClick={() => ball()}>Ball</button>
      <button onClick={() => strike()}>Strike</button>
      <button onClick={() => foul()}>Foul</button>
      <button onClick={() => hit()}>Hit</button>

      <Display
        balls={balls}
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes}
        fouls={fouls}
        setFouls={setFouls}
        hits={hits}
        setHits={setHits}
      />
    </div>
  );
}
export default DashBoard;
