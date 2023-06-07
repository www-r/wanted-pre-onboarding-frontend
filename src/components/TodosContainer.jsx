import React from 'react'
import Todo from './Todo'

export default function TodosContainer({todolists, setTodolists, getTodolists}) {
  // useEffect(()=>{getTodolists()},[todolists])
  return (
    <ul>
      { todolists.map((todo)=> <Todo key={todo.id} id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} userId={todo.userId} getTodolists={getTodolists}/>)}
    </ul>
  )
}
