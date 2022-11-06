import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import Router from '../Router';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('대시보드', '1', <PieChartOutlined />),
  getItem('광고관리', '2', <DesktopOutlined />),
];
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <Logo>
          <img src="/images/login.png" alt="logo" />
        </Logo>

        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={({ key }) => {
            console.log(key);
          }}
        />
      </Sider>
      <Layout className="site-layout">
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
        <Content
          style={{
            margin: '16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Router />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;

const Logo = styled.div`
  width: calc(100% -30px);
  margin: 15px;

  img {
    width: 100%;
  }
`;

const PageTitle = styled.div`
  width: 100%;
  position: relative;
  h1 {
    font-size: 20px;
    line-height: 30px;
    padding: 10px 0;
    font-weight: 700;
  }
`;
