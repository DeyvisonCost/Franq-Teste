export interface AuthContextProps {
  isAuthenticated: boolean
  login: (email: string, password: string, name?: string) => void
  logout: () => void
}
