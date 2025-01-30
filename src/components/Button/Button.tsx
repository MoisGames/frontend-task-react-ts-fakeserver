import React from 'react';
import './Button.css';

type ButtonType = 'standart' | 'cancel' | 'delete';

interface ButtonProps {
  text: string;
  type: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  const buttonClass = `button ${type}`;

  return (
    <button className={buttonClass}>
      {text}
    </button>
  );
};

export default Button;