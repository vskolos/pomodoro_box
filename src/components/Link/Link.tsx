import NextLink from 'next/link'
import React from 'react'
import * as S from './Link.styled'

type Props = {
  href: string
  icon?: React.ReactNode
  text?: string
  className?: string
}

export default function Link({ href, className, icon, text }: Props) {
  return (
    <NextLink href={href} passHref>
      <S.Link className={className}>
        {icon}
        {text && <S.Text>{text}</S.Text>}
      </S.Link>
    </NextLink>
  )
}
