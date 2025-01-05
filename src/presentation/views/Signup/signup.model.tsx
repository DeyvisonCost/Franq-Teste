import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { signupUseCase } from '@/domain/useCases/AuthUseCases/signupUseCase'

export const useSignupModel = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignup = () => {
    try {
      const response = signupUseCase(email, password)
      alert(response.message)
      navigate(ROUTES.LOGIN)
    } catch (error) {
      alert('Erro ao criar conta')
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
  }
}
