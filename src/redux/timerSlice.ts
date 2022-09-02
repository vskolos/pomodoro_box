import { createSlice } from '@reduxjs/toolkit'

export enum TimerStatus {
  DEFAULT = 'default',
  POMODORO = 'pomodoro',
  BREAK = 'break',
}

export const POMODORO_TIME = 10 // 25 minutes
export const SHORT_BREAK_TIME = 5 // 5 minutes
export const LONG_BREAK_TIME = 15 // 15 minutes

type TimerState = {
  timeLeft: number
  status: TimerStatus
  paused: boolean
  pomodoroCount: number
}

const initialState: TimerState = {
  timeLeft: 0,
  status: TimerStatus.DEFAULT,
  paused: true,
  pomodoroCount: 0,
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState: initialState,
  reducers: {
    'tick': (state: TimerState) => ({
      ...state,
      timeLeft: state.timeLeft - 1,
    }),
    'start/pomodoro': (state: TimerState) => ({
      ...state,
      timeLeft: POMODORO_TIME,
      status: TimerStatus.POMODORO,
      paused: false,
      pomodoroCount: state.pomodoroCount + 1,
    }),
    'start/break': (state: TimerState) => ({
      ...state,
      timeLeft:
        state.pomodoroCount % 4 === 0 ? LONG_BREAK_TIME : SHORT_BREAK_TIME,
      status: TimerStatus.BREAK,
      paused: false,
    }),
    'pause': (state: TimerState) => ({
      ...state,
      paused: true,
    }),
    'continue': (state: TimerState) => ({
      ...state,
      paused: false,
    }),
    'stop': (state: TimerState) => ({
      ...state,
      timeLeft: 0,
      status: TimerStatus.DEFAULT,
      paused: true,
      pomodoroCount: 0,
    }),
  },
})

export default timerSlice.reducer

export const {
  'tick': tickTimer,
  'start/pomodoro': startPomodoroTimer,
  'start/break': startBreakTimer,
  'pause': pauseTimer,
  'continue': continueTimer,
  'stop': stopTimer,
} = timerSlice.actions
