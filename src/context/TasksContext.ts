import React, { createContext } from 'react'

type Task = {
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

export const initialTasks: Task[] = [
  // {
  //   id: 0,
  //   text: 'Сверстать сайт',
  //   count: 1,
  // },
  // {
  //   id: 1,
  //   text: 'Проверить валидность',
  //   count: 2,
  // },
]

export const TasksContext = createContext<Task[]>(null)
export const TasksDispatchContext =
  createContext<React.Dispatch<TaskAction>>(null)

export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
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
