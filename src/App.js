import React, { useState } from 'react';
import './App.css';
import axios from 'axios'; // Uncomment if using axios

function App() {
  const [url, setUrl] = useState('http://localhost:8080/appapplics'); // Default URL for your API
  const [requestBody, setRequestBody] = useState('');
  const [response, setResponse] = useState('');
  const [selectedApp, setSelectedApp] = useState('appA');

  const handleSendRequest = async () => {
    try {
      // Using axios to send the request
      const res = await axios.post(url, requestBody, {
        headers: {
         'Content-Type': 'text/plain',
        },
      });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Error fetching data');
    }
  };

  return (
    <div className="container">
      <div className="header">API Testing Tool</div>
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
