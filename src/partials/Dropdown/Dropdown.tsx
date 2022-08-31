import React, { useContext } from 'react'
import Button from '../../components/Button/Button'
import Icon, { EIcon } from '../../components/Icon/Icon'
import {
  ETaskAction,
  TasksDispatchContext,
  TTask,
} from '../../context/TasksContext'
import * as S from './Dropdown.styled'

type Props = {
  task: TTask
}

export default function Dropdown({ task }: Props) {
  const dispatch = useContext(TasksDispatchContext)

  return (
    <S.Dropdown>
      <Button
        onClick={() => dispatch({ type: ETaskAction.INCREASE, id: task.id })}
      >
        <Icon type={EIcon.PLUS} />
        Увеличить
      </Button>
      <Button
        onClick={() => dispatch({ type: ETaskAction.DECREASE, id: task.id })}
      >
        <Icon type={EIcon.MINUS} />
        Уменьшить
      </Button>
    </S.Dropdown>
  )
}
