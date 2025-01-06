import React, { FC, Fragment } from 'react'

import { Link } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { useAuth } from '@/hooks/useAuth'

export const Header: FC = () => {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="bg-white shadow-md py-2 px-6 flex justify-between items-center">
      <Link to={ROUTES.HOME}>
        <img src="img/icon.png" alt="Logo" className="w-12 h-12 rounded-md object-cover" />
      </Link>

      <nav className="ml-auto">
        <ul className="flex items-center justify-end gap-8">
          <li>
            <Link
              to={ROUTES.DASHBOARD}
              className={`text-gray-700 text-sm font-medium py-1 px-3 rounded-md transition-colors duration-200 ${
                !isAuthenticated ? 'cursor-not-allowed opacity-50' : 'hover:text-gray-500'
              }`}
              aria-disabled={!isAuthenticated ? true : undefined}
            >
              Dashboard
            </Link>
          </li>
          {!isAuthenticated ? (
            <Fragment>
              <li>
                <Link
                  to={ROUTES.LOGIN}
                  className="text-gray-700 text-sm font-medium py-1 px-3 rounded-md transition-colors duration-200 hover:text-gray-500"
                >
                  Login
                </Link>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <button
                onClick={logout}
                className="text-gray-700 text-sm font-medium py-1 px-3 rounded-md transition-colors duration-200 hover:text-gray-500"
              >
                Logout
              </button>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  )
}
