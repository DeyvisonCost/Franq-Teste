import React, { FC, Fragment } from 'react'

import { Link } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { useAuth } from '@/hooks/useAuth'

export const Header: FC = () => {
  const { isAuthenticated, logout } = useAuth()
  return (
    <header className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-lg font-bold">Finanças Pessoais</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to={ROUTES.HOME} className="hover:underline">
              Home
            </Link>
          </li>
          {!isAuthenticated ? (
            <Fragment>
              <li>
                <Link to={ROUTES.LOGIN} className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SIGNUP} className="hover:underline">
                  Sign up
                </Link>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <button onClick={logout} className="text-red-500">
                Logout
              </button>
            </Fragment>
          )}
          <li>
            <Link to={ROUTES.DASHBOARD} className="hover:underline">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
