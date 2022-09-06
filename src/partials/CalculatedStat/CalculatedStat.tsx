import React, { useState } from 'react'
import { EIcon } from '../../components/Icon/Icon'
import * as S from './CalculatedStat.styled'

type Props = {
  title: string
  value: string
  icon: EIcon
  color: 'orange' | 'purple' | 'blue'
  active: boolean
}

export default function CalculatedStat({
  title,
  value,
  icon,
  color,
  active,
}: Props) {
  const divStyle = {
    '--color': active ? `var(--${color}300)` : `var(--grayF4)`,
  } as React.CSSProperties
  const svgStyle = {
    '--color': active ? `var(--${color}400)` : `var(--grayC4)`,
  } as React.CSSProperties
  return (
    <S.Calculated style={divStyle}>
      <S.Title>{title}</S.Title>
      <S.Value>{value}</S.Value>
      <S.Icon type={icon} style={svgStyle} />
    </S.Calculated>
  )
}
