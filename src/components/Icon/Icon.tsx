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
import ArrowDown from './Icons/ArrowDown'
import TimerMinus from './Icons/TimerMinus'

export enum EIcon {
  ARROW_DOWN,
  CROSS,
  MINUS,
  PENCIL,
  PLUS,
  STATS,
  STAT_FOCUS,
  STAT_PAUSE,
  STAT_STOPS,
  THREE_DOTS,
  TIMER_MINUS,
  TIMER_PLUS,
  TOMATO,
  TOMATO_FACE,
  TRASH,
}

type IconProps = {
  type: EIcon
  className?: string
  style?: React.CSSProperties
}

export default function Icon({ type, className, style }: IconProps) {
  switch (type) {
    case EIcon.ARROW_DOWN:
      return <ArrowDown className={className} style={style} />
    case EIcon.CROSS:
      return <Cross className={className} style={style} />
    case EIcon.MINUS:
      return <Minus className={className} style={style} />
    case EIcon.PENCIL:
      return <Pencil className={className} style={style} />
    case EIcon.PLUS:
      return <Plus className={className} style={style} />
    case EIcon.STATS:
      return <Stats className={className} style={style} />
    case EIcon.STAT_FOCUS:
      return <StatFocus className={className} style={style} />
    case EIcon.STAT_PAUSE:
      return <StatPause className={className} style={style} />
    case EIcon.STAT_STOPS:
      return <StatStops className={className} style={style} />
    case EIcon.THREE_DOTS:
      return <ThreeDots className={className} style={style} />
    case EIcon.TIMER_MINUS:
      return <TimerMinus className={className} style={style} />
    case EIcon.TIMER_PLUS:
      return <TimerPlus className={className} style={style} />
    case EIcon.TOMATO:
      return <Tomato className={className} style={style} />
    case EIcon.TOMATO_FACE:
      return <TomatoFace className={className} style={style} />
    case EIcon.TRASH:
      return <Trash className={className} style={style} />
  }
}
