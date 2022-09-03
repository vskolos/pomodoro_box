import React from 'react'
import { Provider } from 'react-redux'
import Header from '../src/partials/Header/Header'
import Head from 'next/head'
import { store } from '../src/redux/store'
import { styled } from '@linaria/react'
import Stats from '../src/partials/Stats/Stats'
import Favicons from '../src/components/Favicons/Favicons'

export default function App() {
  return (
    <Provider store={store}>
      <Head>
        <Favicons />
        <title>pomodoro_box | Статистика</title>
      </Head>
      <Header />
      <Main>
        <Stats />
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
  }

  @media (min-width: 1440px) {
    padding-inline: calc((100% - 1280px) / 2);
  }
`
