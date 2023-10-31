import './App.css';
import {Howl} from 'howler';
import { useState } from 'react';

function App() {
  const radioLinks ={
    "pattupetti":""
  } 
  const [sound]= useState(
    new Howl({
      src: ['https://listen.radioking.com/radio/305023/stream/354512'],
      html5: true,
      format: ['mp3', 'aac']
  })
  );

  const playSound = () =>{
  sound.play(); 
  }
  
  const pauseSound = () =>{
  sound.pause(); 
  }
  
  const stopSound = () =>{
  sound.stop(); 
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h5>Internet Radio</h5>
        <div>
        <h5>Available Stations</h5>
        <button>Prev</button>
        <button onClick={playSound}>Play</button>
        <button onClick={pauseSound}>Pause</button>
        <button onClick={stopSound}>Stop</button>
        <button>Next</button>
        <div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
