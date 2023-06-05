import React , {useState,useEffect, useRef} from 'react'
//import * as S from '../styles/TodolistsPage.styles'
import { getTodos, createTodo } from '../functions/api'
import TodosContainer from '../components/TodosContainer'

export default function TodolistsPage() {
  const [todolists, setTodolists] = useState([])
  
  const getTodolists = async() => {
    const todolists = await getTodos()
    setTodolists(todolists)
  }
  //create Todo
    const newTodoInputRef = useRef()
    const keydownHandler = (e) => {
      if(e.key === 'Enter'){
        console.log(newTodoInputRef.current.value)
       createTodo(newTodoInputRef.current.value)
      } 
    }
    
  //   const todolist = [ {
  //     "id": 1,
  //     "todo": "todo2",
  //     "isCompleted": false,
  //     "userId": 1
  //   },
  //   {
  //     "id": 2,
  //     "todo": "todo3",
  //     "isCompleted": true,
  //     "userId": 1
  //   }
  // ]
useEffect(()=>{
  getTodolists()
},[todolists])
  return (
    <>
      <div>
        <div>
          <input type="text" className='todoInput' ref={newTodoInputRef} onKeyDown={keydownHandler} data-testid="new-todo-input"/>
          <button data-testid="new-todo-add-button">추가</button>
        </div>
        {todolists.length !== 0 && <TodosContainer todolists={todolists} setTodolists={setTodolists} getTodolists={getTodolists}/>}
      </div>
    </>
  )
}
