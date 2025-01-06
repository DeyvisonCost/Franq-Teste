import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSignupModel } from '@/presentation/views/Signup/signup.model'

export const SignupView = ({ errors, register, handleSubmit, onSubmit }: ReturnType<typeof useSignupModel>) => {
  return (
    <main className="h-screen flex flex-col md:flex-row w-full">
      <div className="hidden md:block md:w-3/5 bg-primary-foreground">
      <img src="img/backgroundLogin.png" alt="background" className="object-cover w-full h-full" loading="lazy" />

      </div>

      <section className="w-full md:w-2/5 flex items-center justify-center p-6 bg-background">
        <div className="flex items-center justify-center w-full h-screen md:h-auto">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter">Criar conta</CardTitle>
              <CardDescription>Preencha os campos para criar sua conta</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome" {...register('name')} />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" placeholder="Email@gmail.com" type="email" {...register('email')} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" placeholder="Senha" type="password" {...register('password')} />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <div className="mb-4">
                  <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  <Input
                    id="confirmPassword"
                    placeholder="Repita a senha"
                    type="password"
                    {...register('confirmPassword')}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <Button className="mt-6 w-full" type="submit">
                  Criar Conta
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
