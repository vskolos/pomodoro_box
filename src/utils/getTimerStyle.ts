import React from 'react'
import { PomodoroStatus } from '../partials/Pomodoro/Pomodoro'

export default function getTimerStyle(
  status: PomodoroStatus
): React.CSSProperties {
  switch (status) {
    case PomodoroStatus.IDLE:
      return null
    case PomodoroStatus.POMODORO:
      return { color: 'var(--red400)' }
    case PomodoroStatus.BREAK:
      return { color: 'var(--green400)' }
  }
}
