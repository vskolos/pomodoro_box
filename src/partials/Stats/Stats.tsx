import React, { useState } from 'react'
import { EIcon } from '../../components/Icon/Icon'
import { Week } from '../../utils/getWeekBoundaries'
import CalculatedStat from '../CalculatedStat/CalculatedStat'
import Chart from '../Chart/Chart'
import PomodoroStats from '../PomodoroStats/PomodoroStats'
import WeekdayStats from '../WeekdayStats/WeekdayStats'
import * as S from './Stats.styled'

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

export default function Stats() {
  const [selectedDayId, setSelectedDayId] = useState('')
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
        <Chart
          data={data}
          week={week}
          selectedDayId={selectedDayId}
          onDayChange={setSelectedDayId}
        />
        <WeekdayStats minutes={555} />
        <PomodoroStats count={5} />
      </S.ChartSection>
      <S.Calculated>
        <CalculatedStat
          title="Фокус"
          value="27%"
          icon={EIcon.STAT_FOCUS}
          color="orange"
          active={true}
        />
        <CalculatedStat
          title="Время на паузе"
          value="9м"
          icon={EIcon.STAT_PAUSE}
          color="purple"
          active={true}
        />
        <CalculatedStat
          title="Остановки"
          value="3"
          icon={EIcon.STAT_STOPS}
          color="blue"
          active={true}
        />
      </S.Calculated>
    </>
  )
}
