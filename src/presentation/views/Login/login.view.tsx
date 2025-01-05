import React from 'react'

import { useLoginModel } from '@/presentation/views/Login/login.model'

export const LoginView = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}: ReturnType<typeof useLoginModel>) => {
  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}
