import React, { FC } from 'react'

import { ROUTES } from '@/config/routes'

const NotFoundView: FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-lg mt-2">Página não encontrada</p>
      <a href={ROUTES.HOME} className="text-blue-500 mt-4">
        Voltar para a página inicial
      </a>
    </div>
  )
}

export default NotFoundView
