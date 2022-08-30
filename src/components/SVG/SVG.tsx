import React from 'react'
import Logo from './Icons/Logo'
import Plus from './Icons/Plus'
import Stats from './Icons/Stats'
import ThreeDots from './Icons/ThreeDots'

export enum Icon {
  LOGO,
  PLUS,
  STATS,
  THREE_DOTS,
}

type IconProps = {
  type: Icon
  className?: string
}

export default function SVG({ type, className }: IconProps) {
  switch (type) {
    case Icon.LOGO:
      return <Logo className={className} />
    case Icon.PLUS:
      return <Plus className={className} />
    case Icon.STATS:
      return <Stats className={className} />
    case Icon.THREE_DOTS:
      return <ThreeDots className={className} />
  }
}
