import React from 'react'
import * as S from './Button.styled'

export enum EButton {
  PRIMARY,
  SECONDARY,
}

type Props = {
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  style?: EButton
  color?: 'red' | 'green'
  onClick?: () => void
}

export default function Button({
  children,
  className,
  type = 'button',
  disabled = false,
  style,
  color,
  onClick,
}: Props) {
  let As: typeof S.Button | typeof S.PrimaryButton | typeof S.SecondaryButton
  const colors =
    color &&
    ({
      '--color400': `var(--${color}400)`,
      '--color500': `var(--${color}500)`,
      '--color600': `var(--${color}600)`,
    } as React.CSSProperties)

  switch (style) {
    case EButton.PRIMARY:
      As = S.PrimaryButton
      break
    case EButton.SECONDARY:
      As = S.SecondaryButton
      break
    default:
      As = S.Button
  }
  return (
    <As
      className={className}
      style={colors}
      onClick={() => onClick?.()}
      type={type}
      disabled={disabled}
    >
      {children}
    </As>
  )
}
