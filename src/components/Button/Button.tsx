import React from 'react'
import SVG, { Icon } from '../SVG/SVG'
import * as S from './Button.styled'

export enum ButtonStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ICON = 'icon',
  TEXT = 'text',
}

type Props = {
  type?: 'button' | 'submit'
  style?: ButtonStyle
  color?: 'green' | 'red' | 'gray'
  icon?: Icon
  text?: string
  className?: string
  onClick?: () => void
}

export default function Button({
  type = 'button',
  style = ButtonStyle.PRIMARY,
  color = 'green',
  className,
  icon,
  text,
  onClick,
}: Props) {
  return (
    <S.Button
      className={className}
      onClick={() => onClick?.()}
      data-style={`${style}-${color}`}
      type={type}
    >
      {icon && <SVG type={icon} />}
      {text}
    </S.Button>
  )
}
