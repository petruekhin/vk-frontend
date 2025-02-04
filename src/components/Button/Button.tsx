import React, { useContext, useRef } from 'react'
import { Counter, CounterProps } from '../Counter'
import classNames from 'classnames'
import './button.stylus'
import { Loader } from '../Loader'

export type ButtonBaseProps = {
  variant?: 'primary' | 'secondary'
  size: 28 | 36 | 56
  loading: boolean
}

export type ButtonProps = Partial<ButtonBaseProps> & React.DOMAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonContext = React.createContext<Pick<ButtonBaseProps, 'size' | 'variant'>>({ size: 36, variant: 'primary' })

const buttonToLoaderSize: Record<ButtonBaseProps['size'], number> = { 28: 16, 36: 20, 56: 24 }
export const Button = ({
  variant,
  children,
  loading,
  onMouseDown,
  size = 36,
  ...attrs
}: Partial<ButtonProps>) => {
  const fullClassName = classNames('button', variant, { loading }, `size-${size}`, attrs.className)
  const loaderSize = buttonToLoaderSize[size]
  const ripple = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const handleMouseDown: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const rect = button.current!.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top
    ripple.current!.style.left = `${offsetX}px`
    ripple.current!.style.top = `${offsetY}px`
    onMouseDown?.(e)
  }

  return (
    <ButtonContext.Provider value={{size, variant}}>
      <button {...attrs} disabled={attrs.disabled || loading} className={fullClassName} ref={button} onMouseDown={handleMouseDown}>
        <div className="button__ripple" ref={ripple}></div>
        <div className="button__content">{children}</div>
        {typeof loading !== 'undefined' && <div className="button__loader">
          <Loader width={loaderSize} height={loaderSize} variant={variant} className="button__spinner" />
        </div>}
      </button>
    </ButtonContext.Provider>
  )
}

const buttonToCounterSize: Record<ButtonBaseProps['size'], CounterProps['size']> = { 28: 16, 36: 20, 56: 24 }
Button.Counter = ({ variant, ...props }: Partial<CounterProps>) => {
  const context = useContext(ButtonContext)
  const size = buttonToCounterSize[context.size]
  const fullClassName = classNames('button__counter', props.className)
  return <Counter {...props} className={fullClassName} size={size} />
}

export type LabelProps = React.DOMAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>
Button.Label = (props: LabelProps) => {
  const fullClassName = classNames('button__label', props.className)
  return <span {...props} className={fullClassName}></span>
}
