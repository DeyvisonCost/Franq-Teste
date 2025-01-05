import React from 'react'

import { Header } from '@/components/Header'
import { renderWithProviders } from '@/utils/test-utils'

describe('Header Component', () => {
  it('should render correctly', () => {
    const { getByText } = renderWithProviders(<Header />)
    expect(getByText('Finanças Pessoais')).toBeInTheDocument()
  })
})
