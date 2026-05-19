// src/services/QuanLyComRang/mockData.ts
import { initStorage } from '@/utils/storage';

export const mockUsers = [
  { id: '1', phone: '0999999999', password: '123', name: 'Super Admin', role: 'admin', isBlocked: false, createdAt: new Date().toISOString() },
  { id: '2', phone: '0888888888', password: '123', name: 'Thu Ngân 1', role: 'staff', isBlocked: false, createdAt: new Date().toISOString() },
  { id: '3', phone: '0777777777', password: '123', name: 'Khách Vip', role: 'customer', isBlocked: false, createdAt: new Date().toISOString() },
];

export const mockCategories = [
  { id: 'c1', name: 'Cơm rang', order: 1 },
  { id: 'c2', name: 'Đồ ăn kèm', order: 2 },
  { id: 'c3', name: 'Đồ uống', order: 3 },
];

export const mockProducts = [
  { id: 'p1', name: 'Cơm rang dưa bò', price: 45000, categoryId: 'c1', description: 'Bò Mỹ, dưa chua nhà làm', image: 'link_anh_1', isAvailable: true },
  { id: 'p2', name: 'Cơm rang thập cẩm', price: 40000, categoryId: 'c1', description: 'Xúc xích, lạp xưởng, rau củ', image: 'link_anh_2', isAvailable: true },
  { id: 'p3', name: 'Trà đá', price: 5000, categoryId: 'c3', description: 'Trà đá giải nhiệt', image: 'link_anh_3', isAvailable: true },
];

export const mockToppings = [
  { id: 't1', name: 'Thêm trứng ốp la', price: 7000, isAvailable: true },
  { id: 't2', name: 'Thêm xúc xích', price: 10000, isAvailable: true },
  { id: 't3', name: 'Thêm lạp xưởng', price: 12000, isAvailable: true },
];

export const bootstrapMockData = () => {
  initStorage('users', mockUsers);
  initStorage('categories', mockCategories);
  initStorage('products', mockProducts);
  initStorage('toppings', mockToppings);
  initStorage('orders', []); 
};