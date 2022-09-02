import React, { useRef, useState } from 'react'
import Button, { EButton } from '../../components/Button/Button'
import Icon, { EIcon } from '../../components/Icon/Icon'
import getHeaderStyle from '../../utils/getHeaderStyle'
import getTimerStyle from '../../utils/getTimerStyle'
import timerValue from '../../utils/timerValue'
import * as S from './Pomodoro.styled'

const POMODORO_TIME = 25 * 60 // 25 minutes
const BREAK_TIME = 5 * 60 // 5 minutes

export enum PomodoroStatus {
  IDLE,
  POMODORO,
  BREAK,
}

export default function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME)
  const [status, setStatus] = useState(PomodoroStatus.IDLE)
  const timer = useRef<NodeJS.Timer>(null)

  function handleStart() {
    setStatus(PomodoroStatus.POMODORO)
    timer.current = setInterval(() => {
      if (timeLeft === 0) return clearInterval(timer.current)
      setTimeLeft((time) => time - 1)
    }, 1000)
  }

  function handlePause() {
    setStatus(PomodoroStatus.IDLE)
    clearInterval(timer.current)
  }

  return (
    <S.Pomodoro>
      <S.Header style={getHeaderStyle(status)}>
        <S.Name>Сверстать сайт</S.Name>
        <S.Count>Помидор 1</S.Count>
      </S.Header>
      <S.Timer>
        <S.Countdown style={getTimerStyle(status)}>
          {timerValue(timeLeft)}
          <S.Button>
            <Icon type={EIcon.TIMER_PLUS} />
          </S.Button>
        </S.Countdown>
        <S.Task>
          <S.Number>Задача 1 - </S.Number>Сверстать сайт
        </S.Task>
        <S.Controls>
          {status === PomodoroStatus.IDLE ? (
            <Button style={EButton.PRIMARY} color="green" onClick={handleStart}>
              Старт
            </Button>
          ) : (
            <Button style={EButton.PRIMARY} color="green" onClick={handlePause}>
              Пауза
            </Button>
          )}
          <Button
            style={EButton.SECONDARY}
            color="red"
            onClick={handlePause}
            disabled={status === PomodoroStatus.IDLE}
          >
            Стоп
          </Button>
        </S.Controls>
      </S.Timer>
    </S.Pomodoro>
  )
}
