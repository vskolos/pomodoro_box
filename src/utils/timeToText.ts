export default function timeToText(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const minutesLeft = minutes % 60

  return hours > 0 ? `${hours} ч ${minutesLeft} мин` : `${minutesLeft} мин`
}
