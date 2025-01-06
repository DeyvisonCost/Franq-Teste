import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema } from '@/presentation/views/Login/login.schema'
import { LoginFormValues } from '@/presentation/views/Login/login.types'
import { zodResolver } from '@hookform/resolvers/zod'

export const useLoginModel = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormValues) => {
    try {
      login(data.email, data.password)
      navigate(ROUTES.DASHBOARD)
    } catch (error) {
      alert(error)
    }
  }

  const navigateToSignup = () => {
    navigate(ROUTES.SIGNUP)
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    navigateToSignup,
  }
}
