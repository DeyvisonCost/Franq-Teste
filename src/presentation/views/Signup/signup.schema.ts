import * as z from 'zod'

export const signUpSchema = z
  .object({
    name: z.string().min(1, 'O nome é obrigatório'),
    email: z.string().email('Digite um e-mail válido'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não correspondem',
    path: ['confirmPassword'],
  })
