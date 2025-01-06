import { User } from '@/domain/models/User'
import { AuthService } from '@/services/AuthService'

type SignupParams = {
  email: string
  password: string
  name?: string
}

export const signupUseCase = ({ email, password, name }: SignupParams) => {
  try {
    const user = new User(email, password, name)
    return AuthService.signup(user)
  } catch (error) {
    throw new Error('Não foi possível registrar o usuário. Tente novamente.')
  }
}
