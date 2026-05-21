import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import { history } from 'umi';
import styles from '../style.less';

const { Title } = Typography;

const RegisterForm = ({ onFinish }: { onFinish: (values: any) => void }) => (
  <Card className={styles['register-card']}>
    <div className={styles['register-header']}>
      <Title level={3} className={styles['register-title']}>CƠM RANG TAKE-AWAY</Title>
      <p>Đăng ký tài khoản</p>
    </div>
    
    <Form onFinish={onFinish} layout="vertical" size="large" className={styles['register-form']}>
      <Form.Item name="name" rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}>
        <Input prefix={<UserOutlined />} placeholder="Tên của bạn" />
      </Form.Item>
      
      <Form.Item 
        name="phone" 
        rules={[
          { required: true, message: 'Vui lòng nhập số điện thoại!' },
          {
            validator(_, value) {
              if (!value) {
                return Promise.resolve();
              }
              if (value.length === 10 && /^\d{10}$/.test(value)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Số điện thoại không hợp lệ!'));
            },
          }
        ]}
      >
        <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
      </Form.Item>
      
      <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item 
        name="confirmPassword" 
        dependencies={['password']}
        rules={[
          { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
            },
          }),
        ]} 
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Xác nhận mật khẩu" />
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" htmlType="submit" block className={styles['register-submit-btn']}>
          ĐĂNG KÝ
        </Button>
      </Form.Item>
      <div className={styles['register-footer']}>
        Đã có tài khoản? <a onClick={() => history.push('/user/login')}>Đăng nhập ngay</a>
      </div>
    </Form>
  </Card>
);

export default RegisterForm;