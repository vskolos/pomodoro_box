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
    padding-inline: calc((100% - 516px) / 2);
  }

  @media (min-width: 768px) {
    padding-block: 100px;
  }

  @media (min-width: 1024px) {
    padding-inline: 80px;
    grid-auto-flow: column;
    align-items: start;
  }

  @media (min-width: 1200px) {
    grid-template-columns: max-content auto;
  }

  @media (min-width: 1440px) {
    padding-inline: calc((100% - 1280px) / 2);
  }
`

export const Data = styled.div`
  max-width: 508px;
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
