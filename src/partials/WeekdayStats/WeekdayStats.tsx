import React from 'react'
import timeToText from '../../utils/timeToText'
import * as S from './WeekdayStats.styled'

type Props = {
  minutes: number
}

export default function WeekdayStats({ minutes }: Props) {
  return (
    <S.Weekday>
      <S.Title className="weekday-name">Понедельник</S.Title>
      <S.Text>
        {minutes > 0 ? (
          <>
            Вы работали над задачами в течение
            <S.Time> {timeToText(minutes)}</S.Time>
          </>
        ) : (
          'Нет данных'
        )}
      </S.Text>
    </S.Weekday>
  )
}
