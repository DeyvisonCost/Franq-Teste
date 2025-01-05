import React, { Fragment } from 'react'

import { useHomeModel } from '@/presentation/views/Home/home.model'

export const HomeView = ({ handleAlert }: ReturnType<typeof useHomeModel>) => {
  return (
    <Fragment>
      <h1>Home</h1>
      <button onClick={handleAlert}>ALERT</button>
    </Fragment>
  )
}
