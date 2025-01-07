import { AuthService } from '@/services/AuthService'

import { logoutUseCase } from '.'

jest.mock('@/services/AuthService')

describe('logoutUseCase', () => {
  it('should call AuthService.logout', () => {
    const logoutMock = jest.spyOn(AuthService, 'logout').mockImplementation(() => {})

    logoutUseCase()

    expect(logoutMock).toHaveBeenCalledTimes(1)
  })

  it('should throw an error when logout fails', () => {
    jest.spyOn(AuthService, 'logout').mockImplementation(() => {
      throw new Error('Logout failed')
    })

    expect(() => logoutUseCase()).toThrow('Não foi possível realizar o logout. Tente novamente.')
  })
})
