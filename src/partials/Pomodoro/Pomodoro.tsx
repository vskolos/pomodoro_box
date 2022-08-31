import React from 'react'
import Button, { EButton } from '../../components/Button/Button'
import Icon, { EIcon } from '../../components/Icon/Icon'
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
          <S.Button>
            <Icon type={EIcon.TIMER_PLUS} />
          </S.Button>
        </S.Countdown>
        <S.Task>
          <S.Number>Задача 1 - </S.Number>Сверстать сайт
        </S.Task>
        <S.Controls>
          <Button style={EButton.PRIMARY} color="green">
            Старт
          </Button>
          <Button style={EButton.SECONDARY} color="red">
            Стоп
          </Button>
        </S.Controls>
      </S.Timer>
    </S.Pomodoro>
  )
}
