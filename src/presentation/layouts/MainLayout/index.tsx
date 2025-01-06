import React, { FC } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Header } from '@/components/Header'
import { ROUTES } from '@/config/routes'

export const MainLayout: FC = () => {
  const location = useLocation()

  const hideHeaderRoutes = [ROUTES.LOGIN, ROUTES.SIGNUP]

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}
