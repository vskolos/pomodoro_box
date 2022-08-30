import React from 'react'
import Button, { ButtonStyle } from '../../components/Button/Button'
import { Icon } from '../../components/SVG/SVG'
import * as S from './Pomodoro.styled'

export default function Pomodoro() {
  return (
    <S.Pomodoro>
      <S.Header>
        <S.Name>Сверстать сайт</S.Name>
        <S.Count>Помидор 1</S.Count>
      </S.Header>
      <S.Timer>
        <S.Countdown>
          25:00
          <S.Button style={ButtonStyle.ICON} icon={Icon.PLUS} />
        </S.Countdown>
        <S.Task>
          <S.Number>Задача 1 - </S.Number>Сверстать сайт
        </S.Task>
        <S.Controls>
          <Button text="Старт" />
          <Button text="Стоп" style={ButtonStyle.SECONDARY} color="red" />
        </S.Controls>
      </S.Timer>
    </S.Pomodoro>
  )
}
