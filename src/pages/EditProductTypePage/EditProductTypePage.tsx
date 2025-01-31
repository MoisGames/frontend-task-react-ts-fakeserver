import React, { useEffect, useState } from 'react';
import './EditProductTypePage.css'
import Button from '../../components/Button/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../../http/api';
import { Product } from '../../interfaces/ProductInterface';

const EditProductTypePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    const [packsNumber, setPacksNumber] = useState<number | ''>('');
    const [packageType, setPackageType] = useState<string>('');
    const [isArchived, setIsArchived] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('');
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setError('No product ID provided');
      setLoading(false);
      return;
    }

    const loadProduct = async () => {
      try {
        const selectedProduct = await fetchProductById(id);
        setProduct(selectedProduct);
        setPacksNumber(selectedProduct.packsNumber);
        setPackageType(selectedProduct.packageType);
        setIsArchived(selectedProduct.isArchived);
        setDescription(selectedProduct.description || '');
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setError('Failed to fetch product');
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleSaveClick = () => {
    console.log('Save clicked');
    navigate('/');
  };

  const handleDeleteClick = () => {
    console.log('Delete clicked');
    navigate('/');
  };

  const handleCancelClick = () => {
    console.log('Cancel clicked');
    navigate('/');
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Продукт не найден</div>;

  return (
    <div className='editproduct__container'>
      <header className='editproduct-header'>
        <h1>Редактирование типа продукции</h1>
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
              <option value="">Выберите тип упаковки</option>
              <option value="компрессия">компрессия</option>
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
              style={{ backgroundColor: isArchived ? '#6184FF' : 'white', color: 'white' }} 
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
          <Button text='Удалить' type='delete' onClick={handleDeleteClick} />
          <Button text='Отмена' type='cancel' onClick={handleCancelClick} />
          <Button text='Сохранить' type='standart' onClick={handleSaveClick} />
        </div>
      </div>
    </div>
  );
};

export default EditProductTypePage;