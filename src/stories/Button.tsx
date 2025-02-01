import React, { ReactNode, useContext } from 'react'
import { Counter } from './Counter'
import classNames from 'classnames'
import './button.stylus'

const Loader = () => {
  return (<svg viewBox="-12 -12 24 24" className="loader">
    <circle cx="0" cy="0" r="10"></circle>
  </svg>)
}

const ButtonContext = React.createContext({ size: 36 as Parameters<typeof Button>[0]['size'], variant: 'primary' })

export const Button = ({
  variant = 'primary',
  size = 36,
  disabled = false,
  loading = false,
  children = null,
  ...attrs
}: {
  variant?: 'primary' | 'secondary' | 'custom'
  size?: 28 | 36 | 56
  disabled?: boolean
  loading?: boolean
  children?: ReactNode,
} & React.DOMAttributes<HTMLDivElement>) => {
  const className = classNames({
    button: true,
    [`size-${size}`]: true,
    [variant]: true,
    loading: loading,
    disabled: disabled,
  })

  return (
    <ButtonContext.Provider value={{size, variant}}>
      <div className={className} {...attrs}>{loading ? <Loader /> : children}</div>
    </ButtonContext.Provider>
  )
}

Button.Counter = (props: Parameters<typeof Counter>[0]) => {
  const context = useContext(ButtonContext)
  const size = { 28: 16, 36: 20, 56: 24 }[context.size!]
  return <Counter {...props} size={size as any} />
}
