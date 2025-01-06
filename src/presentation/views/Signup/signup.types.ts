import { z } from 'zod'

import { signUpSchema } from '@/presentation/views/Signup/signup.schema'

export interface SignupFormValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type SignUpFormValues = z.infer<typeof signUpSchema>
