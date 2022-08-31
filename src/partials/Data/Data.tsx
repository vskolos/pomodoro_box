import React from 'react'
import * as S from './Data.styled'

type Props = {
  children?: React.ReactNode
}

export default function Data({ children }: Props) {
  return <S.Data>{children}</S.Data>
}
