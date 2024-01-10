// Coilhead.jsx
import React, { useState, useEffect } from 'react';
import spring1 from './spring1.mp3';
import './Coilhead.scss';

const Coilhead = () => {
  const [sounds, setSounds] = useState([
    { id: 1, name: 'Spring 1', audioSrc: spring1 },
    { id: 2, name: 'Spring 2', audioSrc: 'sound2.mp3' },
    { id: 3, name: 'Spring 3', audioSrc: "" },
    { id: 4, name: 'Springwobble 1', audioSrc: 'sound2.mp3' },
    { id: 5, name: 'Springwobble 2', audioSrc: "spring1" },
    { id: 6, name: 'Killplayerspring', audioSrc: 'sound2.mp3' },
    { id: 7, name: 'Barefootstep 1', audioSrc: "spring1" },
    { id: 8, name: 'Barefootstep 2', audioSrc: 'sound2.mp3' },
    { id: 9, name: 'Barefootstep 3', audioSrc: "spring1" },
    { id: 10, name: 'Barefootstep 4', audioSrc: 'sound2.mp3' },
  ]);

  const [microphoneStream, setMicrophoneStream] = useState(null);

  const playSound = (audioSrc) => {
    const audio = new Audio(audioSrc);
    audio.play();
    stopMicrophone();
  };

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicrophoneStream(stream);
    } catch (error) {
      console.error('Fehler beim Zugriff auf das Mikrofon:', error);
    }
  };

  const stopMicrophone = () => {
    if (microphoneStream) {
      const tracks = microphoneStream.getTracks();
      tracks.forEach((track) => track.stop());
      setMicrophoneStream(null);
    }
  };

  useEffect(() => {
    return () => {
      stopMicrophone();
    };
  }, []);

  return (
    <div className="soundboard-container">
      <div className="sound-box-container">
        {sounds.map((sound) => (
          <div
            key={sound.id}
            className="sound-box"
            onClick={() => playSound(sound.audioSrc)}
          >
            <p>{sound.name}</p>
          </div>
        ))}
      </div>
      <div className="microphone-buttons">
        <button onClick={startMicrophone}>Starte Mikrofon</button>
        <button onClick={stopMicrophone}>Stoppe Mikrofon</button>
      </div>
    </div>
  );
};

export default Coilhead;
