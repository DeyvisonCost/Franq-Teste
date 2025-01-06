export const getEnv = (name: string): string | undefined => {
  return import.meta.env[name]
}

export const formatToBRL = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
