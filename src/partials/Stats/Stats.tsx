import React, { useState } from 'react'
import { EIcon } from '../../components/Icon/Icon'
import { Week } from '../../utils/getWeekBoundaries'
import CalculatedStat from '../CalculatedStat/CalculatedStat'
import Chart from '../Chart/Chart'
import PomodoroStats from '../PomodoroStats/PomodoroStats'
import WeekdayStats from '../WeekdayStats/WeekdayStats'
import * as S from './Stats.styled'

export default function Stats() {
  const [hasData, setHasData] = useState(true)
  const [week, setWeek] = useState(Week.CURRENT)

  function handleWeekChange(e: React.ChangeEvent<HTMLSelectElement>) {
    switch (e.target.value) {
      case 'current':
        return setWeek(Week.CURRENT)
      case 'previous':
        return setWeek(Week.PREVIOUS)
      case 'prev_prev':
        return setWeek(Week.PREV_PREV)
    }
  }

  return (
    <>
      <S.Header>
        <S.Title>Ваша активность</S.Title>
        <select onChange={handleWeekChange} value={week}>
          <option value={Week.CURRENT}>Эта неделя</option>
          <option value={Week.PREVIOUS}>Прошедшая неделя</option>
          <option value={Week.PREV_PREV}>2 недели назад</option>
        </select>
      </S.Header>
      <S.ChartSection>
        <Chart week={week} />
        <WeekdayStats minutes={555} />
        <PomodoroStats count={5} />
      </S.ChartSection>
      <S.Calculated>
        <CalculatedStat
          title="Фокус"
          value="27%"
          icon={EIcon.STAT_FOCUS}
          color="orange"
          active={hasData}
        />
        <CalculatedStat
          title="Время на паузе"
          value="9м"
          icon={EIcon.STAT_PAUSE}
          color="purple"
          active={hasData}
        />
        <CalculatedStat
          title="Остановки"
          value="3"
          icon={EIcon.STAT_STOPS}
          color="blue"
          active={hasData}
        />
      </S.Calculated>
    </>
  )
}
