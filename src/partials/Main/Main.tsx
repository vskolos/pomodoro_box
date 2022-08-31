import React from 'react'
import * as S from './Main.styled'

type Props = {
  children?: React.ReactNode
}

export default function Main({ children }: Props) {
  return <S.Main>{children}</S.Main>
}
