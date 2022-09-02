import React from 'react'
import { TimerStatus } from '../redux/timerSlice'

export default function getHeaderStyle(
  status: TimerStatus
): React.CSSProperties {
  switch (status) {
    case TimerStatus.DEFAULT:
      return null
    case TimerStatus.POMODORO:
      return { backgroundColor: 'var(--red400)' }
    case TimerStatus.BREAK:
      return { backgroundColor: 'var(--green400)' }
  }
}
