import { User } from '@/domain/models/User'

export const AuthService = {
  signup(user: User) {
    const newUser = new User(user.email, user.password, user.name)
    localStorage.setItem('user', JSON.stringify(newUser))
    return { message: 'Usuário registrado com sucesso!' }
  },

  login: (email: string, password: string) => {
    if (!email || !password) {
      throw new Error('Email e senha são obrigatórios.')
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}')

    if (user.email === email && user.password === password) {
      const token = 'fake-jwt-token'
      localStorage.setItem('token', token)
      return { token }
    }
    throw new Error('Credenciais inválidas')
  },

  isAuthenticated: () => {
    const token = localStorage.getItem('token')
    return !!token
  },

  logout: () => {
    localStorage.removeItem('token')
  },
}
