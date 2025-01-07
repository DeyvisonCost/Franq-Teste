import { AuthService } from '@/services/AuthService'

import { isAuthenticatedUseCase } from '.'

jest.mock('@/services/AuthService', () => ({
  AuthService: {
    isAuthenticated: jest.fn(),
  },
}))

describe('isAuthenticatedUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return true when AuthService.isAuthenticated() returns true', () => {
    ;(AuthService.isAuthenticated as jest.Mock).mockReturnValue(true)

    const result = isAuthenticatedUseCase()
    expect(result).toBe(true)

    expect(AuthService.isAuthenticated).toHaveBeenCalledTimes(1)
  })

  it('should return false when AuthService.isAuthenticated() throws an error', () => {
    ;(AuthService.isAuthenticated as jest.Mock).mockImplementation(() => {
      throw new Error('Erro ao verificar autenticação')
    })

    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})
    const result = isAuthenticatedUseCase()

    expect(result).toBe(false)
    expect(alertSpy).toHaveBeenCalledWith('Erro ao verificar autenticação:')
    expect(AuthService.isAuthenticated).toHaveBeenCalledTimes(1)

    alertSpy.mockRestore()
  })
})
