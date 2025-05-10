import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateStory = async () => {
    setLoading(true);
    setStory("");
    setError("");
    try {
      const response = await axios.post("http://127.0.0.1:5000/generate", {
        prompt,
      });
      setStory(response.data.story);
    } catch (err) {
      setError("Oops! Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">📝 Story Generator</h1>
      <p className="subtitle">Enter a prompt, and let AI create a short story!</p>

      <div className="input-container">
        <input
          type="text"
          placeholder="e.g., A robot named Max in a desert"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
          className="input-field"
          autoFocus
        />
        <button
          onClick={generateStory}
          disabled={loading || !prompt.trim()}
          className="generate-btn"
        >
          {loading ? <span className="spinner"></span> : "Generate Story"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {story && (
        <div className="story-box">
          <h3>Generated Story:</h3>
          <p>{story}</p>
        </div>
      )}
    </div>
  );
}

export default App;


