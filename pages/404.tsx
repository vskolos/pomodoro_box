import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'
import Head from 'next/head'
import Header from '../src/partials/Header/Header'
import { styled } from '@linaria/react'
import Favicons from '../src/components/Favicons/Favicons'

export default function App() {
  return (
    <Provider store={store}>
      <Head>
        <Favicons />
        <title>pomodoro_box | Ошибка 404</title>
      </Head>
      <Header />
      <Main>
        <Title>Ошибка 404. Страница не найдена</Title>
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

  @media (min-width: 1200px) {
    grid-template-columns: max-content auto;
  }

  @media (min-width: 1440px) {
    padding-inline: calc((100% - 1280px) / 2);
  }
`

const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;
  line-height: 1;

  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 33px;
  }
`
