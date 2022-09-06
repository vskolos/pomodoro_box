import React from 'react'
import Icon, { EIcon } from '../../components/Icon/Icon'
import * as S from './PomodoroStats.styled'

type Props = {
  count: number
}

function pomodoroText(count: number): string {
  if (count % 10 === 1) return 'помидор'
  if (count % 10 >= 2 && count % 10 <= 4) return 'помидора'
  if ((count % 10 >= 5 && count % 10 <= 9) || count % 10 === 0)
    return 'помидоров'
}

export default function PomodoroStats({ count }: Props) {
  return (
    <S.Pomodoros>
      <S.Visual>
        {count > 0 ? (
          <>
            <S.Icon type={EIcon.TOMATO} />
            <S.Count>x {count}</S.Count>
          </>
        ) : (
          <Icon type={EIcon.TOMATO_FACE} />
        )}
      </S.Visual>
      {count > 0 && (
        <S.Text>
          {count} {pomodoroText(count)}
        </S.Text>
      )}
    </S.Pomodoros>
  )
}
