import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');
  const [selectedApp, setSelectedApp] = useState('appA');

  const handleSendRequest = () => {
    // Simulate different responses based on selectedApp
    let simulatedResponse;
    switch (selectedApp) {
      case 'appA':
        simulatedResponse = 'Simulated response from appA';
        break;
      case 'appACQ':
        simulatedResponse = 'Simulated response from appACQ';
        break;
      case 'all':
        simulatedResponse = 'Simulated response from all apps';
        break;
      default:
        simulatedResponse = 'Invalid app selected';
    }
    setResponse(simulatedResponse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Postman-like UI</h1>
      </header>
      <div className="main-container">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="url-input"
        />
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="appA"
              checked={selectedApp === 'appA'}
              onChange={(e) => setSelectedApp(e.target.value)}
            />
            appA
          </label>
          <label>
            <input
              type="radio"
              value="appACQ"
              checked={selectedApp === 'appACQ'}
              onChange={(e) => setSelectedApp(e.target.value)}
            />
            appACQ
          </label>
          <label>
            <input
              type="radio"
              value="all"
              checked={selectedApp === 'all'}
              onChange={(e) => setSelectedApp(e.target.value)}
            />
            All
          </label>
        </div>
        <button onClick={handleSendRequest} className="send-button">
          Send
        </button>
        <div className="response-container">
          <pre>{response}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
