import { User } from '@/domain/models/User'
import { AuthService } from '@/services/AuthService'

export const loginUseCase = async (email: string, password: string, name?: string) => {
  const user = new User(email, password, name)
  return AuthService.login(user.email, user.password)
}
