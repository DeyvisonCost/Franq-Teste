import React, { createContext, ReactNode, useEffect, useState } from 'react'

import { isAuthenticatedUseCase } from '@/domain/useCases/AuthUseCases/isAuthenticatedUseCase'
import { loginUseCase } from '@/domain/useCases/AuthUseCases/loginUseCase'
import { logoutUseCase } from '@/domain/useCases/AuthUseCases/logoutUseCase'
import { AuthContextProps } from '@/store/AuthContext/types'

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const hasToken = isAuthenticatedUseCase()
    setIsAuthenticated(hasToken)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      await loginUseCase(email, password)
      setIsAuthenticated(true)
    } catch (error) {
      alert('Falha no login. Verifique suas credenciais e tente novamente.')
    }
  }

  const logout = () => {
    try {
      logoutUseCase()
      setIsAuthenticated(false)
    } catch (error) {
      alert('Não foi possível realizar o logout. Tente novamente.')
    }
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}
