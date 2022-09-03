import NextLink from 'next/link'
import React from 'react'
import * as S from './Link.styled'

type Props = {
  children?: React.ReactNode
  className?: string
  href: string
}

export default function Link({ href, className, children }: Props) {
  return (
    <NextLink href={href} passHref>
      <S.Link className={className}>{children}</S.Link>
    </NextLink>
  )
}
