import { getData, updateItem } from '@/utils/storage';
import type { IProduct, ICategory, ITopping } from '@/models/quanlycomrang/products';
export const getCategories = (): ICategory[] => getData<ICategory>('categories').sort((a, b) => a.order - b.order);
export const getProducts = (): IProduct[] => getData<IProduct>('products');
export const getToppings = (): ITopping[] => getData<ITopping>('toppings');
export const toggleProductAvailability = (id: string, isAvailable: boolean) => {
  updateItem('products', id, { isAvailable });
};