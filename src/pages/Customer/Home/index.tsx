import React, { useState, useEffect } from 'react';
import { Tabs, Row, Col } from 'antd';
import { getProducts, getCategories } from '@/services/QuanLyComRang/apiProduct';
import type { IProduct, ICategory } from '@/models/quanlycomrang/products';
import ProductCard from './components/ProductCard';

const CustomerHome: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setProducts(getProducts());
    setCategories(getCategories());
  }, []);

  const tabItems = [
    { key: 'all', label: 'Tất cả' },
    ...categories.map(cat => ({ key: cat.id, label: cat.name }))
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.categoryId === activeTab);

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      <Tabs activeKey={activeTab} onChange={setActiveTab} size="large" centered>
        {tabItems.map(item => (
          <Tabs.TabPane tab={item.label} key={item.key} />
        ))}
      </Tabs>
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        {filteredProducts.map(product => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default CustomerHome;