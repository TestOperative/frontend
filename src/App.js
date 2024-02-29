// src/App.js
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`Name entered: ${name}`);
    // You can perform further actions with the name here
  };

  return (
    <div>
      <h1>Azure React App</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button onClick={handleButtonClick}>Read Name</button>
    </div>
  );
};

export default App;
