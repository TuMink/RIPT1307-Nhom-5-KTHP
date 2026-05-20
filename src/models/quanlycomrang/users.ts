export enum UserRole {
  ADMIN = 'admin',
  STAFF = 'staff',
  CUSTOMER = 'customer',
}

export interface IUser {
  id: string;
  phone: string;
  password?: string;
  name: string;
  role: UserRole;
  isBlocked: boolean;
  createdAt: string;
}