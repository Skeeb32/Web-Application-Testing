import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  width: 280px;
  height: 170px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 10px auto;
  margin-top: 10%;
`;

const Display = ({ strikes, balls }) => {


    return(
        <Card>
        <div> 
            <h1>AT BAT: </h1>
            <h2>Strikes : {strikes}</h2>
            <h2>Balls : {balls}</h2>
        </div></Card>
    )
        
    
}

export default Display;