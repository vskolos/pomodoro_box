import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { RootState } from './store'

export type TTask = {
  id: number
  text: string
  count: number
}

const tasksAdapter = createEntityAdapter<TTask>()
const initialState = tasksAdapter.getInitialState()

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    add: tasksAdapter.addOne,
    increment: tasksAdapter.setOne,
    decrement: tasksAdapter.setOne,
    edit: tasksAdapter.setOne,
    done: tasksAdapter.setOne,
    restore: (state, action: PayloadAction<TTask>) => {
      tasksAdapter.removeOne(state, action.payload.id)
      tasksAdapter.addOne(state, { ...action.payload, id: Date.now() })
    },
    remove: tasksAdapter.removeOne,
  },
})

export default tasksSlice.reducer

export const {
  add: addTask,
  increment: incrementTask,
  decrement: decrementTask,
  edit: editTask,
  done: doneTask,
  restore: restoreTask,
  remove: removeTask,
} = tasksSlice.actions

export const { selectAll: selectAllTasks, selectById: selectTaskById } =
  tasksAdapter.getSelectors((state: RootState) => state.tasks)
