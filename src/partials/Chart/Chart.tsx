import React from 'react'
import * as S from './Chart.styled'

type Props = {
  data?: {
    date: Date
    pomodoros: number
  }[]
}

export default function Chart({}: Props) {
  return (
    <S.Chart>
      <S.Lines>
        <S.Line>1 ч 40 мин</S.Line>
        <S.Line>1 ч 15 мин</S.Line>
        <S.Line>50 мин</S.Line>
        <S.Line>25 мин</S.Line>
      </S.Lines>
      <S.Legend />
      <S.Bars>
        <S.Bar style={{ height: '30%' }}>
          <S.BarText>Пн</S.BarText>
        </S.Bar>
        <S.Bar style={{ height: '35%' }}>
          <S.BarText>Вт</S.BarText>
        </S.Bar>
        <S.Bar style={{ height: '88%' }}>
          <S.BarText>Ср</S.BarText>
        </S.Bar>
        <S.Bar style={{ height: '10%' }}>
          <S.BarText>Чт</S.BarText>
        </S.Bar>
        <S.Bar style={{ height: '69%' }}>
          <S.BarText>Пт</S.BarText>
        </S.Bar>
        <S.Bar style={{ height: '100%' }}>
          <S.BarText>Сб</S.BarText>
        </S.Bar>
        <S.Bar style={{ height: '20%' }}>
          <S.BarText>Вс</S.BarText>
        </S.Bar>
      </S.Bars>
    </S.Chart>
  )
}
