import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
        This is the page to vote, tell others whether you agree or not by the emoji below!
        </div>

        <button className="waveButton" onClick={wave}>
          😁
        </button>
        <button className="waveButton" onClick={wave}>
          💩
        </button>
      </div>
    </div>
  );
}
