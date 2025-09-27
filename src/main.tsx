
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';


function AppWithLenis() {
  // useLenis();
  return <App />;
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithLenis />
  </StrictMode>
);
