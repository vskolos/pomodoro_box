import React from 'react'
import { EIcon } from '../../components/Icon/Icon'
import * as S from './CalculatedStat.styled'

type Props = {
  title: string
  value: string
  icon: EIcon
}

export default function CalculatedStat({ title, value, icon }: Props) {
  return (
    <S.Calculated>
      <S.Title>{title}</S.Title>
      <S.Value>{value}</S.Value>
      <S.Icon type={icon} />
    </S.Calculated>
  )
}
