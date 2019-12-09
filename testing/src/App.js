import React from 'react';
import Dashboard from "./components/DashBoard";
import './App.css';
import styled from "styled-components";
import NavBar from "./components/NavBar"

const Title = styled.h2`
  background-color: white;
  font-family: San-Serif;
  width: 280px;
  height: 80px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 10px auto;
  font-size: 48px;
  border-bottom: 1px solid lightgrey;
`;

export const sum = (a, b) => {
  return a + b;
};

function App() {
  return (
    <div className="App">
        <NavBar />
      <Title>Baseball</Title>
      <Dashboard  />
    </div>
  );
}

export default App;