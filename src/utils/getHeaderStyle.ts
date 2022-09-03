import React from 'react'
import { TimerStatus } from '../redux/timerSlice'

export default function getHeaderStyle(
  status: TimerStatus
): React.CSSProperties {
  switch (status) {
    case TimerStatus.OFF:
      return null
    case TimerStatus.POMODORO_ON:
    case TimerStatus.POMODORO_PAUSE:
      return { backgroundColor: 'var(--red400)' }
    case TimerStatus.BREAK_ON:
    case TimerStatus.BREAK_PAUSE:
      return { backgroundColor: 'var(--green400)' }
  }
}
