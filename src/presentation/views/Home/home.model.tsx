import { useCallback, useEffect, useState } from 'react'

import { fetchAllStocks } from '@/infra/instances/fetchStocksInstance/fetchAllStocksInstance'
import { APIResponseSchema } from '@/presentation/views/Home/home.schema'
import { ApiResponse, ModalContent } from '@/presentation/views/Home/home.types'

export const useHomeModel = () => {
  const [stocks, setStocks] = useState<ApiResponse | null>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ModalContent | null>(null)

  const getStocks = useCallback(async () => {
    try {
      const response = await fetchAllStocks()
      const validResponse = APIResponseSchema.parse(response)
      // eslint-disable-next-line no-console
      console.log('validResponse ', validResponse)
      
      setStocks(validResponse as ApiResponse)
    } catch (err) {
     
      
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
  }
}
