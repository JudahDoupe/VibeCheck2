import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [joinCode, setJoinCode] = useState('');

  const handleJoinCodeInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
    setJoinCode(value);
  };

  const handleJoinClick = () => {
    if (joinCode.length === 4) {
      console.log('Joining with code:', joinCode);
    }
  };

  return (
    <div className="app-container">
      <div className="survey-box">
        <h1 className="title">VibeCheck</h1>
        <p className="subtitle">
          An anonymous survey tool for check the vibe
        </p>

<br/><br/>

        <input
          id="new-question"
          type="text"
          placeholder="What would you like to know?"
        />
        <button className="create-survey-button">
          Create Survey
        </button>

        
<hr/>
<br/>

        <div className="button-group">
          <input
            id="survey-code"
            type="text"
            maxLength={4}
            placeholder="CODE"
            value={joinCode}
            onChange={handleJoinCodeInputChanged}
          />
          <button
            className="join-button"
            disabled={joinCode.length !== 4}
            onClick={handleJoinClick}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
