export interface AuthContextProps {
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
}