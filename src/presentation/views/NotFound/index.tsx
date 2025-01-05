import React from 'react'

import { useNotFoundModel } from '@/presentation/views/NotFound/notFound.model'
import { NotFoundView } from '@/presentation/views/NotFound/notFound.view'

const NotFound = () => {
  const notFoundModel = useNotFoundModel()

  return <NotFoundView {...notFoundModel} />
}

export default NotFound
