import React, { FC, lazy, Suspense } from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { LoadingFallback } from '@/components/LoadingFallback'
import { ROUTES } from '@/config/routes'
import { MainLayout } from '@/presentation/layouts/MainLayout'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const Home = lazy(async () => await import('@/presentation/views/Home'))
const Login = lazy(async () => await import('@/presentation/views/Login'))
const Signup = lazy(async () => await import('@/presentation/views/Signup'))
const Dashboard = lazy(async () => await import('@/presentation/views/Dashboard'))
const NotFound = lazy(async () => await import('@/presentation/views/NotFound'))

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<PublicRoute />}>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.SIGNUP} element={<Signup />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
