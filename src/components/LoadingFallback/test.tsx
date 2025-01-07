import React from 'react'

import { render, screen } from '@testing-library/react'

import { LoadingFallback } from '.'

describe('LoadingFallback', () => {
  it('renders the loading spinner correctly', () => {
    render(<LoadingFallback />)

    const spinner = screen.getByTestId('loading-spinner')
    expect(spinner).toBeInTheDocument()

    expect(spinner).toHaveClass('animate-spin')
    expect(spinner).toHaveClass('h-16')
    expect(spinner).toHaveClass('w-16')

    const backgroundDiv = screen.getByTestId('loading-background')
    expect(backgroundDiv).toBeInTheDocument()
  })
})
