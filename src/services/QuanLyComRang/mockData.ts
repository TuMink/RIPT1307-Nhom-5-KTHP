import { initStorage } from '@/utils/storage';
import { UserRole } from '@/models/quanlycomrang/users';
export const mockUsers = [
    { id: '1', phone: '0999999999', password: '123', name: 'Super Admin', role: UserRole.ADMIN, isBlocked: false, createdAt: new Date().toISOString() },
    { id: '2', phone: '0888888888', password: '123', name: 'Thu Ngân 1', role: UserRole.STAFF, isBlocked: false, createdAt: new Date().toISOString() },
    { id: '3', phone: '0777777777', password: '123', name: 'Khách Vip', role: UserRole.CUSTOMER, isBlocked: false, createdAt: new Date().toISOString() },
];
export const mockCategories = [
    { id: 'c1', name: 'Cơm rang', order: 1 },
    { id: 'c2', name: 'Đồ ăn kèm', order: 2 },
    { id: 'c3', name: 'Đồ uống', order: 3 },
];
export const mockProducts = [
    { id: 'p1', name: 'Cơm rang dưa bò', price: 45000, categoryId: 'c1', description: 'Bò Mỹ, dưa chua nhà làm', image: '/images/com-rang-dua-bo.jpg', isAvailable: true },
    { id: 'p2', name: 'Cơm rang thập cẩm', price: 40000, categoryId: 'c1', description: 'Xúc xích, lạp xưởng, rau củ', image: '/images/com-rang-thap-cam.jpg', isAvailable: true },
    { id: 'p3', name: 'Trà đá', price: 5000, categoryId: 'c3', description: 'Trà đá giải nhiệt', image: '/images/tra-da.jpg', isAvailable: true },
];
export const mockToppings = [
    { id: 't1', name: 'Trứng ốp la', price: 7000, isAvailable: true },
    { id: 't2', name: 'Xúc xích', price: 10000, isAvailable: true },
    { id: 't3', name: 'Lạp xưởng', price: 12000, isAvailable: true },
];
export const bootstrapMockData = () => {
    initStorage('users', mockUsers);
    initStorage('categories', mockCategories);
    initStorage('products', mockProducts);
    initStorage('toppings', mockToppings);
    initStorage('orders', []); 
};