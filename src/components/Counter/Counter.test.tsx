import React from 'react'

import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

it('renders', () => {
  render(<Counter quantity={'asd'} />)
  expect(screen.getByText('asd')).toBeInTheDocument()
})

it('truncates string to 3 chars', () => {
  render(<Counter quantity={'asdfgh'} />)
  expect(screen.getByText('asd')).toBeInTheDocument()
})

it('truncates number to 99+', () => {
  render(<Counter quantity={123} />)
  expect(screen.getByText('99+')).toBeInTheDocument()
})
