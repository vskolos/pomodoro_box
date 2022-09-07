import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import {
  decrementTask,
  editTask,
  removeTask,
  selectAllTasks,
} from '../redux/tasksSlice'
import {
  completePomodoroTimer,
  continueTimer,
  pauseTimer,
  skipBreakTimer,
  startBreakTimer,
  startPomodoroTimer,
  stopTimer,
  tickTimer,
  TimerStatus,
} from '../redux/timerSlice'

export default function useTimer() {
  const timer = useSelector((state: RootState) => state.timer)
  const tasks = useSelector((state: RootState) => selectAllTasks(state))
  const task = tasks.filter((task) => task.count > 0)[0]

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

  function handleComplete() {
    if (
      timer.status === TimerStatus.POMODORO_ON ||
      timer.status === TimerStatus.POMODORO_PAUSE
    ) {
      dispatch(decrementTask({ ...task, count: task.count - 1 }))
      dispatch(completePomodoroTimer())
    }
  }

  function handleSkip() {
    if (
      timer.status === TimerStatus.BREAK_ON ||
      timer.status === TimerStatus.BREAK_PAUSE
    )
      dispatch(skipBreakTimer())
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
      handleComplete,
      handleSkip,
    },
  }
}
