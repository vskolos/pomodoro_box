import React, { useContext, useState } from 'react'
import Button, { EButton } from '../../components/Button/Button'
import Icon, { EIcon } from '../../components/Icon/Icon'
import Modal from '../../components/Modal/Modal'
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return (
    <>
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
              ? setIsDeleteModalOpen(true)
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
        <S.Button onClick={() => setIsDeleteModalOpen(true)}>
          <Icon type={EIcon.TRASH} />
          Удалить
        </S.Button>
      </S.Dropdown>
      {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(false)}>
          <S.ModalTitle>Удалить задачу?</S.ModalTitle>
          <Button
            style={EButton.PRIMARY}
            color="red"
            onClick={() => dispatch({ type: ETaskAction.DELETE, id: task.id })}
          >
            Удалить
          </Button>
          <S.CancelButton onClick={() => setIsDeleteModalOpen(false)}>
            Отмена
          </S.CancelButton>
        </Modal>
      )}
    </>
  )
}
