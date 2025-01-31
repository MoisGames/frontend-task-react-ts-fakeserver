import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import Button from '../../components/Button/Button';
import ProductTable from '../../components/ProductTable/ProductTable';
import { fetchProductTypes } from '../../http/api';
import { Product } from '../../interfaces/ProductInterface';

const MainPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProductTypes();
        const sortedProducts = fetchedProducts.sort((a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setProducts(sortedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [products]);

  if (loading) return <div>Loading...</div>;
  if (!products.length) return <div>No data available</div>;

  const handleCreateClick = () => {
    console.log('Create clicked');
    navigate('/create');
  };

  return (
    <main className='main-page__container'>
      <header className='main-header'>
        <h1>Список выпускаемой продукции</h1>
        <Button text='Создать тип продукции' type='standart' onClick={handleCreateClick} />
      </header>
        <ProductTable products={products} />
    </main>
  );
};

export default MainPage;