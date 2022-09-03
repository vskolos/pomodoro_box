import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
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
    remove: tasksAdapter.removeOne,
  },
})

export default tasksSlice.reducer

export const {
  add: addTask,
  increment: incrementTask,
  decrement: decrementTask,
  edit: editTask,
  remove: removeTask,
} = tasksSlice.actions

export const { selectAll: selectAllTasks, selectById: selectTaskById } =
  tasksAdapter.getSelectors((state: RootState) => state.tasks)
