import { styled } from '@linaria/react'
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

export const Main = styled.main`
  padding: 32px 15px;
  display: grid;
  gap: 32px;

  @media (min-width: 576px) {
    padding-inline: 30px;
  }

  @media (min-width: 768px) {
    padding-inline: 50px;
  }

  @media (min-width: 1024px) {
    padding-inline: 80px;
  }

  @media (min-width: 1440px) {
    padding-inline: calc((100% - 1280px) / 2);
  }
`

export const Data = styled.div`
  display: grid;
  gap: 25px;
`

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
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
