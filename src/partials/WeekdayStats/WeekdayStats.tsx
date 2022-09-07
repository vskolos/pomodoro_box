import React from 'react'
import timeToText from '../../utils/timeToText'
import * as S from './WeekdayStats.styled'

type Props = {
  dayId: number
  seconds: number
}

function getWeekdayName(date: number) {
  const dayName = new Date(date).toLocaleString('ru-RU', { weekday: 'long' })
  return dayName.slice(0, 1).toUpperCase() + dayName.slice(1)
}

export default function WeekdayStats({ dayId, seconds }: Props) {
  return (
    <S.Weekday>
      <S.Title>{getWeekdayName(dayId)}</S.Title>
      <S.Text>
        {seconds > 0 ? (
          <>
            Вы работали над задачами в течение
            <S.Time> {timeToText({ seconds })}</S.Time>
          </>
        ) : (
          'Нет данных'
        )}
      </S.Text>
    </S.Weekday>
  )
}
