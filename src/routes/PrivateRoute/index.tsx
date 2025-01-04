import React, { FC } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { useAuth } from '@/hooks/useAuth'

export const PrivateRoute: FC = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
}
