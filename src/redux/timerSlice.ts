import { createSlice } from '@reduxjs/toolkit'

export enum TimerStatus {
  OFF,
  POMODORO_ON,
  POMODORO_PAUSE,
  BREAK_ON,
  BREAK_PAUSE,
}

export const POMODORO_TIME = 10 // 25 minutes
export const SHORT_BREAK_TIME = 5 // 5 minutes
export const LONG_BREAK_TIME = 15 // 15 minutes

type TimerState = {
  timeLeft: number
  status: TimerStatus
  pomodoroCount: number
}

const initialState: TimerState = {
  timeLeft: 0,
  status: TimerStatus.OFF,
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
      status: TimerStatus.POMODORO_ON,
      pomodoroCount: state.pomodoroCount + 1,
    }),
    'start/break': (state: TimerState) => ({
      ...state,
      timeLeft:
        state.pomodoroCount % 4 === 0 ? LONG_BREAK_TIME : SHORT_BREAK_TIME,
      status: TimerStatus.BREAK_ON,
    }),
    'pause': (state: TimerState) => ({
      ...state,
      status:
        state.status === TimerStatus.POMODORO_ON
          ? TimerStatus.POMODORO_PAUSE
          : TimerStatus.BREAK_PAUSE,
    }),
    'continue': (state: TimerState) => ({
      ...state,
      status:
        state.status === TimerStatus.POMODORO_PAUSE
          ? TimerStatus.POMODORO_ON
          : TimerStatus.BREAK_ON,
    }),
    'stop': (state: TimerState) => ({
      ...state,
      timeLeft: 0,
      status: TimerStatus.OFF,
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
