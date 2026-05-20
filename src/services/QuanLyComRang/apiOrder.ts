import { getData, insertItem, updateItem } from '@/utils/storage';
import type { IOrder } from '@/models/quanlycomrang/orders';

export const getAllOrders = (): IOrder[] => getData<IOrder>('orders').sort((a, b) => 
  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
);

export const getCustomerOrders = (customerId: string): IOrder[] => {
  const orders = getAllOrders();
  return orders.filter(o => o.customerId === customerId);
};

export const createOrder = (orderData: Omit<IOrder, 'id'>) => {
  insertItem('orders', orderData);
};

export const updateOrderStatus = (orderId: string, status: IOrder['status']) => {
  updateItem('orders', orderId, { status });
};