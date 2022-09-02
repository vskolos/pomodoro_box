import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button, { EButton } from '../../components/Button/Button'
import Icon, { EIcon } from '../../components/Icon/Icon'
import Modal from '../../components/Modal/Modal'
import {
  decrementTask,
  incrementTask,
  removeTask,
  TTask,
} from '../../redux/tasksSlice'
import * as S from './Dropdown.styled'

type Props = {
  task: TTask
  onEdit: () => void
}

export default function Dropdown({ task, onEdit }: Props) {
  const dispatch = useDispatch()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return (
    <>
      <S.Dropdown>
        <S.Button
          onClick={() =>
            dispatch(incrementTask({ ...task, count: task.count + 1 }))
          }
        >
          <Icon type={EIcon.PLUS} />
          Увеличить
        </S.Button>
        <S.Button
          onClick={() =>
            task.count === 1
              ? setIsDeleteModalOpen(true)
              : dispatch(decrementTask({ ...task, count: task.count - 1 }))
          }
        >
          <Icon type={EIcon.MINUS} />
          Уменьшить
        </S.Button>
        <S.Button onClick={onEdit}>
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
            onClick={() => dispatch(removeTask(task.id))}
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
