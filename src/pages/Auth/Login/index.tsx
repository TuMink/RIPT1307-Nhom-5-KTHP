// src/pages/Auth/Login/index.tsx
import React from 'react';
import { message } from 'antd';
import { history, useModel } from 'umi'; 
import { login } from '@/utils/auth';
import { UserRole } from '@/models/quanlycomrang/users'; // Import Enum vai trò
import LoginForm from './components/LoginForm';
import styles from './style.less';

const LoginPage: React.FC = () => {
  const { setInitialState } = useModel('@@initialState');

  const handleLogin = async (values: any) => {
    const result = login(values.phone, values.password);
    
    if (result.success) {
      message.success('Đăng nhập thành công!');
      
      // Cập nhật trạng thái global và đợi hệ thống nạp dữ liệu xong xuôi
      await setInitialState((s: any) => ({ ...s, currentUser: result.user }));
      
      // ĐIỀU HƯỚNG TRỰC TIẾP: Xác định đúng cổng giao diện để đẩy user vào luôn
      if (result.user.role === UserRole.CUSTOMER) {
        history.push('/customer/home');
      } else if (result.user.role === UserRole.STAFF) {
        history.push('/staff/pos');
      } else if (result.user.role === UserRole.ADMIN) {
        history.push('/admin/dashboard');
      }
    } else {
      message.error(result.message);
    }
  };

  return (
    <div className={styles['login-container']}>
      <LoginForm onFinish={handleLogin} />
    </div>
  );
};

export default LoginPage;