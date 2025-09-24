import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { AppProvider } from './context/AppContext'; // ✅ import করুন

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>   {/* ✅ AppProvider wrap */}
        <App />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
);
