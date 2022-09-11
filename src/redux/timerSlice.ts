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
  pomodorosTime: number
  pomodoroLimit: number
  currentPausesTime: number
  totalPausesTime: number
}

const initialState: TimerState = {
  startTime: 0,
  timeLeft: POMODORO_TIME,
  status: TimerStatus.OFF,
  pomodorosCount: 0,
  pomodorosTime: 0,
  pomodoroLimit: POMODORO_TIME,
  currentPausesTime: 0,
  totalPausesTime: 0,
}

let pomodoroStart = 0
let pauseStart = 0

export const timerSlice = createSlice({
  name: 'timer',
  initialState: initialState,
  reducers: {
    'tick': (state) => {
      let baseTime = state.pomodoroLimit
      if (state.status === TimerStatus.BREAK_ON)
        baseTime =
          state.pomodorosCount % 4 === 0 ? LONG_BREAK_TIME : SHORT_BREAK_TIME
      return {
        ...state,
        timeLeft:
          baseTime +
          state.currentPausesTime -
          Math.round((Date.now() - state.startTime) / 1000),
      }
    },
    'pomodoro/start': (state) => {
      pomodoroStart = Date.now()
      return {
        ...state,
        startTime: Date.now(),
        timeLeft: state.pomodoroLimit,
        status: TimerStatus.POMODORO_ON,
        pomodorosCount: state.pomodorosCount + 1,
        totalPausesTime: state.totalPausesTime + state.currentPausesTime,
        currentPausesTime: 0,
      }
    },
    'pomodoro/complete': (state) => ({
      ...state,
      startTime: Date.now(),
      pomodorosTime:
        state.pomodorosTime -
        state.currentPausesTime +
        Math.round((Date.now() - pomodoroStart) / 1000),
      timeLeft:
        state.pomodorosCount % 4 === 0 ? LONG_BREAK_TIME : SHORT_BREAK_TIME,
      status: TimerStatus.BREAK_ON,
      totalPausesTime: state.totalPausesTime + state.currentPausesTime,
      currentPausesTime: 0,
    }),
    'pomodoro/increment': (state) => ({
      ...state,
      pomodoroLimit: state.pomodoroLimit + 60,
    }),
    'pomodoro/decrement': (state) => ({
      ...state,
      pomodoroLimit: state.pomodoroLimit - 60,
    }),
    'break/start': (state) => ({
      ...state,
      startTime: Date.now(),
      pomodorosTime:
        state.pomodorosTime -
        state.currentPausesTime +
        Math.round((Date.now() - pomodoroStart) / 1000),
      timeLeft:
        state.pomodorosCount % 4 === 0 ? LONG_BREAK_TIME : SHORT_BREAK_TIME,
      status: TimerStatus.BREAK_ON,
      totalPausesTime: state.totalPausesTime + state.currentPausesTime,
      currentPausesTime: 0,
    }),
    'break/skip': (state) => {
      pomodoroStart = Date.now()
      return {
        ...state,
        startTime: Date.now(),
        timeLeft: state.pomodoroLimit,
        status: TimerStatus.POMODORO_ON,
        pomodorosCount: state.pomodorosCount + 1,
        totalPausesTime: state.totalPausesTime + state.currentPausesTime,
        currentPausesTime: 0,
      }
    },
    'pause': (state) => {
      pauseStart = Date.now()
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
      currentPausesTime:
        state.currentPausesTime + Math.round((Date.now() - pauseStart) / 1000),
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
      pomodorosTime: 0,
      currentPausesTime: 0,
      totalPausesTime: 0,
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
