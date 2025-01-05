import React, { FC } from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { useAuth } from '@/hooks/useAuth'

export const PublicRoute: FC = () => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  const restrictedRoutes = [ROUTES.LOGIN, ROUTES.SIGNUP]
  const isRestrictedRoute = restrictedRoutes.includes(location.pathname)

  if (isAuthenticated && isRestrictedRoute) {
    return <Navigate to={ROUTES.DASHBOARD} />
  }

  return <Outlet />
}
