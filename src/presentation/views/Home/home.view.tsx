import React, { Fragment } from 'react'

import { LoadingFallback } from '@/components/LoadingFallback'
import { Modal } from '@/components/Modal'
import { Card } from '@/components/ui/card'
import { Graphic } from '@/presentation/views/Home/Graphic'
import { useHomeModel } from '@/presentation/views/Home/home.model'
import { ModalContent } from '@/presentation/views/Home/home.types'
import { formatToBRL } from '@/utils'

export const HomeView = ({
  stocks,
  isModalOpen,
  modalContent,
  getVariationColor,
  openModalWithContent,
  closeModal,
}: ReturnType<typeof useHomeModel>) => {
  if (!stocks) {
    return <LoadingFallback />
  }

  const { currencies, stocks: stockData } = stocks.results

  return (
    <Fragment>
      <Modal
        title={modalContent?.name || ''}
        description={modalContent?.description || ''}
        onClose={closeModal}
        isOpen={isModalOpen}
      >
        <div>
          <h3 className="text-xl font-semibold mb-2">{modalContent?.name}</h3>
          {modalContent?.buy && <p>Compra: {formatToBRL(modalContent?.buy as number)}</p>}
          {modalContent?.sell && <p>Venda: {formatToBRL(modalContent?.sell as number)}</p>}
          {modalContent?.variation && (
            <div className={`mt-2 font-medium ${getVariationColor(modalContent.variation)}`}>
              Variação: {modalContent?.variation}%
            </div>
          )}

          {modalContent?.location && <p>Localização: {modalContent?.location}</p>}
          {modalContent?.points && <p>Pontos: {modalContent?.points}</p>}
          <Graphic data={modalContent} />
        </div>
      </Modal>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Cotações de Moedas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(currencies).map(([key, currency]) => {
              if (typeof currency !== 'string' && currency?.name) {
                return (
                  <Card
                    key={key}
                    className="p-6 shadow-lg border rounded-lg bg-white hover:shadow-xl transform transition-all duration-300 cursor-pointer"
                    onClick={() => openModalWithContent(currency as ModalContent)}
                  >
                    <h3 className="text-xl font-semibold mb-2">{currency?.name}</h3>
                    <div className="flex justify-between mt-2">
                      <span>Compra:{formatToBRL(currency?.buy)}</span>
                      <span>Venda: {formatToBRL(currency?.sell)}</span>
                    </div>
                    <div className={`mt-2 font-medium ${getVariationColor(currency.variation)}`}>
                      Variação: {currency?.variation}%
                    </div>
                  </Card>
                )
              }
              return null
            })}
          </div>
        </div>
      </section>

      {stockData && (
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Cotações de Ações</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(stockData).map(([key, stock]) => (
                <Card
                  key={key}
                  className="p-6 shadow-lg border rounded-lg bg-white hover:shadow-xl transform transition-all duration-300 cursor-pointer"
                  onClick={() => openModalWithContent(stock)}
                >
                  <h3 className="text-xl font-semibold mb-2">{stock.name}</h3>
                  <div className="flex justify-between mt-2">
                    <span>Localização: {stock.location}</span>
                    <span>Pontos: {stock.points}</span>
                  </div>
                  <div className={`mt-2 font-medium ${getVariationColor(stock.variation)}`}>
                    Variação: {stock.variation}%
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </Fragment>
  )
}
