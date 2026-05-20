import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import { history } from 'umi';
import styles from '../style.less';

const { Title } = Typography;

const LoginForm = ({ onFinish }: { onFinish: (values: any) => void }) => (
  <Card className={styles['login-card']}>
    <div className={styles['login-header']}>
      <Title level={3} className={styles['login-title']}>CƠM RANG TAKE-AWAY</Title>
      <p>Đăng nhập hệ thống</p>
    </div>
    
    <Form onFinish={onFinish} layout="vertical" size="large" className={styles['login-form']}>
      <Form.Item name="phone" rules={[{ required: true, message: 'Nhập số điện thoại!' }]}>
        <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Nhập mật khẩu!' }]}>
        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block className={styles['login-submit-btn']}>
          ĐĂNG NHẬP
        </Button>
      </Form.Item>
      <div className={styles['login-footer']}>
        Chưa có tài khoản? <a onClick={() => history.push('/user/register')}>Đăng ký ngay</a>
      </div>
    </Form>
  </Card>
);

export default LoginForm;