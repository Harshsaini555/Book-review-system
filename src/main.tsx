import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from "./context/AuthContext.tsx";
import { ThemeProvider } from './provider/ThemeProvider.tsx';
import { TooltipProvider } from './components/ui/tooltip.tsx';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ThemeProvider>
      <TooltipProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </TooltipProvider>
    </ThemeProvider>
  </AuthProvider>
)
