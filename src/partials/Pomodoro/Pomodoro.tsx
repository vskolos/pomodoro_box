import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button, { EButton } from '../../components/Button/Button'
import Icon, { EIcon } from '../../components/Icon/Icon'
import { RootState } from '../../redux/store'
import { editTask, removeTask, selectAllTasks } from '../../redux/tasksSlice'
import {
  continueTimer,
  pauseTimer,
  startBreakTimer,
  startPomodoroTimer,
  stopTimer,
  tickTimer,
  TimerStatus,
} from '../../redux/timerSlice'
import getHeaderStyle from '../../utils/getHeaderStyle'
import getTimerStyle from '../../utils/getTimerStyle'
import timerValue from '../../utils/timerValue'
import * as S from './Pomodoro.styled'

export default function Pomodoro() {
  const timer = useSelector((state: RootState) => state.timer)
  const task = useSelector((state: RootState) => selectAllTasks(state))[0]
  const dispatch = useDispatch()

  const timerId = useRef<NodeJS.Timer>(null)

  function startTick() {
    timerId.current = setInterval(() => {
      dispatch(tickTimer())
    }, 1000)
  }

  function stopTick() {
    clearInterval(timerId.current)
  }

  // Handle 00:00 on timer
  useEffect(() => {
    if (!task) {
      dispatch(stopTimer())
      stopTick()
    }

    if (timer.paused || timer.timeLeft !== 0) return
    stopTick()

    if (timer.status === TimerStatus.POMODORO) {
      dispatch(
        task.count === 1
          ? removeTask(task.id)
          : editTask({ ...task, count: task.count - 1 })
      )
      dispatch(startBreakTimer())
    } else if (timer.status === TimerStatus.BREAK)
      dispatch(startPomodoroTimer())
    startTick()
  }, [timer.paused, timer.timeLeft])

  function handleStart() {
    if (!timer.paused) return
    stopTick()
    dispatch(startPomodoroTimer())
    startTick()
  }

  function handleContinue() {
    if (!timer.paused) return
    stopTick()
    dispatch(continueTimer())
    startTick()
  }

  function handlePause() {
    if (timer.paused) return
    dispatch(pauseTimer())
    stopTick()
  }

  function handleStop() {
    dispatch(stopTimer())
    stopTick()
  }

  return (
    <S.Pomodoro>
      <S.Header style={getHeaderStyle(timer.status)}>
        <S.Name>{task && task.text}</S.Name>
        <S.Count>
          {timer.status === TimerStatus.DEFAULT
            ? ''
            : timer.status === TimerStatus.POMODORO
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
          <S.Number>Задача </S.Number>
          {task && task.text}
        </S.Task>
        <S.Controls>
          {timer.status === TimerStatus.DEFAULT && (
            <Button style={EButton.PRIMARY} color="green" onClick={handleStart}>
              Старт
            </Button>
          )}
          {timer.status !== TimerStatus.DEFAULT && timer.paused && (
            <Button
              style={EButton.PRIMARY}
              color="green"
              onClick={handleContinue}
            >
              Продолжить
            </Button>
          )}
          {!timer.paused && (
            <Button style={EButton.PRIMARY} color="green" onClick={handlePause}>
              Пауза
            </Button>
          )}
          <Button
            style={EButton.SECONDARY}
            color="red"
            onClick={handleStop}
            disabled={timer.status === TimerStatus.DEFAULT}
          >
            Стоп
          </Button>
        </S.Controls>
      </S.Timer>
    </S.Pomodoro>
  )
}
