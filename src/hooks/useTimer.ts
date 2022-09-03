import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { editTask, removeTask, selectAllTasks } from '../redux/tasksSlice'
import {
  continueTimer,
  pauseTimer,
  startBreakTimer,
  startPomodoroTimer,
  stopTimer,
  tickTimer,
  TimerStatus,
} from '../redux/timerSlice'

export default function useTimer() {
  const timer = useSelector((state: RootState) => state.timer)
  const task = useSelector((state: RootState) => selectAllTasks(state))[0]

  const dispatch = useDispatch()
  const timerId = useRef<NodeJS.Timer>(null)

  function startTick() {
    timerId.current = setInterval(() => dispatch(tickTimer()), 1000)
  }

  function stopTick() {
    clearInterval(timerId.current)
  }

  function handleStart() {
    if (!task || timer.status !== TimerStatus.OFF) return
    stopTick()
    dispatch(startPomodoroTimer())
    startTick()
  }

  function handleContinue() {
    if (
      timer.status !== TimerStatus.BREAK_PAUSE &&
      timer.status !== TimerStatus.POMODORO_PAUSE
    )
      return
    stopTick()
    dispatch(continueTimer())
    startTick()
  }

  function handlePause() {
    if (
      timer.status === TimerStatus.BREAK_PAUSE ||
      timer.status === TimerStatus.POMODORO_PAUSE
    )
      return
    dispatch(pauseTimer())
    stopTick()
  }

  function handleStop() {
    dispatch(stopTimer())
    stopTick()
  }

  useEffect(() => {
    if (timer.status !== TimerStatus.OFF && !task) handleStop()
    if (timer.status === TimerStatus.OFF || timer.timeLeft !== 0) return
    stopTick()

    if (timer.status === TimerStatus.POMODORO_ON) {
      dispatch(
        task.count === 1
          ? removeTask(task.id)
          : editTask({ ...task, count: task.count - 1 })
      )
      dispatch(startBreakTimer())
    } else if (timer.status === TimerStatus.BREAK_ON)
      dispatch(startPomodoroTimer())
    startTick()
  }, [timer.timeLeft])

  return {
    task,
    timer,
    actions: {
      handleStart,
      handleContinue,
      handlePause,
      handleStop,
    },
  }
}
