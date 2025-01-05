import React from 'react'

import { useNotFoundModel } from '@/presentation/views/NotFound/notFound.model'

export const NotFoundView = ({ homeRoute }: ReturnType<typeof useNotFoundModel>) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-lg mt-2">Página não encontrada</p>
      <a href={homeRoute} className="text-blue-500 mt-4">
        Voltar para a página inicial
      </a>
    </div>
  )
}
