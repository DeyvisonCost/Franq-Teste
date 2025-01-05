import React from 'react'

import { useDashboardModel } from '@/presentation/views/Dashboard/dashboard.model'
import { DashboardView } from '@/presentation/views/Dashboard/dashboard.view'

const Dashboard = () => {
  const dashboardModel = useDashboardModel()

  return <DashboardView {...dashboardModel} />
}

export default Dashboard
