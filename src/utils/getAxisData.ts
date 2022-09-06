import { POMODORO_TIME } from '../redux/timerSlice'
import timeToText from './timeToText'

export default function getAxisData(axisStep: number): string[] {
  const axisData: string[] = []

  for (let i = 1; i < 5; i++) {
    axisData.unshift(timeToText(i * axisStep * POMODORO_TIME))
  }

  return axisData
}
