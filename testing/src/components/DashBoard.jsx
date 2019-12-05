import React, { useState } from 'react';
import Display from './Display';
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  width: 480px;
  height: 150px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 10px auto;
`;

function DashBoard() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);

  const ball = () => {
    if (balls < 3) {
      setBalls(balls + 1);
    } else {
      setBalls(0);
    }
  };
  const strike = () => {
    if (strikes < 2) {
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
      <Card>
      <h1>Dashboard</h1>

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
      /></Card>
    </div>
  );
}
export default DashBoard;
