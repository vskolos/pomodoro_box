import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon, { EIcon } from '../../components/Icon/Icon'
import {
  addStats,
  loadStats,
  saveStats,
  selectAllStats,
  selectStatsById,
  setWeekStats,
  Week,
} from '../../redux/statsSlice'
import { RootState } from '../../redux/store'
import { POMODORO_TIME } from '../../redux/timerSlice'
import timeToText from '../../utils/timeToText'
import CalculatedStat from '../CalculatedStat/CalculatedStat'
import Chart from '../Chart/Chart'
import PomodoroStats from '../PomodoroStats/PomodoroStats'
import WeekdayStats from '../WeekdayStats/WeekdayStats'
import * as S from './Stats.styled'

const data = [
  {
    id: new Date(2022, 8, 5).getTime(),
    pomodoros: 5,
    focus: 24,
    pauses: 4,
    stops: 0,
  },
  {
    id: new Date(2022, 8, 3).getTime(),
    pomodoros: 6,
    focus: 17,
    pauses: 9,
    stops: 4,
  },
  {
    id: new Date(2022, 8, 9).getTime(),
    pomodoros: 10,
    focus: 68,
    pauses: 1,
    stops: 3,
  },
  {
    id: new Date(2022, 8, 7).getTime(),
    pomodoros: 4,
    focus: 26,
    pauses: 99,
    stops: 0,
  },
  {
    id: new Date(2022, 8, 6).getTime(),
    pomodoros: 7,
    focus: 44,
    pauses: 6,
    stops: 2,
  },
]

export default function Stats() {
  const week = useSelector((state: RootState) => state.stats.week)
  const dayId = useSelector((state: RootState) => state.stats.day)
  const day = useSelector((state: RootState) => selectStatsById(state, dayId))

  const [isWeekSelectOpen, setIsWeekSelectOpen] = useState(false)

  const stats = useSelector(selectAllStats)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadStats())
    data.forEach((entry) => {
      dispatch(addStats(entry))
    })
  }, [])

  useEffect(() => {
    dispatch(saveStats(stats))
  }, [stats])

  function handleWeekChange(week: Week) {
    dispatch(setWeekStats(week))
    setIsWeekSelectOpen(false)
  }

  return (
    <>
      <S.Header>
        <S.Title>Ваша активность</S.Title>
        <S.Select>
          <S.SelectButton onClick={() => setIsWeekSelectOpen(true)}>
            {week}
            <Icon
              type={EIcon.ARROW_DOWN}
              style={isWeekSelectOpen ? { rotate: '180deg', zIndex: 10 } : {}}
            />
          </S.SelectButton>
          {isWeekSelectOpen && (
            <S.SelectList>
              <S.SelectButton onClick={() => handleWeekChange(Week.CURRENT)}>
                {Week.CURRENT}
              </S.SelectButton>
              <S.SelectButton onClick={() => handleWeekChange(Week.PREVIOUS)}>
                {Week.PREVIOUS}
              </S.SelectButton>
              <S.SelectButton onClick={() => handleWeekChange(Week.PREV_PREV)}>
                {Week.PREV_PREV}
              </S.SelectButton>
            </S.SelectList>
          )}
        </S.Select>
      </S.Header>
      <S.ChartSection>
        <Chart />
        <WeekdayStats
          dayId={dayId}
          seconds={day?.pomodoros * POMODORO_TIME ?? 0}
        />
        <PomodoroStats count={day?.pomodoros ?? 0} />
      </S.ChartSection>
      <S.Calculated>
        <CalculatedStat
          title="Фокус"
          value={`${day?.focus ?? 0}%`}
          icon={EIcon.STAT_FOCUS}
          color="orange"
          active={day != null}
        />
        <CalculatedStat
          title="Время на паузе"
          value={timeToText({ minutes: day?.pauses ?? 0, short: true })}
          icon={EIcon.STAT_PAUSE}
          color="purple"
          active={day != null}
        />
        <CalculatedStat
          title="Остановки"
          value={`${day?.stops ?? 0}`}
          icon={EIcon.STAT_STOPS}
          color="blue"
          active={day != null}
        />
      </S.Calculated>
    </>
  )
}
