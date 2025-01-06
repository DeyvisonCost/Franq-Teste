import React from 'react'

import { ROUTES } from '@/config/routes'

export const Footer = () => {
  return (
    <section className="bg-[#0C111D] text-white py-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">Comece a investir agora!</h2>
      <p className="mb-6">Saiba mais sobre o mercado financeiro e acompanhe todas as suas cotações em tempo real.</p>
      <a href={ROUTES.SIGNUP} className="bg-white text-[#0C111D] px-6 py-3 rounded-full text-lg font-semibold">
        Cadastre-se
      </a>
    </section>
  )
}
