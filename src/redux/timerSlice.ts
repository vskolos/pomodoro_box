import { createSlice } from '@reduxjs/toolkit'

export enum TimerStatus {
  OFF,
  POMODORO_ON,
  POMODORO_PAUSE,
  BREAK_ON,
  BREAK_PAUSE,
}

export const POMODORO_TIME = 25 * 60 // 25 minutes
export const SHORT_BREAK_TIME = 5 * 60 // 5 minutes
export const LONG_BREAK_TIME = 15 * 60 // 15 minutes

type TimerState = {
  startTime: number
  timeLeft: number
  status: TimerStatus
  pomodorosCount: number
  pomodoroTime: number
  pausesTime: number
}

const initialState: TimerState = {
  startTime: 0,
  timeLeft: POMODORO_TIME,
  status: TimerStatus.OFF,
  pomodorosCount: 0,
  pomodoroTime: POMODORO_TIME,
  pausesTime: 0,
}

let pause = 0

export const timerSlice = createSlice({
  name: 'timer',
  initialState: initialState,
  reducers: {
    'tick': (state) => {
      let baseTime = state.pomodoroTime
      if (state.status === TimerStatus.BREAK_ON)
        baseTime =
          state.pomodorosCount % 4 === 0 ? LONG_BREAK_TIME : SHORT_BREAK_TIME
      return {
        ...state,
        timeLeft:
          baseTime +
          state.pausesTime -
          Math.round((Date.now() - state.startTime) / 1000),
      }
    },
    'pomodoro/start': (state) => ({
      ...state,
      startTime: Date.now(),
      timeLeft: state.pomodoroTime,
      status: TimerStatus.POMODORO_ON,
      pomodorosCount: state.pomodorosCount + 1,
      pausesTime: 0,
    }),
    'pomodoro/complete': (state) => ({
      ...state,
      startTime: Date.now(),
      timeLeft:
        state.pomodorosCount % 4 === 0 ? LONG_BREAK_TIME : SHORT_BREAK_TIME,
      status: TimerStatus.BREAK_ON,
      pausesTime: 0,
    }),
    'pomodoro/increment': (state) => ({
      ...state,
      pomodoroTime: state.pomodoroTime + 60,
    }),
    'pomodoro/decrement': (state) => ({
      ...state,
      pomodoroTime: state.pomodoroTime - 60,
    }),
    'break/start': (state) => ({
      ...state,
      startTime: Date.now(),
      timeLeft:
        state.pomodorosCount % 4 === 0 ? LONG_BREAK_TIME : SHORT_BREAK_TIME,
      status: TimerStatus.BREAK_ON,
      pausesTime: 0,
    }),
    'break/skip': (state) => ({
      ...state,
      startTime: Date.now(),
      timeLeft: state.pomodoroTime,
      status: TimerStatus.POMODORO_ON,
      pomodorosCount: state.pomodorosCount + 1,
      pausesTime: 0,
    }),
    'pause': (state) => {
      pause = Date.now()
      return {
        ...state,
        status:
          state.status === TimerStatus.POMODORO_ON
            ? TimerStatus.POMODORO_PAUSE
            : TimerStatus.BREAK_PAUSE,
      }
    },
    'continue': (state) => ({
      ...state,
      pausesTime: state.pausesTime + Math.round((Date.now() - pause) / 1000),
      status:
        state.status === TimerStatus.POMODORO_PAUSE
          ? TimerStatus.POMODORO_ON
          : TimerStatus.BREAK_ON,
    }),
    'stop': (state) => ({
      ...state,
      timeLeft: 0,
      status: TimerStatus.OFF,
      pomodorosCount: 0,
    }),
  },
})

export default timerSlice.reducer

export const {
  'tick': tickTimer,
  'pomodoro/start': startPomodoroTimer,
  'pomodoro/complete': completePomodoroTimer,
  'pomodoro/increment': incrementPomodoroTimer,
  'pomodoro/decrement': decrementPomodoroTimer,
  'break/start': startBreakTimer,
  'break/skip': skipBreakTimer,
  'pause': pauseTimer,
  'continue': continueTimer,
  'stop': stopTimer,
} = timerSlice.actions
