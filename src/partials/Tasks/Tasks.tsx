import React, { FormEvent, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button, { EButton } from '../../components/Button/Button'
import { addTask, selectAllTasks } from '../../redux/tasksSlice'
import timeToText from '../../utils/timeToText'
import Task from '../Task/Task'
import * as S from './Tasks.styled'

export default function Tasks() {
  const tasks = useSelector(selectAllTasks)
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')

  const totalTime = useMemo(() => {
    const count = tasks
      .map((task) => task.count)
      .reduce((prev, curr) => prev + curr, 0)
    return timeToText(count * 25)
  }, [tasks])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!inputValue) return

    dispatch(addTask({ id: Date.now(), text: inputValue, count: 1 }))
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
        <Button style={EButton.PRIMARY} color="green" type="submit">
          Добавить
        </Button>
      </S.Form>
      <S.List>
        {tasks && tasks.map((task) => <Task key={task.id} id={task.id} />)}
      </S.List>
      {tasks.length > 0 && <S.Time>{totalTime}</S.Time>}
    </S.Tasks>
  )
}
