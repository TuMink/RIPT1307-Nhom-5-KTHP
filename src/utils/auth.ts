import { getData, saveData, insertItem } from './storage';
import { UserRole } from '@/models/quanlycomrang/users';

export const login = (phone: string, pass: string) => {
  const users = getData<any>('users');
  const user = users.find(u => u.phone === phone && u.password === pass);
  
  if (user) {
    if (user.isBlocked) return { success: false, message: 'Tài khoản đã bị khóa!' };
    
    const { password, ...sessionUser } = user;
    sessionStorage.setItem('currentUser', JSON.stringify(sessionUser));
    return { success: true, user: sessionUser };
  }
  return { success: false, message: 'Sai số điện thoại hoặc mật khẩu!' };
};
export const register = (phone: string, pass: string, name: string) => {
  const users = getData<any>('users');
  const exists = users.find(u => u.phone === phone);
  if (exists) return { success: false, message: 'Số điện thoại đã tồn tại!' };
  const newUser = {
    phone,
    password: pass,
    name,
    role: UserRole.CUSTOMER,
    isBlocked: false,
    createdAt: new Date().toISOString()
  };
  insertItem('users', newUser);
  return { success: true, message: 'Đăng ký thành công!' };
};
export const getCurrentUser = () => {
  const userStr = sessionStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};
export const logout = () => {
  sessionStorage.removeItem('currentUser');
  window.location.href = '/user/login'; 
};