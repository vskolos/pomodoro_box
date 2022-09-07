import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon, { EIcon } from '../../components/Icon/Icon'
import { RootState } from '../../redux/store'
import { editTask, selectTaskById } from '../../redux/tasksSlice'
import Dropdown from '../Dropdown/Dropdown'
import * as S from './Task.styled'

type Props = {
  id: number
}

export default function Task({ id }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const task = useSelector((state: RootState) => selectTaskById(state, id))
  const dispatch = useDispatch()

  const inputRef = useCallback(
    (input: HTMLInputElement) => {
      if (!input) return
      input.value = task.text
      input.setSelectionRange(input.value.length, input.value.length)
      input.focus()
    },
    [task.text]
  )

  return (
    <S.Item>
      <S.Count>{task.count === 0 ? '✓' : task.count}</S.Count>
      {isEditing ? (
        <S.Input
          ref={inputRef}
          onBlur={(e) => {
            if (e.target.value)
              dispatch(editTask({ ...task, text: e.target.value }))
            setIsEditing(false)
          }}
          placeholder="Название задачи"
        />
      ) : (
        <S.Text>{task.text}</S.Text>
      )}
      <S.Dropdown>
        <S.Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Icon type={EIcon.THREE_DOTS} />
        </S.Button>
        {isDropdownOpen && (
          <Dropdown
            task={task}
            onEdit={() => {
              setIsEditing(true)
              setIsDropdownOpen(false)
            }}
          />
        )}
      </S.Dropdown>
    </S.Item>
  )
}
