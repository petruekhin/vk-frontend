import React from 'react'

import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

it('renders', () => {
  render(<Counter quantity={'asd'} />)
  expect(screen.getByText('asd')).toBeInTheDocument()
})
