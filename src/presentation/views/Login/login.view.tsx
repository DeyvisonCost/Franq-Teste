import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useLoginModel } from '@/presentation/views/Login/login.model'

export const LoginView = ({
  errors,
  register,
  handleSubmit,
  onSubmit,
  navigateToSignup,
}: ReturnType<typeof useLoginModel>) => {
  return (
    <main className="h-screen flex flex-col md:flex-row w-full">
      <div className="hidden md:block md:w-3/5 bg-primary-foreground">
        <img src="img/backgroundLogin.png" alt="background" className="object-cover w-full h-full" />
      </div>

      <section className="w-full md:w-2/5 flex items-center justify-center p-6 bg-background">
        <div className="flex items-center justify-center w-full h-screen md:h-auto">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter">Entre com sua conta</CardTitle>
              <CardDescription>Entre com suas credenciais para acessar sua conta</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
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

                <Button className="mt-6 w-full" type="submit">
                  Entrar
                </Button>
              </form>

              <div className="flex items-center gap-3 mt-6">
                <Separator />
                <span className="text-xs text-muted-foreground">OU</span>
                <Separator />
              </div>
              <Button variant="outline" className="w-full mt-6" onClick={navigateToSignup}>
                Criar conta
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
