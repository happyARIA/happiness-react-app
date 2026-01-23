import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Profile from './components/Profile';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Profile />
      <div className="button-container">
        <Button text="Click Me!" />
        <Button text="Learn More" />
        <Button text="Get Started" />
      </div>
    </div>
  );
}

export default App;