
import React, { useState, useEffect } from 'react';
import './Jester.scss';

const Jester = () => {
  const [sounds, setSounds] = useState([
    { id: 1, name: 'Jack in the Box Theme', audioSrc: "" },
    { id: 2, name: 'Jesterstomp 1', audioSrc: 'sound2.mp3' },
    { id: 3, name: 'Jesterstomp 2', audioSrc: "" },
    { id: 4, name: 'Jesterstomp 3', audioSrc: '' },
    { id: 5, name: 'Pop 1', audioSrc: "" },
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

export default Jester;
