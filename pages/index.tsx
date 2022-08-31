import React, { useReducer } from 'react'
import {
  initialTasks,
  TasksContext,
  TasksDispatchContext,
  tasksReducer,
} from '../src/context/TasksContext'
import Header from '../src/partials/Header/Header'
import Info from '../src/partials/Info/Info'
import Tasks from '../src/partials/Tasks/Tasks'
import Pomodoro from '../src/partials/Pomodoro/Pomodoro'
import Main from '../src/partials/Main/Main'
import Data from '../src/partials/Data/Data'
import Head from 'next/head'

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <Head>
          <title>pomodoro_box</title>
        </Head>
        <Header />
        <Main>
          <Data>
            <Info />
            <Tasks />
          </Data>
          <Pomodoro />
        </Main>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}
