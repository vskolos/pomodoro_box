import React, { useState } from 'react'
import getChartData, { DayData } from '../../utils/getChartData'
import { Week } from '../../utils/getWeekBoundaries'
import * as S from './Chart.styled'

type Props = {
  data?: DayData[]
  week: Week
}

const data = [
  {
    date: new Date(Date.now() - 1000 * 3600 * 24),
    pomodoros: 5,
    pauses: 4,
    stops: 0,
  },
  {
    date: new Date(Date.now()),
    pomodoros: 6,
    pauses: 9,
    stops: 4,
  },
  {
    date: new Date(2022, 8, 9, 12, 22, 15),
    pomodoros: 10,
    pauses: 1,
    stops: 3,
  },
]

export default function Chart({ week }: Props) {
  const [activeBarId, setActiveBarId] = useState('')
  const { axisStep, axisData, barData } = getChartData(week, data)

  return (
    <S.Chart>
      <S.Lines>
        {axisData.map((line) => (
          <S.Line key={line}>{line}</S.Line>
        ))}
      </S.Lines>
      <S.Legend />
      <S.Bars>
        {barData.map((bar) => (
          <S.Bar
            onClick={() => setActiveBarId(bar.day)}
            key={bar.day}
            style={{
              height: `${
                bar.pomodoros > 0
                  ? `${(bar.pomodoros / (axisStep * 5)) * 100}%`
                  : '5px'
              }`,
              backgroundColor: bar.pomodoros === 0 && 'var(--grayC4)',
            }}
            disabled={activeBarId === bar.day}
          >
            <S.BarText>{bar.day}</S.BarText>
          </S.Bar>
        ))}
      </S.Bars>
    </S.Chart>
  )
}
