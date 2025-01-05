import { User } from '@/domain/models/User'
import { AuthService } from '@/services/AuthService'

export const registerUseCase = (email: string, password: string, name?: string) => {
  try {
    const user = new User(email, password, name)
    return AuthService.register(user)
  } catch (error) {
    throw new Error('Não foi possível registrar o usuário. Tente novamente.')
  }
}
