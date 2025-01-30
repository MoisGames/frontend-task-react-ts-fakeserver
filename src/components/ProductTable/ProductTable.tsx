import React from 'react';
import './ProductTable.css';
import { Product } from '../../interfaces/ProductInterface';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const getStatus = (isArchived: boolean) => {
  return isArchived ? 'Архив' : 'Активно';
};

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>Нет данных для отображения</div>;
  }

  const handleEditClick = (id: string) => {
    console.log(`Edit clicked for product with id: ${id}`);
  };

  const handleDeleteClick = (id: string) => {
    console.log(`Delete clicked for product with id: ${id}`);
  };

  const handleQuestionClick = (id: string) => {
    console.log(`Question clicked for product with id: ${id}`);
  };

  return (
    <div className='table-container'>
      <table className='product-table'>
        <thead>
          <tr>
            <th>№</th>
            <th>Кол-во пачек</th>
            <th>Тип упаковки</th>
            <th>Дата создания</th>
            <th>Статус</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.packsNumber}</td>
              <td>{product.packageType}</td>
              <td>{formatDate(product.createdAt)}</td>
              <td>{getStatus(product.isArchived)}</td>
              <td>
                <ButtonIcon type="question" onClick={() => handleQuestionClick(product.id)} />
              </td>
              <td>
                <div className='icons-button__container'>
                  <ButtonIcon type="pen" onClick={() => handleEditClick(product.id)} />
                  <ButtonIcon type="trash" onClick={() => handleDeleteClick(product.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;