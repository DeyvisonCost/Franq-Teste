import React, { Fragment } from 'react'

import { useAuth } from '@/hooks/useAuth'

const DashboardView = () => {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <Fragment>
      DashboardView <button onClick={handleLogout}>LOGOUT</button>
    </Fragment>
  )
}

export default DashboardView
