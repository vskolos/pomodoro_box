import React from 'react'
import Link from '../../components/Link/Link'
import Icon, { EIcon } from '../../components/Icon/Icon'
import * as S from './Header.styled'

export default function Header() {
  return (
    <S.Header>
      <Link href="/">
        <S.LogoIcon type={EIcon.TOMATO} />
        <S.LogoText>pomodoro_box</S.LogoText>
      </Link>
      <Link href="/stats">
        <Icon type={EIcon.STATS} />
        <S.LinkText>Статистика</S.LinkText>
      </Link>
    </S.Header>
  )
}
