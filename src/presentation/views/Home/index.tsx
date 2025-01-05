import React from 'react'

import { useHomeModel } from '@/presentation/views/Home/home.model'
import { HomeView } from '@/presentation/views/Home/home.view'

const Home = () => {
  const homeModel = useHomeModel()

  return <HomeView {...homeModel} />
}

export default Home
