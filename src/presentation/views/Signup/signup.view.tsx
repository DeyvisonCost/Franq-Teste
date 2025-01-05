import React from 'react'

import { useSignupModel } from '@/presentation/views/Signup/signup.model'

export const SignupView = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSignup,
}: ReturnType<typeof useSignupModel>) => {
  return (
    <div>
      <h2>Criar conta</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Criar</button>
    </div>
  )
}
