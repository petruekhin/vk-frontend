import React, { useContext } from 'react'
import { Counter, CounterProps } from './Counter'
import classNames from 'classnames'
import './button.stylus'

export type LoaderProps = React.DOMAttributes<SVGSVGElement> & React.SVGAttributes<SVGSVGElement>

const Loader = (attrs: LoaderProps) => {
  const fullClassName = classNames('loader', attrs.className)
  return (<svg viewBox="-12 -12 24 24" {...attrs} className={fullClassName}>
    <circle cx="0" cy="0" r="10"></circle>
  </svg>)
}

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size: 28 | 36 | 56
  loading: boolean
} & React.DOMAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonContext = React.createContext<Pick<ButtonProps, 'size' | 'variant'>>({ size: 36, variant: 'primary' })

export const Button = ({
  variant,
  children,
  size = 36,
  disabled = false,
  loading = false,
  ...attrs
}: Partial<ButtonProps>) => {
  const fullClassName = classNames('button', variant, { loading }, `size-${size}`, attrs.className)

  return (
    <ButtonContext.Provider value={{size, variant}}>
      <button {...attrs} className={fullClassName}>
        {children}
        <Loader className="button__loader" />
      </button>
    </ButtonContext.Provider>
  )
}

const buttonToCounterSize: Record<ButtonProps['size'], CounterProps['size']> = { 28: 16, 36: 20, 56: 24 }
Button.Counter = (props: Parameters<typeof Counter>[0]) => {
  const context = useContext(ButtonContext)
  const size = buttonToCounterSize[context.size]
  return <Counter {...props} size={size} />
}
