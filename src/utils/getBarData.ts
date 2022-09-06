import { DayData } from './getChartData'

const weekdays = {
  0: 'Вс',
  1: 'Пн',
  2: 'Вт',
  3: 'Ср',
  4: 'Чт',
  5: 'Пт',
  6: 'Сб',
}

export default function getBarData(
  weekData: DayData[],
  weekStart: Date
): { day: string; pomodoros: number }[] {
  const data = []
  const currentDay = weekStart
  for (let i = 0; i < 7; i++) {
    const currentDayData = weekData.filter(
      (entry) => entry.date.getDate() === currentDay.getDate()
    )
    data.push({
      day: weekdays[currentDay.getDay()],
      pomodoros: currentDayData
        .map((entry) => entry.pomodoros)
        .reduce((prev, curr) => prev + curr, 0),
    })
    currentDay.setDate(currentDay.getDate() + 1)
  }
  return data
}
