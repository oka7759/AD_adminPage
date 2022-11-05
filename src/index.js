import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import variables from './styles/variables';
import { Provider } from 'react-redux';
import store from './store/store';
import MainLayout from './components/MainLayout';
import 'react-datepicker/dist/react-datepicker.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <GlobalStyle />
    <Provider store={store}>
      <MainLayout />
    </Provider>
  </ThemeProvider>
);
