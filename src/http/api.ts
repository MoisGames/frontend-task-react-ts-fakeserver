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