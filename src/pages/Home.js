import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [prompt, setPrompt] = useState('');
  const [audioUrl, setAudioUrl] = useState(null);

  const handleGenerateMusic = () => {
    setAudioUrl('path/to/generated-music.mp3');
  };

  return (
    <div className="home-content">
      {/* Background Music Icons */}
      <div className="music-icon icon-1">♪</div>
      <div className="music-icon icon-2">♫</div>
      <div className="music-icon icon-3">♬</div>
      <div className="music-icon icon-4">♩</div>

      <h1>MusicGen</h1>
      <p>Enter your prompt to generate music:</p>
      <input
        type="text"
        placeholder="Type your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerateMusic}>Generate Music</button>

      {audioUrl && (
        <audio controls className="audio-player">
          <source src={audioUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default Home;
