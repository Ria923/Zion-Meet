import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // 確保 App 的導入路徑正確
import './index.css'; // 全局樣式

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
