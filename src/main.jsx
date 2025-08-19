import React from 'react'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../style.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </AuthProvider>
  
  </React.StrictMode>
)
