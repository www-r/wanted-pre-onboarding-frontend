import React, {useState, useRef} from 'react'
import Button from './Buttons/Button'
import * as S from '../styles/Todo.styles'
import { updateTodo, deleteTodo } from '../functions/api'
import { getTodos } from '../functions/api'

export default function Todo({id,todo, isCompleted, todolists, setTodolists, getTodolists}) {
  const checkboxRef = useRef()
  const todoInputRef = useRef()
  const [checked, setChecked] = useState(isCompleted)
  const [editable, setEditable] = useState(false)
  const clickCheckbox = () => {
    setChecked(!checked)
    updateTodo(id, todo, !checked)
  }
const clickEditButton = () => {
  setEditable(!editable)
  
}
const submitHandler = async(e) => {
  e.preventDefault()
  const updatedTodo = todoInputRef.current.value
  if(updatedTodo){
    await updateTodo(id, updatedTodo, checked)
    const newTodolists = await getTodos()
    console.log({newTodolists})
    setTodolists(newTodolists)
    setEditable(!editable)
  } else {
    alert('내용을 입력해주세요.')
  }


}
const clickCancelButton = () => {
  setEditable(!editable)
}
const clickDeleteButton = () => {
  deleteTodo(id)
  const filteredTodos = todolists.filter(todo=> todo.id !== id)
  setTodolists(filteredTodos)
}

  return (
    <S.Todo>
      <label>
       <input type="checkbox" ref={checkboxRef} checked={checked?true:false} onChange={clickCheckbox}/>
       {
       editable
       ?
        <form onSubmit={submitHandler} className='todoWrapper'>
          <input type='text' ref={todoInputRef} placeholder={todo} data-testid={"modify-input"} />
          <Button type={'submit'} dataTestid={"submit-button"}>제출</Button>
          <Button onClick={clickCancelButton} dataTestid={"cancel-button"}>취소</Button>
        </form>
       :
        <div className='todoWrapper'>
          <p className='todoText'>{todo}</p>
          <Button onClick={clickEditButton} dataTestid={"modify-button"}>수정</Button>
          <Button onClick={clickDeleteButton} dataTestid={"delete-button"}>삭제</Button>
        </div>
        }
      </label>
    </S.Todo>
  )
}
