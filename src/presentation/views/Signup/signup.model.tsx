import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { signupUseCase } from '@/domain/useCases/AuthUseCases/signupUseCase'
import { SignupFormValues } from '@/presentation/views/Signup/signup.types'
import { zodResolver } from '@hookform/resolvers/zod'

import { signUpSchema } from './signup.schema'

export const useSignupModel = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = (data: SignupFormValues) => {
    const { name, email, password } = data
    try {
      const response = signupUseCase({ name, email, password })
      alert(response.message)
      navigate(ROUTES.LOGIN)
    } catch (error) {
      alert('Erro ao criar conta')
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}
