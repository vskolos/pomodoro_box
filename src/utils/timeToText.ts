export default function timeToText(seconds: number) {
  const hours = Math.floor(seconds / 60 / 60)
  const minutesLeft = (seconds / 60) % 60

  return hours > 0 ? `${hours} ч ${minutesLeft} мин` : `${minutesLeft} мин`
}
