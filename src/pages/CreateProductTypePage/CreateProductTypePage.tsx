import React, { useState } from 'react';
import './CreateProductTypePage.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../http/api';

const CreateProductTypePage: React.FC = () => {
  const navigate = useNavigate();

  const [packsNumber, setPacksNumber] = useState<number | ''>('');
  const [packageType, setPackageType] = useState<string>('');
  const [isArchived, setIsArchived] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');

  const handleSaveClick = async () => {
    if (packsNumber === '' || packageType === '') {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    const newProductData = {
      packsNumber: Number(packsNumber),
      packageType,
      isArchived,
      description,
    };

    try {
      await createProduct(newProductData);
      console.log('Product created successfully');
      navigate('/');
    } catch (error) {
      console.error('Failed to create product:', error);
      alert('Ошибка при создании продукта');
    }
  };

  const handleCancelClick = () => {
    console.log('Cancel clicked');
    navigate('/');
  };

  return (
    <div className='createproduct__container'>
      <header className='createproduct-header'>
        <h1>Создание типа продукции</h1>
      </header>
      <div className='form__container'>
        <div className='form__row'>
          <label>
            Кол-во пачек<span className='red-star'>*</span>
          </label>
          <input 
            type="number" 
            value={packsNumber} 
            onChange={(e) => setPacksNumber(Number(e.target.value))} 
            required 
          />
        </div>
        <div className='form__row'>
          <label>
            Тип упаковки<span className='red-star'>*</span>
          </label>
          <select 
            value={packageType} 
            onChange={(e) => setPackageType(e.target.value)} 
            required 
          >
            <option value="компрессия">Компрессия</option>
            <option value="некомпрессия">Некомпрессия</option>
          </select>
        </div>
        <div className='form__row'>
          <label>
            Архивировано
          </label>
          <input 
            id='checkboxArchive'
            type="checkbox" 
            checked={isArchived} 
            onChange={(e) => setIsArchived(e.target.checked)} 
          />
        </div>
        <div className='form__row'>
          <label>
            Описание
          </label>
          <textarea 
            className='form__row_textarea'
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <div className='button-group'>
          <Button text='Отмена' type='cancel' onClick={handleCancelClick} />
          <Button text='Сохранить' type='standart' onClick={handleSaveClick} />
        </div>
      </div>
    </div>
  );
};

export default CreateProductTypePage;