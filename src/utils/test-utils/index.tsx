import React, { ReactNode } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { AuthProvider } from '@/store/AuthContext'
import { render as rtlRender } from '@testing-library/react'

const customRender = (ui: ReactNode, options = {}) =>
  rtlRender(ui, {
    wrapper: ({ children }) => (
      <Router>
        <AuthProvider>{children}</AuthProvider>
      </Router>
    ),
    ...options,
  })

export * from '@testing-library/react'
export { customRender as renderWithProviders }
