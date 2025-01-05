import { AuthService } from '@/services/AuthService'

export const isAuthenticatedUseCase = (): boolean => {
  try {
    return AuthService.isAuthenticated()
  } catch (error) {
    alert('Erro ao verificar autenticação:')
    return false
  }
}
