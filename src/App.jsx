import React, { useState } from 'react';
import './App.css';
import IndiaMap from './components/IndiaMap';  // Import the SVG Map component

function App() {
  return (
    <div className="App">
      <h1>India Map</h1>
      <IndiaMap />
    </div>
  );
}

export default App;
