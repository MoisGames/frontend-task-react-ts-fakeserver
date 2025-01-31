import axios from 'axios';
import { Product } from '../interfaces/ProductInterface';

const apiClient = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProductTypes = async (): Promise<Product[]> => {
  try {
    const response = await apiClient.get('/productTypes');
    return response.data;
  } catch (error) {
    console.error('Error fetching product types:', error);
    throw error;
  }
};

export const fetchProductById = async (productId: string): Promise<Product> => {
  try {
    const response = await apiClient.get(`/productTypes/${productId}`);
    console.log('Fetched product:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by id:', error);
    throw error;
  }
};

export const deleteProduct = async (productId: string): Promise<void> => {
  try {
    await apiClient.delete(`/productTypes/${productId}`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

export const updateProduct = async (productId: string, updatedData: Partial<Product>): Promise<void> => {
  try {
    await apiClient.patch(`/productTypes/${productId}`, updatedData);
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};