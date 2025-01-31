import React from 'react';
import './ProductTable.css';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { deleteProduct } from '../../http/api';
import { Product } from '../../interfaces/ProductInterface';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const getStatus = (isArchived: boolean) => isArchived ? 'Архив' : 'Активно';

interface ProductTableProps {
  products: Product[];
  loadProducts: () => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, loadProducts }) => {
  if (!products || products.length === 0) return <div>Нет данных для отображения</div>;

  const handleEditClick = (id: string) => {
    console.log(`Edit clicked for product with id: ${id}`);
  };

  const handleDeleteClick = async (id: string) => {
    if (!id) {
      console.error('No product ID provided');
      return;
    }

    const userConfirmed = window.confirm('Вы уверены, что хотите удалить этот продукт?');

    if (userConfirmed) {
      try {
        await deleteProduct(id);
        console.log('Product deleted successfully');
        alert('Продукт успешно удален');
        loadProducts();
      } catch (error) {
        console.error('Failed to delete product:', error);
        alert('Ошибка при удалении продукта');
      }
    }
  };

  const handleQuestionClick = (description: string) => {
    alert(description || 'Нет описания');
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
                <ButtonIcon type="question" onClick={() => handleQuestionClick(product.description)} product={product} />
              </td>
              <td>
                <div className='icons-button__container'>
                  <ButtonIcon type="pen" onClick={() => handleEditClick(product.id)} product={product} />
                  <ButtonIcon type="trash" onClick={() => handleDeleteClick(product.id)} product={product} />
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