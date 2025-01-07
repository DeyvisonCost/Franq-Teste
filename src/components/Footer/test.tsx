import React from 'react'

import { ROUTES } from '@/config/routes'
import { render, screen } from '@testing-library/react'

import { Footer } from '.'

describe('Footer', () => {
  it('renders the footer with correct content', () => {
    render(<Footer />)

    expect(screen.getByText(/Comece a investir agora!/i)).toBeInTheDocument()

    expect(screen.getByText(/Saiba mais sobre o mercado financeiro/i)).toBeInTheDocument()

    const signupLink = screen.getByRole('link', { name: /Cadastre-se/i })
    expect(signupLink).toBeInTheDocument()
    expect(signupLink).toHaveAttribute('href', ROUTES.SIGNUP)
  })
})
