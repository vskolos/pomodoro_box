import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import getStartOfDay from '../utils/getStartOfDay'
import { RootState } from './store'

export enum Week {
  CURRENT = 'Эта неделя',
  PREVIOUS = 'Предыдущая неделя',
  PREV_PREV = '2 недели назад',
}

export type TStats = {
  id: number
  pomodoros: number
  focus: number
  pauses: number
  stops: number
}

const statsAdapter = createEntityAdapter<TStats>()
const initialState = statsAdapter.getInitialState({
  day: getStartOfDay(new Date()),
  week: Week.CURRENT,
})

export const statsSlice = createSlice({
  name: 'stats',
  initialState: initialState,
  reducers: {
    add: statsAdapter.addOne,
    save: (_, action: PayloadAction<TStats[]>) => {
      localStorage.setItem('pomodoro', JSON.stringify(action.payload))
    },
    load: (state) => {
      const stats = JSON.parse(localStorage.getItem('pomodoro'))
      if (!stats || !stats.length) return state
      statsAdapter.setMany(state, stats)
    },
    setDay: (state, action: PayloadAction<number>) => {
      state.day = action.payload
    },
    setWeek: (state, action: PayloadAction<Week>) => {
      state.week = action.payload
    },
  },
})

export default statsSlice.reducer

export const {
  add: addStats,
  save: saveStats,
  load: loadStats,
  setDay: setDayStats,
  setWeek: setWeekStats,
} = statsSlice.actions

export const {
  selectAll: selectAllStats,
  selectById: selectStatsById,
  selectEntities: selectStatsEntities,
} = statsAdapter.getSelectors((state: RootState) => state.stats)
