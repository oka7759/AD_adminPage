import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adlist from './pages/AdList/Adlist';
import Main from './pages/Main/Main';
import { Layout } from 'antd';
import SiderMenu from './components/SiderMenu';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

const { Content } = Layout;

const Router = () => {
  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <SiderMenu />
        <Layout className="site-layout">
          <MainHeader />
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
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/adlist" element={<Adlist />} />
              </Routes>
            </div>
          </Content>

          <MainFooter />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
