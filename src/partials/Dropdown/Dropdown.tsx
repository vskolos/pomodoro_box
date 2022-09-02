import React, { useContext } from 'react'
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
      <S.Button
        onClick={() => dispatch({ type: ETaskAction.INCREASE, id: task.id })}
      >
        <Icon type={EIcon.PLUS} />
        Увеличить
      </S.Button>
      <S.Button
        onClick={() =>
          task.count === 1
            ? dispatch({ type: ETaskAction.DELETE, id: task.id })
            : dispatch({ type: ETaskAction.DECREASE, id: task.id })
        }
      >
        <Icon type={EIcon.MINUS} />
        Уменьшить
      </S.Button>
      <S.Button onClick={() => console.log('edit')}>
        <Icon type={EIcon.PENCIL} />
        Редактировать
      </S.Button>
      <S.Button
        onClick={() => dispatch({ type: ETaskAction.DELETE, id: task.id })}
      >
        <Icon type={EIcon.TRASH} />
        Удалить
      </S.Button>
    </S.Dropdown>
  )
}
