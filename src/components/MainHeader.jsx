import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Avatar } from 'antd';

const MainHeader = () => {
  const { Header } = Layout;
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: '0 20px',
        textAlign: 'right',
      }}
    >
      <Avatar
        style={{
          backgroundColor: '#87d068',
          marginRight: '10px',
        }}
        icon={<UserOutlined />}
      />
      원티드님
    </Header>
  );
};

export default MainHeader;
