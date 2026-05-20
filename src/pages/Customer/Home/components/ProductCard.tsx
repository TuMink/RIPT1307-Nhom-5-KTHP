import React from 'react';
import { Card, Button, Typography, Tag } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import type { IProduct } from '@/models/quanlycomrang/products';

const ProductCard = ({ product }: { product: IProduct }) => (
  <Card
    hoverable={product.isAvailable}
    style={{ borderRadius: 12, opacity: product.isAvailable ? 1 : 0.6 }}
    cover={<img alt={product.name} src={product.image} style={{ height: 160, objectFit: 'cover' }} />}
  >
    <Typography.Title level={5}>{product.name}</Typography.Title>
    <Typography.Text type="secondary" style={{ fontSize: 12, minHeight: 40, display: 'block' }}>
      {product.description}
    </Typography.Text>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
      <Typography.Text strong style={{ color: '#d4380d', fontSize: 16 }}>
        {product.price.toLocaleString('vi-VN')}đ
      </Typography.Text>
      {product.isAvailable ? (
        <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} onClick={() => alert('Đã thêm giỏ hàng (Sẽ làm ở phần Cart)')} />
      ) : <Tag color="error">Hết hàng</Tag>}
    </div>
  </Card>
);
export default ProductCard;