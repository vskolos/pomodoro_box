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
  pomodorosCount: number
  pomodorosTime: number
  pausesTime: number
  stopsCount: number
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
    'load': (state) => {
      if (state.ids.includes(getStartOfDay(new Date()))) return

      statsAdapter.addOne(state, {
        id: getStartOfDay(new Date()),
        pomodorosCount: 0,
        pomodorosTime: 0,
        pausesTime: 0,
        stopsCount: 0,
      })

      const localStats = localStorage.getItem('pomodoro')
      if (localStats === 'undefined') return

      const stats = JSON.parse(localStats)
      if (!stats || !stats.length) return

      statsAdapter.setMany(state, stats)
    },
    'update': (state, action: PayloadAction<Partial<TStats>>) => {
      const entity = state.entities[getStartOfDay(new Date())]
      if (!entity) return state

      statsAdapter.updateOne(state, {
        id: entity.id,
        changes: {
          pomodorosCount:
            entity.pomodorosCount + (action.payload.pomodorosCount ?? 0),
          pomodorosTime:
            entity.pomodorosTime + (action.payload.pomodorosTime ?? 0),
          pausesTime: entity.pausesTime + (action.payload.pausesTime ?? 0),
          stopsCount: entity.stopsCount + (action.payload.stopsCount ?? 0),
        },
      })
    },
    'save': (state) => {
      if (state.ids.length > 0)
        localStorage.setItem(
          'pomodoro',
          JSON.stringify(state.ids.map((id) => state.entities[id]))
        )
    },
    'set/day': (state, action: PayloadAction<number>) => {
      state.day = action.payload
    },
    'set/week': (state, action: PayloadAction<Week>) => {
      state.week = action.payload
    },
  },
})

export default statsSlice.reducer

export const {
  'save': saveStats,
  'load': loadStats,
  'update': updateStats,
  'set/day': setDayStats,
  'set/week': setWeekStats,
} = statsSlice.actions

export const {
  selectAll: selectAllStats,
  selectById: selectStatsById,
  selectEntities: selectStatsEntities,
} = statsAdapter.getSelectors((state: RootState) => state.stats)
