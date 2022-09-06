export enum Week {
  CURRENT = 'current',
  PREVIOUS = 'previous',
  PREV_PREV = 'prev_prev',
}

export default function getWeekBoundaries(week: Week): [Date, Date] {
  const now = new Date()
  const start = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay() + 1
  )
  const end = new Date(
    now.getFullYear(),
    now.getMonth(),
    start.getDate() + 6,
    23,
    59,
    59,
    999
  )

  if (week === Week.PREVIOUS) {
    start.setDate(start.getDate() - 7)
    end.setDate(end.getDate() - 7)
  }

  if (week === Week.PREV_PREV) {
    start.setDate(start.getDate() - 14)
    end.setDate(end.getDate() - 14)
  }

  return [start, end]
}
