import React from 'react'
import Todo from './Todo'
import * as S from '../styles/TodosContainer.style'

export default function TodosContainer({todolists, setTodolists, getTodolists}) {
  return (
    <S.TodosContainer>
      { todolists?.map((todo)=> <Todo key={todo.id} id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} todolists={todolists} setTodolists={setTodolists} getTodolists={getTodolists}/>)}
    </S.TodosContainer>
  )
}
