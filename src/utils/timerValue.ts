export default function timerValue(number: number): string {
  const minutes = Math.floor(number / 60)
  const seconds = number % 60
  return `${minutes}:${seconds > 10 ? seconds : `0${seconds}`}`
}
