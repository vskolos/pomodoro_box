import React from 'react'
import Tomato from './Icons/Tomato'
import TimerPlus from './Icons/TimerPlus'
import Stats from './Icons/Stats'
import ThreeDots from './Icons/ThreeDots'
import Minus from './Icons/Minus'
import Pencil from './Icons/Pencil'
import Plus from './Icons/Plus'
import Trash from './Icons/Trash'
import Cross from './Icons/Cross'
import TomatoFace from './Icons/TomatoFace'
import StatFocus from './Icons/StatFocus'
import StatPause from './Icons/StatPause'
import StatStops from './Icons/StatStops'

export enum EIcon {
  CROSS,
  MINUS,
  PENCIL,
  PLUS,
  STATS,
  STAT_FOCUS,
  STAT_PAUSE,
  STAT_STOPS,
  THREE_DOTS,
  TIMER_PLUS,
  TOMATO,
  TOMATO_FACE,
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
    case EIcon.MINUS:
      return <Minus className={className} />
    case EIcon.PENCIL:
      return <Pencil className={className} />
    case EIcon.PLUS:
      return <Plus className={className} />
    case EIcon.STATS:
      return <Stats className={className} />
    case EIcon.STAT_FOCUS:
      return <StatFocus className={className} />
    case EIcon.STAT_PAUSE:
      return <StatPause className={className} />
    case EIcon.STAT_STOPS:
      return <StatStops className={className} />
    case EIcon.THREE_DOTS:
      return <ThreeDots className={className} />
    case EIcon.TIMER_PLUS:
      return <TimerPlus className={className} />
    case EIcon.TOMATO:
      return <Tomato className={className} />
    case EIcon.TOMATO_FACE:
      return <TomatoFace className={className} />
    case EIcon.TRASH:
      return <Trash className={className} />
  }
}
