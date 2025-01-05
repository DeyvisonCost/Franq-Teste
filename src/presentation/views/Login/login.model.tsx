import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { useAuth } from '@/hooks/useAuth'

export const useLoginModel = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    try {
      login(email, password)
      navigate(ROUTES.DASHBOARD)
    } catch (error) {
      alert(error)
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  }
}
