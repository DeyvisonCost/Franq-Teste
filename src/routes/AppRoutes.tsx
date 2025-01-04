import React, { FC, lazy, Suspense } from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { LoadingFallback } from '@/components/LoadingFallback'
import { ROUTES } from '@/config/routes'
import { MainLayout } from '@/presentation/layouts/MainLayout'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const HomeView = lazy(async () => await import('@/presentation/views/HomeView'))
const LoginView = lazy(async () => await import('@/presentation/views/LoginView'))
const SigninView = lazy(async () => await import('@/presentation/views/SigninView'))
const DashboardView = lazy(async () => await import('@/presentation/views/DashboardView'))
const NotFoundView = lazy(async () => await import('@/presentation/views/NotFoundView'))

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<PublicRoute />}>
              <Route path={ROUTES.HOME} element={<HomeView />} />
              <Route path={ROUTES.LOGIN} element={<LoginView />} />
              <Route path={ROUTES.SIGNIN} element={<SigninView />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path={ROUTES.DASHBOARD} element={<DashboardView />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
