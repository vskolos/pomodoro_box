import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useChart from '../../hooks/useChart'
import { setDayStats } from '../../redux/statsSlice'
import { RootState } from '../../redux/store'
import { POMODORO_TIME } from '../../redux/timerSlice'
import * as S from './Chart.styled'

export default function Chart() {
  const { axisStep, axisData, barData } = useChart()
  const day = useSelector((state: RootState) => state.stats.day)
  const dispatch = useDispatch()

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
            onClick={() => {
              if (day !== bar.id) dispatch(setDayStats(bar.id))
            }}
            key={bar.id}
            style={{
              height: `${
                bar.pomodorosTime > 0
                  ? `${
                      (bar.pomodorosTime / POMODORO_TIME / (axisStep * 5)) * 100
                    }%`
                  : '5px'
              }`,
              backgroundColor:
                bar.pomodorosTime === 0
                  ? 'var(--grayC4)'
                  : day === bar.id
                  ? 'var(--red400)'
                  : '',
            }}
          >
            <S.BarText
              style={
                {
                  '--color': day === bar.id ? 'var(--red400)' : 'var(--gray99)',
                } as React.CSSProperties
              }
            >
              {bar.day}
            </S.BarText>
          </S.Bar>
        ))}
      </S.Bars>
    </S.Chart>
  )
}
