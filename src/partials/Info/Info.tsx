import React from 'react'
import * as S from './Info.styled'

export default function Info() {
  return (
    <S.Info>
      <S.Title>Ура! Теперь можно начать работать:</S.Title>
      <S.List>
        <S.Item>Выберите категорию и напишите название текущей задачи</S.Item>
        <S.Item>Запустите таймер («помидор»)</S.Item>
        <S.Item>Работайте пока «помидор» не прозвонит</S.Item>
        <S.Item>Сделайте короткий перерыв (3-5 минут)</S.Item>
        <S.Item>
          Продолжайте работать «помидор» за «помидором», пока задача не будут
          выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут)
        </S.Item>
      </S.List>
    </S.Info>
  )
}
