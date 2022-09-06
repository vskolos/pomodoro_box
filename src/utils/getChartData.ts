import getAxisData from './getAxisData'
import getBarData from './getBarData'
import getWeekBoundaries, { Week } from './getWeekBoundaries'

export type DayData = {
  date: Date
  pomodoros: number
  pauses: number
  stops: number
}

export default function getChartData(week: Week, data: DayData[]) {
  const [weekStart, weekEnd] = getWeekBoundaries(week)
  const weekData = data
    .filter((entry) => entry.date >= weekStart && entry.date <= weekEnd)
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  const maxPomodoros = weekData
    .map((entry) => entry.pomodoros)
    .reduce((prev, curr) => (curr > prev ? curr : prev))

  const axisStep = Math.ceil(maxPomodoros / 5)
  const axisData = getAxisData(axisStep)
  const barData = getBarData(weekData, weekStart)

  return { axisStep, axisData, barData }
}
