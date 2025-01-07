import { AuthService } from '@/services/AuthService'

import { loginUseCase } from '.'

jest.mock('@/services/AuthService', () => ({
  AuthService: {
    login: jest.fn(),
  },
}))

describe('loginUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call AuthService.login with correct email and password', async () => {
    const email = 'test@example.com'
    const password = 'password123'

    await loginUseCase(email, password)

    expect(AuthService.login).toHaveBeenCalledWith(email, password)
    expect(AuthService.login).toHaveBeenCalledTimes(1)
  })

  it('should call AuthService.login with correct email and password when name is not provided', async () => {
    const email = 'test@example.com'
    const password = 'password123'

    await loginUseCase(email, password)

    expect(AuthService.login).toHaveBeenCalledWith(email, password)
    expect(AuthService.login).toHaveBeenCalledTimes(1)
  })
})
