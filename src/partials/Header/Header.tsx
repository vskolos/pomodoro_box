import React from 'react'
import Link from '../../components/Link/Link'
import SVG, { Icon } from '../../components/SVG/SVG'
import * as S from './Header.styled'

export default function Header() {
  return (
    <S.Header>
      <Link href="/" icon={<S.Logo type={Icon.LOGO} />} />
      <Link href="/stats" icon={<SVG type={Icon.STATS} />} text="Статистика" />
    </S.Header>
  )
}
