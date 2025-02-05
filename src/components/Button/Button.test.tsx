import React from 'react'

import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import { Counter } from '../Counter'

it('renders', () => {
  render(
    <Button>
      <Button.Label>Button with text</Button.Label>
    </Button>,
  )
  expect(screen.getByRole('button')).toBeInTheDocument()
})

it('renders text and counter', () => {
  render(
    <Button>
      <Button.Label>Button with text and counter</Button.Label>
      <Button.Counter quantity={'cnt'} />
    </Button>,
  )
  expect(screen.getByText('Button with text and counter')).toBeInTheDocument()
  expect(screen.getByText('cnt')).toBeInTheDocument()
})

it('becomes disabled when loading', () => {
  render(
    <Button loading>
      <Button.Label>Button loading</Button.Label>
    </Button>,
  )

  expect(screen.getByRole('button')).toBeDisabled()
})

it('handles clicks', async () => {
  const f = vi.fn()
  render(
    <Button onClick={f}>
      <Button.Label>Button</Button.Label>
    </Button>,
  )

  await userEvent.click(screen.getByRole('button'))

  expect(f).toHaveBeenCalled()
})

it('does not handle clicks when disabled', async () => {
  const f = vi.fn()
  render(
    <Button onClick={f} disabled>
      <Button.Label>Button</Button.Label>
    </Button>,
  )

  await userEvent.click(screen.getByRole('button'))

  expect(f).not.toHaveBeenCalled()
})

it('does not handle clicks when loading', async () => {
  const f = vi.fn()
  render(
    <Button onClick={f} loading>
      <Button.Label>Button</Button.Label>
    </Button>,
  )

  await userEvent.click(screen.getByRole('button'))

  expect(f).not.toHaveBeenCalled()
})

it('sets size of compound counter', () => {
  render(
    <Button size={36}>
      <Button.Counter quantity={'aaa'} />
    </Button>,
  )

  render(<Counter size={20} quantity={'bbb'} />)

  expect(screen.getByText('aaa')).toHaveClass(screen.getByText('bbb').className)
})
