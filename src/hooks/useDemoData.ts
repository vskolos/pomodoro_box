import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadStats } from '../redux/statsSlice'

const now = new Date()
const demoData = [
  {
    id: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 12
    ).getTime(),
    pomodorosCount: 15,
    pomodorosTime: 42 * 60,
    pausesTime: 11 * 60,
    stopsCount: 4,
  },
  {
    id: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 11
    ).getTime(),
    pomodorosCount: 5,
    pomodorosTime: 116 * 60,
    pausesTime: 55 * 60,
    stopsCount: 3,
  },
  {
    id: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 9
    ).getTime(),
    pomodorosCount: 14,
    pomodorosTime: 37 * 60,
    pausesTime: 10 * 60,
    stopsCount: 0,
  },
  {
    id: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 8
    ).getTime(),
    pomodorosCount: 15,
    pomodorosTime: 220 * 60,
    pausesTime: 39 * 60,
    stopsCount: 10,
  },
  {
    id: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 7
    ).getTime(),
    pomodorosCount: 10,
    pomodorosTime: 205 * 60,
    pausesTime: 70 * 60,
    stopsCount: 8,
  },
  {
    id: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 5
    ).getTime(),
    pomodorosCount: 9,
    pomodorosTime: 184 * 60,
    pausesTime: 51 * 60,
    stopsCount: 3,
  },
  {
    id: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 4
    ).getTime(),
    pomodorosCount: 2,
    pomodorosTime: 33 * 60,
    pausesTime: 8 * 60,
    stopsCount: 1,
  },
  {
    id: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 3
    ).getTime(),
    pomodorosCount: 0,
    pomodorosTime: 0,
    pausesTime: 0,
    stopsCount: 1,
  },
  {
    id: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 2
    ).getTime(),
    pomodorosCount: 7,
    pomodorosTime: 177 * 60,
    pausesTime: 15 * 60,
    stopsCount: 3,
  },
  {
    id: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 1
    ).getTime(),
    pomodorosCount: 10,
    pomodorosTime: 208 * 60,
    pausesTime: 15 * 60,
    stopsCount: 2,
  },
]
const demoIds = demoData.map((data) => data.id)

export default function useDemoData() {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('demo') !== 'load' && params.get('demo') !== 'clear') return

    let data = []

    const localStats = localStorage.getItem('pomodoro')
    if (localStats && localStats !== 'undefined') data = JSON.parse(localStats)

    localStorage.setItem(
      'pomodoro',
      JSON.stringify(
        params.get('demo') === 'load'
          ? [...data, ...demoData]
          : data.filter((entry) => !demoIds.includes(entry.id))
      )
    )

    dispatch(loadStats())
    router.push('/stats')
  }, [])
}
