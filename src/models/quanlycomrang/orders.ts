export enum OrderStatus {
  PENDING = 'pending',
  COOKING = 'cooking',
  READY = 'ready',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum PaymentStatus {
  UNPAID = 'unpaid',
  PAID = 'paid',
}

export interface IOrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  toppings: string[]; 
  note?: string;      
}

export interface IOrder {
  id: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  items: IOrderItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
}