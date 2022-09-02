import React, { useReducer } from 'react'
import { Provider } from 'react-redux'
import Header from '../src/components/Header/Header'
import Info from '../src/partials/Info/Info'
import Tasks from '../src/partials/Tasks/Tasks'
import Pomodoro from '../src/partials/Pomodoro/Pomodoro'
import Main from '../src/components/Main/Main'
import Data from '../src/partials/Data/Data'
import Head from 'next/head'
import { store } from '../src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
