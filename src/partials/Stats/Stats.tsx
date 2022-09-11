import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon, { EIcon } from '../../components/Icon/Icon'
import useDemoData from '../../hooks/useDemoData'
import {
  loadStats,
  saveStats,
  selectStatsById,
  setWeekStats,
  Week,
} from '../../redux/statsSlice'
import { RootState } from '../../redux/store'
import timeToText from '../../utils/timeToText'
import CalculatedStat from '../CalculatedStat/CalculatedStat'
import Chart from '../Chart/Chart'
import PomodoroStats from '../PomodoroStats/PomodoroStats'
import WeekdayStats from '../WeekdayStats/WeekdayStats'
import * as S from './Stats.styled'

export default function Stats() {
  const week = useSelector((state: RootState) => state.stats.week)
  const dayId = useSelector((state: RootState) => state.stats.day)
  const day = useSelector((state: RootState) => selectStatsById(state, dayId))

  const [isWeekSelectOpen, setIsWeekSelectOpen] = useState(false)
  const dispatch = useDispatch()

  useDemoData()

  useEffect(() => {
    dispatch(loadStats())

    return () => {
      dispatch(saveStats())
    }
  }, [])

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
        <WeekdayStats dayId={dayId} seconds={day?.pomodorosTime ?? 0} />
        <PomodoroStats count={day?.pomodorosCount ?? 0} />
      </S.ChartSection>
      <S.Calculated>
        <CalculatedStat
          title="Фокус"
          value={`${
            day?.pomodorosTime > 0
              ? Math.round(
                  (day?.pomodorosTime /
                    (day?.pomodorosTime + day?.pausesTime)) *
                    100
                )
              : 0
          }%`}
          icon={EIcon.STAT_FOCUS}
          color="orange"
          active={day != null && day.pomodorosTime > 0}
        />
        <CalculatedStat
          title="Время на паузе"
          value={timeToText({ seconds: day?.pausesTime ?? 0, short: true })}
          icon={EIcon.STAT_PAUSE}
          color="purple"
          active={day != null && day.pomodorosTime > 0}
        />
        <CalculatedStat
          title="Остановки"
          value={`${day?.stopsCount ?? 0}`}
          icon={EIcon.STAT_STOPS}
          color="blue"
          active={day != null && day.pomodorosTime > 0}
        />
      </S.Calculated>
    </>
  )
}
