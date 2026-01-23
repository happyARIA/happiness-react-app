import React from 'react';
import './Greeting.css';

function Greeting() {
    const myName = 'Happiness Omofonmwan';
    const currentYear = new Date().getFullYear();

    return (
    <div className="greeting-container">
        <h1>Welcome to My First React App!</h1>
        <p>Hello, my name is {myName}</p>
        <p>Current Year: {currentYear}</p>
    </div>
    );
}

export default Greeting;