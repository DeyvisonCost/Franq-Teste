import React, { FC } from 'react'

export const LoadingFallback: FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100" data-testid="loading-background">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600" data-testid="loading-spinner"></div>
  </div>
)
