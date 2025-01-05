import React, { Fragment } from 'react'

import { useDashboardModel } from '@/presentation/views/Dashboard/dashboard.model'

export const DashboardView = ({ handleAlert }: ReturnType<typeof useDashboardModel>) => {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <button onClick={handleAlert}>ALERT</button>
    </Fragment>
  )
}
