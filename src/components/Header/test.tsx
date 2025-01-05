import React from 'react'

import { MemoryRouter } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'
import { fireEvent, render, screen } from '@testing-library/react'

import { Header } from '.'

jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}))

describe('Header', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render Login and Sign up links when the user is not authenticated', () => {
    ;(useAuth as jest.Mock).mockReturnValue({ isAuthenticated: false, logout: jest.fn() })

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Sign up')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('should render the Logout button when the user is authenticated', () => {
    ;(useAuth as jest.Mock).mockReturnValue({ isAuthenticated: true, logout: jest.fn() })

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByText('Logout')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('should call the logout function when the Logout button is clicked', () => {
    const logoutMock = jest.fn()

    ;(useAuth as jest.Mock).mockReturnValue({ isAuthenticated: true, logout: logoutMock })

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText('Logout'))

    expect(logoutMock).toHaveBeenCalled()
  })
})
