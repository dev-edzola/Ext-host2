import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.MODE === 'production' ? "/Ext-host2" : "/"}>
    <App />
  </BrowserRouter>
);
