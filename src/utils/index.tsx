export const getEnv = (name: string): string | undefined => {
  return import.meta.env[name]
}
