import React from 'react'
import Icon, { EIcon } from '../../components/Icon/Icon'
import * as S from './PomodoroStats.styled'

type Props = {
  count: number
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
      {count > 0 && <S.Text>{count} помидора</S.Text>}
    </S.Pomodoros>
  )
}
