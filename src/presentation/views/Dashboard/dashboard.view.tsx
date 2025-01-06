import React, { Fragment } from 'react'

import { Button } from '@/components/ui/button'
import { useDashboardModel } from '@/presentation/views/Dashboard/dashboard.model'

export const DashboardView = ({ handleAlert }: ReturnType<typeof useDashboardModel>) => {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <Button onClick={handleAlert}>ALERT</Button>
    </Fragment>
  )
}
