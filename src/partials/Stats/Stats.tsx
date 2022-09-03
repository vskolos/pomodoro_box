import React from 'react'
import { EIcon } from '../../components/Icon/Icon'
import CalculatedStat from '../CalculatedStat/CalculatedStat'
import PomodoroStats from '../PomodoroStats/PomodoroStats'
import WeekdayStats from '../WeekdayStats/WeekdayStats'
import * as S from './Stats.styled'

export default function Stats() {
  return (
    <>
      <S.Header>
        <S.Title>Ваша активность</S.Title>
        <select>
          <option>Эта неделя</option>
          <option>Прошедшая неделя</option>
          <option>2 недели назад</option>
        </select>
      </S.Header>
      <S.ChartSection>
        <S.Chart>Здесь будет график</S.Chart>
        <WeekdayStats minutes={555} />
        <PomodoroStats count={5} />
      </S.ChartSection>
      <S.Calculated>
        <CalculatedStat title="Фокус" value="27%" icon={EIcon.STAT_FOCUS} />
        <CalculatedStat
          title="Время на паузе"
          value="9м"
          icon={EIcon.STAT_PAUSE}
        />
        <CalculatedStat title="Остановки" value="3" icon={EIcon.STAT_STOPS} />
      </S.Calculated>
    </>
  )
}
