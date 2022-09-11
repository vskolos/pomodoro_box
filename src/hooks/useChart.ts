import { useSelector } from 'react-redux'
import { selectStatsEntities, TStats, Week } from '../redux/statsSlice'
import { RootState } from '../redux/store'
import { POMODORO_TIME } from '../redux/timerSlice'
import timeToText from '../utils/timeToText'

const weekdays = new Map([
  [0, 'Вс'],
  [1, 'Пн'],
  [2, 'Вт'],
  [3, 'Ср'],
  [4, 'Чт'],
  [5, 'Пт'],
  [6, 'Сб'],
])

function getWeekDays(week: Week): number[] {
  const now = new Date()
  const start = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDay() === 0 ? now.getDate() - 6 : now.getDate() - now.getDay() + 1
  )

  if (week === Week.PREVIOUS) start.setDate(start.getDate() - 7)
  if (week === Week.PREV_PREV) start.setDate(start.getDate() - 14)

  const weekDays = []
  for (let i = 0; i < 7; i++)
    weekDays.push(
      new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate() + i
      ).getTime()
    )

  return weekDays
}

function getBarData(
  weekData: TStats[],
  weekDays: number[]
): { id: number; day: string; pomodorosTime: number }[] {
  return weekDays.map((day, index) => {
    const dayData = weekData[index]
    if (!dayData)
      return {
        id: day,
        day: weekdays.get(new Date(day).getDay()),
        pomodorosTime: 0,
      }
    return {
      id: dayData.id,
      day: weekdays.get(new Date(dayData.id).getDay()),
      pomodorosTime: dayData.pomodorosTime,
    }
  })
}

function getAxisData(axisStep: number): string[] {
  const axisData: string[] = []

  for (let i = 1; i < 5; i++) {
    axisData.unshift(timeToText({ seconds: i * axisStep * POMODORO_TIME }))
  }

  return axisData
}

export default function useChart() {
  const statsEntities = useSelector(selectStatsEntities)
  const week = useSelector((state: RootState) => state.stats.week)
  const days = getWeekDays(week)
  const data = days.map((day) => statsEntities[day])

  const maxPomodorosTime = data
    .map((entry) => (entry ? entry.pomodorosTime : 0))
    .reduce((prev, curr) => (curr > prev ? curr : prev), 0)

  const axisStep = Math.ceil(
    maxPomodorosTime ? maxPomodorosTime / POMODORO_TIME / 5 : 1
  )
  const axisData = getAxisData(axisStep)
  const barData = getBarData(data, days)

  return { axisStep, axisData, barData }
}
