import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [requestBody, setRequestBody] = useState('');
  const [response, setResponse] = useState('');
  const [selectedApp, setSelectedApp] = useState('appA');

  const handleSendRequest = () => {
    let mockResponse;
    switch (selectedApp) {
      case 'appA':
        mockResponse = { message: 'Response from appA', data: { key: 'valueA' } };
        break;
      case 'appACQ':
        mockResponse = { message: 'Response from appACQ', data: { key: 'valueACQ' } };
        break;
      case 'all':
        mockResponse = { message: 'Response from all', data: { key: 'valueAll' } };
        break;
      default:
        mockResponse = { message: 'Unknown app', data: {} };
    }
    setResponse(JSON.stringify(mockResponse, null, 2));
  };

  return (
    <div className="container">
      <div className="header">
        API Testing Tool
      </div>
      <div className="controls">
        <div className="url-container">
          <input
            type="text"
            className="url-bar"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
          <button className="send-button" onClick={handleSendRequest}>
            Send
          </button>
        </div>
        <div className="options">
          <button
            className={`option-button ${selectedApp === 'appA' ? 'active' : ''}`}
            onClick={() => setSelectedApp('appA')}
          >
            appA
          </button>
          <button
            className={`option-button ${selectedApp === 'appACQ' ? 'active' : ''}`}
            onClick={() => setSelectedApp('appACQ')}
          >
            appACQ
          </button>
          <button
            className={`option-button ${selectedApp === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedApp('all')}
          >
            all
          </button>
        </div>
      </div>
      <div className="content">
        <textarea
          className="request-body"
          value={requestBody}
          onChange={(e) => setRequestBody(e.target.value)}
          placeholder="Enter request body"
        />
        <textarea
          className="response-box"
          value={response}
          readOnly
          placeholder="Response will appear here"
        />
      </div>
    </div>
  );
}

export default App;
