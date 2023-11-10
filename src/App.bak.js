import './App.css';
import {Howl,Howler} from 'howler';
import { useState } from 'react';

function App() {
  const radioLinks ={
    "Pattupetti":"https://listen.radioking.com/radio/305023/stream/354512",
    "Rainbow":'https://air.pc.cdn.bitgravity.com/air/live/pbaudio045/playlist.m3u8',
    "Club fm":'http://playerservices.streamtheworld.com/api/livestream-redirect/CLUBFMUAEAAC.aac'
  } 

  const audioKeys= Object.keys(radioLinks);
  const [currentTrackIndex,setCurrentTrackIndex] = useState(0);
  const currentTrack = audioKeys[currentTrackIndex];
  console.log(currentTrackIndex,currentTrack, radioLinks[currentTrack])

  const sound= useState(
    new Howl({
      src: [ radioLinks[currentTrack] ],
      html5: true,
      format: ['mp3', 'aac']
  })
  );
  console.log(sound)
  const playSound = () =>{
  sound.play(); 
  }
  
  const pauseSound = () =>{
  sound.pause(); 
  }
  
  const stopSound = () =>{
  sound.pause(); 
  }

  const nextTrack = () => {
    stopSound();
    const nextIndex = (currentTrackIndex + 1) % audioKeys.length;
    setCurrentTrackIndex(nextIndex);
    const nextTrackKey = audioKeys[nextIndex];
    sound.unload();
    sound.load({ src: radioLinks[nextTrackKey] });
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h5>Internet Radio</h5>
        <div>
        <h5>Currently Playing</h5>
        <div>
        <p>Station: {currentTrack}</p>
        </div>
        <button>Prev</button>
        <button onClick={playSound}>Play</button>
        <button onClick={pauseSound}>Pause</button>
        <button onClick={stopSound}>Stop</button>
        <button onClick={nextTrack}>Next</button>
        <div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
