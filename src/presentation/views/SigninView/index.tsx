import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { registerUseCase } from '@/domain/useCases/AuthUseCases/registerUseCase'

const SigninView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = () => {
    try {
      const response = registerUseCase(email, password)
      alert(response.message)
      navigate(ROUTES.LOGIN)
    } catch (error) {
      alert('Erro ao criar conta')
    }
  }

  return (
    <div>
      <h2>Criar conta</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Criar</button>
    </div>
  )
}

export default SigninView
