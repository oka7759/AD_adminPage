import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const SiderMenu = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { Sider } = Layout;

  const [page, setPage] = useState('1');
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

  const onClick = e => {
    setPage(e.key);

    e.key === '1' ? navigate('/') : navigate('/adlist');
  };

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
    >
      <Link to="/">
        <Logo>
          <img src="/images/login.png" alt="logo" />
        </Logo>
      </Link>

      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
        onClick={onClick}
      />
    </Sider>
  );
};

export default SiderMenu;
const Logo = styled.div`
  width: calc(100% -30px);
  margin: 15px;

  img {
    width: 100%;
  }
`;
