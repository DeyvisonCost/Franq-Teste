import { z } from 'zod'

import { signUpSchema } from '@/presentation/views/Signup/signup.schema'

export type SignUpUser = {
  email: string
  password: string
  name?: string
}
export type SignUpFormValues = z.infer<typeof signUpSchema>
