import React from 'react'
import Button, { EButton } from '../../components/Button/Button'
import Icon, { EIcon } from '../../components/Icon/Icon'
import useTimer from '../../hooks/useTimer'
import { TimerStatus } from '../../redux/timerSlice'
import timerValue from '../../utils/timerValue'
import * as S from './Pomodoro.styled'

function getHeaderStyle(status: TimerStatus): React.CSSProperties {
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

function getTimerStyle(status: TimerStatus): React.CSSProperties {
  switch (status) {
    case TimerStatus.OFF:
      return null
    case TimerStatus.POMODORO_ON:
    case TimerStatus.POMODORO_PAUSE:
      return { color: 'var(--red400)' }
    case TimerStatus.BREAK_ON:
    case TimerStatus.BREAK_PAUSE:
      return { color: 'var(--green400)' }
  }
}

export default function Pomodoro() {
  const {
    timer,
    task,
    actions: {
      handleStart,
      handleContinue,
      handlePause,
      handleStop,
      handleComplete,
      handleSkip,
    },
  } = useTimer()

  return (
    <S.Pomodoro>
      <S.Header style={getHeaderStyle(timer.status)}>
        <S.Name>{task ? task.text : 'Добавьте задачу'}</S.Name>
        <S.Count>
          {timer.status === TimerStatus.OFF
            ? ''
            : timer.status === TimerStatus.POMODORO_ON ||
              timer.status === TimerStatus.POMODORO_PAUSE
            ? 'Помидор '
            : 'Перерыв '}
          {timer.pomodoroCount || ''}
        </S.Count>
      </S.Header>
      <S.Timer>
        <S.Countdown style={getTimerStyle(timer.status)}>
          {timerValue(timer.timeLeft)}
          <S.Button>
            <Icon type={EIcon.TIMER_PLUS} />
          </S.Button>
        </S.Countdown>
        <S.Task>
          <S.Number>{task ? 'Задача – ' : 'Задач нет'}</S.Number>
          {task && task.text}
        </S.Task>
        <S.Controls>
          {timer.status === TimerStatus.OFF && (
            <Button style={EButton.PRIMARY} color="green" onClick={handleStart}>
              Старт
            </Button>
          )}
          {(timer.status === TimerStatus.POMODORO_PAUSE ||
            timer.status === TimerStatus.BREAK_PAUSE) && (
            <Button
              style={EButton.PRIMARY}
              color="green"
              onClick={handleContinue}
            >
              Продолжить
            </Button>
          )}
          {(timer.status === TimerStatus.POMODORO_ON ||
            timer.status === TimerStatus.BREAK_ON) && (
            <Button style={EButton.PRIMARY} color="green" onClick={handlePause}>
              Пауза
            </Button>
          )}
          {timer.status === TimerStatus.POMODORO_PAUSE && (
            <Button
              style={EButton.SECONDARY}
              color="red"
              onClick={handleComplete}
            >
              Сделано
            </Button>
          )}
          {(timer.status === TimerStatus.POMODORO_ON ||
            timer.status === TimerStatus.OFF) && (
            <Button
              style={EButton.SECONDARY}
              color="red"
              onClick={handleStop}
              disabled={timer.status === TimerStatus.OFF}
            >
              Стоп
            </Button>
          )}
          {(timer.status === TimerStatus.BREAK_ON ||
            timer.status === TimerStatus.BREAK_PAUSE) && (
            <Button style={EButton.SECONDARY} color="red" onClick={handleSkip}>
              Пропустить
            </Button>
          )}
        </S.Controls>
      </S.Timer>
    </S.Pomodoro>
  )
}
