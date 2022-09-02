import React from 'react'
import { PomodoroStatus } from '../partials/Pomodoro/Pomodoro'

export default function getHeaderStyle(
  status: PomodoroStatus
): React.CSSProperties {
  switch (status) {
    case PomodoroStatus.IDLE:
      return null
    case PomodoroStatus.POMODORO:
      return { backgroundColor: 'var(--red400)' }
    case PomodoroStatus.BREAK:
      return { backgroundColor: 'var(--green400)' }
  }
}
