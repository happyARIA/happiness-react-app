import React from 'react';
import './Button.css';

function Button({ text }) {
    const handleClick = () => {
    alert(`You clicked: ${text}`);
    };

    return (
    <button className="custom-button" onClick={handleClick}>
        {text}
    </button>
    );
}

export default Button;