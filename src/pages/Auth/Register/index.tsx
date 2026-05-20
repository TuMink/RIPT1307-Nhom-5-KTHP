import React from 'react';
import { message } from 'antd';
import { history } from 'umi'; 
import { register } from '@/utils/auth';
import RegisterForm from './components/RegisterForm';
import styles from './style.less';

const RegisterPage: React.FC = () => {
  const handleRegister = (values: any) => {
    const result = register(values.phone, values.password, values.name);
    if (result.success) {
      message.success(result.message);
      history.push('/user/login');
    } else {
      message.error(result.message);
    }
  };
  return (
    <div className={styles['register-container']}>
      <RegisterForm onFinish={handleRegister} />
    </div>
  );
};
export default RegisterPage;