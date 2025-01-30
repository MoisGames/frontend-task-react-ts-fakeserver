// src/pages/MainPage/MainPage.tsx

import React from 'react';
import './MainPage.css';
import Button from '../../components/Button/Button';
import ProductTable from '../../components/ProductTable/ProductTable';
import { Product } from '../../interfaces/ProductInterface';

const products: Product[] = [
  {
    id: "KatJDS1",
    packsNumber: 24,
    packageType: "компрессия",
    isArchived: true,
    description: "Описание продукции\nВ несколько строк",
    createdAt: "2024-02-01T16:08:24.630Z"
  }
];

const MainPage = () => {
  return (
    <main className='main-page__container'>
      <header className='main-header'>
        <h1>Список выпускаемой продукции</h1>
        <Button text='Создать тип продукции' type='standart' />
      </header>
      <ProductTable products={products} />
    </main>
  );
};

export default MainPage;