import { useCallback, useEffect, useState } from 'react'

import { fetchAllStocks } from '@/infra/instances/fetchStocksInstance/fetchAllStocksInstance'
import { APIResponseSchema } from '@/presentation/views/Home/home.schema'
import { ApiResponse, ModalContent } from '@/presentation/views/Home/home.types'

export const useHomeModel = () => {
  const [stocks, setStocks] = useState<ApiResponse | null>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ModalContent | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null) 

  const getStocks = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetchAllStocks()
      const validResponse = APIResponseSchema.parse(response)
      setStocks(validResponse as ApiResponse)
      setError(null)
    } catch (err) {
      setError('Falha ao carregar os dados. Tente novamente mais tarde. 😕') 
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getVariationColor = (variation: number) => {
    return variation > 0 ? 'text-green-500' : 'text-red-500'
  }

  const openModalWithContent = (content: ModalContent) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalContent(null)
  }

  useEffect(() => {
    getStocks()
  }, [getStocks])

  return {
    stocks,
    isModalOpen,
    modalContent,
    getVariationColor,
    openModalWithContent,
    closeModal,
    isLoading,
    error 
  }
}
