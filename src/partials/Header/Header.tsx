import React from 'react'
import Link from '../../components/Link/Link'
import Icon, { EIcon } from '../../components/Icon/Icon'
import * as S from './Header.styled'

export default function Header() {
  return (
    <S.Header>
      <Link href="/" icon={<S.Logo type={EIcon.LOGO} />} />
      <Link
        href="/stats"
        icon={<Icon type={EIcon.STATS} />}
        text="Статистика"
      />
    </S.Header>
  )
}
