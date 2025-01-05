import { AuthService } from '@/services/AuthService'

export const logoutUseCase = () => {
  try {
    AuthService.logout()
  } catch (error) {
    throw new Error('Não foi possível realizar o logout. Tente novamente.')
  }
}
