import React, { useState } from 'react'
import getChartData, { DayData } from '../../utils/getChartData'
import { Week } from '../../utils/getWeekBoundaries'
import * as S from './Chart.styled'

type Props = {
  data: DayData[]
  week: Week
  selectedDayId: string
  onDayChange: (id: string) => void
}

export default function Chart({
  data,
  week,
  selectedDayId,
  onDayChange,
}: Props) {
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
            onClick={() => onDayChange(bar.day)}
            key={bar.day}
            style={{
              height: `${
                bar.pomodoros > 0
                  ? `${(bar.pomodoros / (axisStep * 5)) * 100}%`
                  : '5px'
              }`,
              backgroundColor:
                bar.pomodoros === 0
                  ? 'var(--grayC4)'
                  : selectedDayId === bar.day
                  ? 'var(--red400)'
                  : 'var(--red300)',
            }}
          >
            <S.BarText
              style={{
                color:
                  selectedDayId === bar.day ? 'var(--red400)' : 'var(--gray99)',
              }}
            >
              {bar.day}
            </S.BarText>
          </S.Bar>
        ))}
      </S.Bars>
    </S.Chart>
  )
}
