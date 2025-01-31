import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Button.css';

type ButtonType = 'standart' | 'cancel' | 'delete';

interface ButtonProps {
  text: string;
  type: ButtonType;
  onClick?: () => void;
  navigateTo?: string;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick, navigateTo }) => {
  const buttonClass = `button ${type}`;
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button className={buttonClass} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;