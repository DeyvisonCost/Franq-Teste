import React from 'react'

import { useSignupModel } from '@/presentation/views/Signup/signup.model'
import { SignupView } from '@/presentation/views/Signup/signup.view'

const Signup = () => {
  const signupModel = useSignupModel()

  return <SignupView {...signupModel} />
}

export default Signup
