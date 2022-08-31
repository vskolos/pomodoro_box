import React, { createContext } from 'react'

export type TTask = {
  id: number
  text: string
  count: number
}

export enum ETaskAction {
  ADD = 'task/add',
  INCREASE = 'task/increase',
  DECREASE = 'task/decrease',
  EDIT = 'task/edit',
  DELETE = 'task/delete',
}

type TaskAction =
  | {
      type: ETaskAction.ADD
      text: string
    }
  | {
      type: ETaskAction.EDIT
      id: number
      text: string
    }
  | {
      type: ETaskAction.INCREASE | ETaskAction.DECREASE | ETaskAction.DELETE
      id: number
    }

export const initialTasks: TTask[] = []

export const TasksContext = createContext<TTask[]>(null)
export const TasksDispatchContext =
  createContext<React.Dispatch<TaskAction>>(null)

export function tasksReducer(tasks: TTask[], action: TaskAction): TTask[] {
  switch (action.type) {
    case ETaskAction.ADD:
      return [
        ...tasks,
        {
          id: Date.now(),
          text: action.text,
          count: 1,
        },
      ]
    case ETaskAction.INCREASE:
      return tasks.map((task) =>
        task.id === action.id ? { ...task, count: task.count + 1 } : task
      )
    case ETaskAction.DECREASE:
      return tasks.map((task) =>
        task.id === action.id ? { ...task, count: task.count - 1 } : task
      )
    case ETaskAction.EDIT:
      return tasks.map((task) =>
        task.id === action.id ? { ...task, text: action.text } : task
      )
    case ETaskAction.DELETE:
      return tasks.filter((task) => task.id !== action.id)
  }
}
