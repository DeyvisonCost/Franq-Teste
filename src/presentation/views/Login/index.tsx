import React from 'react'

import { useLoginModel } from '@/presentation/views/Login/login.model'
import { LoginView } from '@/presentation/views/Login/login.view'

const Login = () => {
  const loginModel = useLoginModel()

  return <LoginView {...loginModel} />
}

export default Login
