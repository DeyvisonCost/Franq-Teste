import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppRoutes } from '@/routes/AppRoutes'
import { AuthProvider } from '@/store/AuthContext'
import './global.css'
import './styles/tailwind.css'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found in index.html')
}

createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </StrictMode>
)
