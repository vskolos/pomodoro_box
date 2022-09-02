import React, { useCallback, useContext, useState } from 'react'
import Icon, { EIcon } from '../../components/Icon/Icon'
import {
  ETaskAction,
  TasksDispatchContext,
  TTask,
} from '../../context/TasksContext'
import Dropdown from '../Dropdown/Dropdown'
import * as S from './Task.styled'

type Props = {
  task: TTask
}

export default function Task({ task }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const dispatch = useContext(TasksDispatchContext)

  const inputRef = useCallback((input: HTMLInputElement) => {
    if (!input) return
    input.setSelectionRange(input.value.length, input.value.length)
    input.focus()

    input.addEventListener('blur', () => setIsEditing(false))
  }, [])

  return (
    <S.Item>
      <S.Count>{task.count}</S.Count>
      {isEditing ? (
        <S.Input
          ref={inputRef}
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: ETaskAction.EDIT,
              id: task.id,
              text: e.target.value,
            })
          }
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
