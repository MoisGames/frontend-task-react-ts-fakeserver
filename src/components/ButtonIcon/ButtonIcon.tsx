import React from 'react';
import './ButtonIcon.css';
import Tooltip from '../Tooltip/Tooltip';

import PenIconUrl from '../../assets/svg/pen.svg?url';
import TrashCanIconUrl from '../../assets/svg/trash-can.svg?url';
import QuestionIconUrl from '../../assets/svg/circle-question.svg?url';

interface ProductType {
  id: string;
  packsNumber: number;
  packageType: string;
  isArchived: boolean;
  description: string;
  createdAt: string;
}

interface ButtonIconProps {
  type: 'pen' | 'trash' | 'question';
  onClick: () => void;
  product?: ProductType; 
}

const icons = {
  pen: PenIconUrl,
  trash: TrashCanIconUrl,
  question: QuestionIconUrl,
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ type, onClick, product }) => {
  const iconUrl = icons[type];
  const tooltipText = product ? (product.description || 'Нет описания') : '';

  if (type === 'question' && product) {
    return (
      <Tooltip text={tooltipText}>
        <button className='icon-button' onClick={onClick}>
          <img src={iconUrl} alt={type} />
        </button>
      </Tooltip>
    );
  }

  return (
    <button className='icon-button' onClick={onClick}>
      <img src={iconUrl} alt={type} />
    </button>
  );
};

export default ButtonIcon;