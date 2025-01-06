import { z } from 'zod'

import { loginSchema } from '@/presentation/views/Login/login.schema'

export type User = {
  email: string
  password: string
}
export type LoginFormValues = z.infer<typeof loginSchema>
