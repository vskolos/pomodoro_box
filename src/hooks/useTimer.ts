import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadStats, saveStats, updateStats } from '../redux/statsSlice'
import { RootState } from '../redux/store'
import {
  decrementTask,
  doneTask,
  editTask,
  removeTask,
  selectAllTasks,
} from '../redux/tasksSlice'
import {
  completePomodoroTimer,
  continueTimer,
  decrementPomodoroTimer,
  incrementPomodoroTimer,
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

  function handleStop(count = true) {
    dispatch(
      updateStats({
        pomodorosTime: timer.pomodorosTime,
        pausesTime: timer.totalPausesTime,
        stopsCount: count ? 1 : 0,
      })
    )
    dispatch(stopTimer())
    dispatch(saveStats())
    stopTick()
  }

  function handleComplete() {
    if (timer.status !== TimerStatus.POMODORO_ON) return
    task.count === 1
      ? dispatch(doneTask({ ...task, count: task.count - 1 }))
      : dispatch(decrementTask({ ...task, count: task.count - 1 }))
    dispatch(completePomodoroTimer())
    dispatch(
      updateStats({
        pomodorosCount: 1,
      })
    )
  }

  function handleSkip() {
    if (timer.status !== TimerStatus.BREAK_ON) return
    dispatch(skipBreakTimer())
  }

  function handleIncrement() {
    dispatch(incrementPomodoroTimer())
  }

  function handleDecrement() {
    dispatch(decrementPomodoroTimer())
  }

  useEffect(() => {
    dispatch(loadStats())

    return () => {
      handleStop()
      dispatch(
        updateStats({
          pomodorosTime: timer.pomodorosTime,
          pausesTime: timer.totalPausesTime,
        })
      )
      dispatch(saveStats())
    }
  }, [])

  useEffect(() => {
    if (timer.status !== TimerStatus.OFF && !task) handleStop(false)
    if (timer.status === TimerStatus.OFF || timer.timeLeft !== 0) return
    stopTick()

    if (timer.status === TimerStatus.POMODORO_ON) {
      dispatch(
        task.count === 1
          ? removeTask(task.id)
          : editTask({ ...task, count: task.count - 1 })
      )
      dispatch(
        updateStats({
          pomodorosCount: 1,
        })
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
      handleIncrement,
      handleDecrement,
    },
  }
}
