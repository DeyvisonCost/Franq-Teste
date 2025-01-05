import React from 'react'

import { Button } from '@/components/Button'
import { render } from '@testing-library/react'

describe('Button', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button>Click me</Button>)
    expect(getByText('Click me')).toBeInTheDocument()
  })
})
