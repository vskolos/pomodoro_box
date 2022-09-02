import React from 'react'
import { TimerStatus } from '../redux/timerSlice'

export default function getTimerStyle(
  status: TimerStatus
): React.CSSProperties {
  switch (status) {
    case TimerStatus.DEFAULT:
      return null
    case TimerStatus.POMODORO:
      return { color: 'var(--red400)' }
    case TimerStatus.BREAK:
      return { color: 'var(--green400)' }
  }
}
