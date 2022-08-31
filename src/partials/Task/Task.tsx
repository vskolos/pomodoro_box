import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Icon, { EIcon } from '../../components/Icon/Icon'
import { TTask } from '../../context/TasksContext'
import Dropdown from '../Dropdown/Dropdown'
import * as S from './Task.styled'

type Props = {
  task: TTask
}

export default function Task({ task }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true)

  return (
    <S.Item>
      <S.Count>{task.count}</S.Count>
      <S.Text>{task.text}</S.Text>
      <S.Dropdown>
        <Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Icon type={EIcon.THREE_DOTS} />
        </Button>
        {isDropdownOpen && <Dropdown task={task} />}
      </S.Dropdown>
    </S.Item>
  )
}
