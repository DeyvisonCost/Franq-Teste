import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Modal } from '.'

const mockOnClose = jest.fn()

describe('Modal', () => {
  it('should render the modal with title and description when opened', () => {
    render(
      <Modal
        title="Modal Title"
        description="This is a description"
        onClose={mockOnClose}
        isOpen={true}
        triggerText="Open Modal"
      >
        <div>Modal Content</div>
      </Modal>
    )

    expect(screen.getByText('Modal Title')).toBeInTheDocument()
    expect(screen.getByText('This is a description')).toBeInTheDocument()

    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  it('should render the modal with only the title when description is not provided', () => {
    render(
      <Modal title="Modal Title" onClose={mockOnClose} isOpen={true} triggerText="Open Modal">
        <div>Modal Content</div>
      </Modal>
    )

    expect(screen.getByText('Modal Title')).toBeInTheDocument()

    expect(screen.queryByText('This is a description')).not.toBeInTheDocument()

    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  it('should trigger onClose when modal is closed', () => {
    render(
      <Modal title="Modal Title" onClose={mockOnClose} isOpen={true} triggerText="Open Modal">
        <div>Modal Content</div>
      </Modal>
    )

    fireEvent.click(screen.getByText('Open Modal'))

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('should render the trigger text', () => {
    render(
      <Modal title="Modal Title" onClose={mockOnClose} isOpen={false} triggerText="Open Modal">
        <div>Modal Content</div>
      </Modal>
    )

    expect(screen.getByText('Open Modal')).toBeInTheDocument()
  })

  it('should not render modal content when isOpen is false', () => {
    render(
      <Modal title="Modal Title" onClose={mockOnClose} isOpen={false} triggerText="Open Modal">
        <div>Modal Content</div>
      </Modal>
    )

    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()
  })
})
