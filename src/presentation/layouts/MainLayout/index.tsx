import React, { FC } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageTitle } from '@/components/PageTitle'
import { ROUTES } from '@/config/routes'

export const MainLayout: FC = () => {
  const location = useLocation()

  const hideHeaderRoutes = [ROUTES.LOGIN, ROUTES.SIGNUP]
  const hideFooterAndTitleRoutes = [ROUTES.LOGIN, ROUTES.SIGNUP]

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <main className="flex-grow">
        {!hideFooterAndTitleRoutes.includes(location.pathname) && <PageTitle />}

        <Outlet />
      </main>

      {!hideFooterAndTitleRoutes.includes(location.pathname) && <Footer />}
    </div>
  )
}
