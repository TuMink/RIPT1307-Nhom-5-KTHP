import { getData, updateItem } from '@/utils/storage';
import type { IUser } from '@/models/quanlycomrang/users';

export const getAllUsers = (): IUser[] => getData<IUser>('users');

export const toggleBlockUser = (userId: string, isBlocked: boolean) => {
  updateItem('users', userId, { isBlocked });
};