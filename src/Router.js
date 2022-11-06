import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adlist from './pages/AdList/Adlist';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/adlist" element={<Adlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
