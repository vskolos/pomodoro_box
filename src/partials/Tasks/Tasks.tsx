import React, { FormEvent, useContext, useMemo, useState } from 'react'
import Button, { ButtonStyle } from '../../components/Button/Button'
import { Icon } from '../../components/SVG/SVG'
import {
  ETaskAction,
  TasksContext,
  TasksDispatchContext,
} from '../../context/TasksContext'
import timeToText from '../../utils/timeToText'
import * as S from './Tasks.styled'

export default function Tasks() {
  const [inputValue, setInputValue] = useState('')

  const tasks = useContext(TasksContext)
  const dispatch = useContext(TasksDispatchContext)

  const totalTime = useMemo(() => {
    const count = tasks
      .map((task) => task.count)
      .reduce((prev, curr) => prev + curr, 0)
    return timeToText(count * 25)
  }, [tasks])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!inputValue) return

    dispatch({ type: ETaskAction.ADD, text: inputValue })
    setInputValue('')
  }

  return (
    <S.Tasks>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          placeholder="Название задачи"
          name="task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" text="Добавить" />
      </S.Form>
      <S.List>
        {tasks &&
          tasks.map((task) => (
            <S.Item key={task.id}>
              <S.Count>{task.count}</S.Count>
              <S.Text>{task.text}</S.Text>
              <Button
                style={ButtonStyle.ICON}
                icon={Icon.THREE_DOTS}
                onClick={() =>
                  dispatch({ type: ETaskAction.INCREASE, id: task.id })
                }
              />
            </S.Item>
          ))}
      </S.List>
      {tasks.length > 0 && <S.Time>{totalTime}</S.Time>}
    </S.Tasks>
  )
}
