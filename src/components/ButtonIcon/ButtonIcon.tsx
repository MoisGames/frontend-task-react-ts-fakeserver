// src/components/ButtonIcon/ButtonIcon.tsx

import React from 'react';
import './ButtonIcon.css';

// Импортируем SVG-файлы как URL
import PenIconUrl from '../../assets/svg/pen.svg?url';
import TrashCanIconUrl from '../../assets/svg/trash-can.svg?url';
import QuestionIconUrl from '../../assets/svg/circle-question.svg?url';

interface ButtonIconProps {
  type: 'pen' | 'trash' | 'question';
  onClick: () => void;
}

const icons = {
  pen: PenIconUrl,
  trash: TrashCanIconUrl,
  question: QuestionIconUrl,
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ type, onClick }) => {
  const iconUrl = icons[type];

  return (
    <button className='icon-button' onClick={onClick}>
      <img src={iconUrl} alt={type} />
    </button>
  );
};

export default ButtonIcon;