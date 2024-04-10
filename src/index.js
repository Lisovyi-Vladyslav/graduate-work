import React from 'react';
import ReactDOM from 'react-dom/client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/reset.css';
import './index.css';

import App from "./app";


import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'
import { baseTheme } from 'app/styles/theme';
import { Global } from 'app/styles/Global';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'app/redux/store';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={baseTheme}>
  <Global />
  <Normalize />
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
    </ThemeProvider>
  // </React.StrictMode>
);
