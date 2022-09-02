import React from 'react'
import Logo from './Icons/Logo'
import TimerPlus from './Icons/TimerPlus'
import Stats from './Icons/Stats'
import ThreeDots from './Icons/ThreeDots'
import Minus from './Icons/Minus'
import Pencil from './Icons/Pencil'
import Plus from './Icons/Plus'
import Trash from './Icons/Trash'
import Cross from './Icons/Cross'

export enum EIcon {
  CROSS,
  LOGO,
  MINUS,
  PENCIL,
  PLUS,
  STATS,
  THREE_DOTS,
  TIMER_PLUS,
  TRASH,
}

type IconProps = {
  type: EIcon
  className?: string
}

export default function Icon({ type, className }: IconProps) {
  switch (type) {
    case EIcon.CROSS:
      return <Cross className={className} />
    case EIcon.LOGO:
      return <Logo className={className} />
    case EIcon.MINUS:
      return <Minus className={className} />
    case EIcon.PENCIL:
      return <Pencil className={className} />
    case EIcon.PLUS:
      return <Plus className={className} />
    case EIcon.STATS:
      return <Stats className={className} />
    case EIcon.THREE_DOTS:
      return <ThreeDots className={className} />
    case EIcon.TIMER_PLUS:
      return <TimerPlus className={className} />
    case EIcon.TRASH:
      return <Trash className={className} />
  }
}
