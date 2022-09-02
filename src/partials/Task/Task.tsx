import React, { useState } from 'react'
import Icon, { EIcon } from '../../components/Icon/Icon'
import { TTask } from '../../context/TasksContext'
import Dropdown from '../Dropdown/Dropdown'
import * as S from './Task.styled'

type Props = {
  task: TTask
}

export default function Task({ task }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <S.Item>
      <S.Count>{task.count}</S.Count>
      <S.Text>{task.text}</S.Text>
      <S.Dropdown>
        <S.Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Icon type={EIcon.THREE_DOTS} />
        </S.Button>
        {isDropdownOpen && <Dropdown task={task} />}
      </S.Dropdown>
    </S.Item>
  )
}
