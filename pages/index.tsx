import React from 'react'
import { Provider } from 'react-redux'
import Header from '../src/partials/Header/Header'
import Info from '../src/partials/Info/Info'
import Tasks from '../src/partials/Tasks/Tasks'
import Pomodoro from '../src/partials/Pomodoro/Pomodoro'
import Data from '../src/partials/Data/Data'
import Head from 'next/head'
import { store } from '../src/redux/store'
import { styled } from '@linaria/react'
import Favicons from '../src/components/Favicons/Favicons'

export default function App() {
  return (
    <Provider store={store}>
      <Head>
        <Favicons />
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

// Styles

const Main = styled.main`
  padding: 32px 15px;
  display: grid;
  gap: 16px;

  @media (min-width: 576px) {
    padding-inline: calc((100% - 516px) / 2);
    gap: 32px;
  }

  @media (min-width: 768px) {
    padding-block: 100px;
  }

  @media (min-width: 1024px) {
    padding-inline: 80px;
    grid-auto-flow: column;
    align-items: start;
  }

  @media (min-width: 1440px) {
    padding-inline: calc((100% - 1280px) / 2);
    grid-template-columns: max-content auto;
  }
`
