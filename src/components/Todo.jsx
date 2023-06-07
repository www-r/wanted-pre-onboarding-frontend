import React, {useState, useRef} from 'react'
import Button from './Buttons/Button'
import * as S from '../styles/Todo.styles'
import { updateTodo, deleteTodo } from '../functions/api'

export default function Todo({id,todo, isCompleted, userId, getTodolists}) {
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
const submitHandler = (e) => {
  if(e.key === 'Enter' || e.type === 'click'){
  console.log(todoInputRef.current.value)
  const updatedTodo = todoInputRef.current.value
  updateTodo(id, updatedTodo, checked)
  setEditable(!editable)}
}
const clickCancelButton = () => {
  setEditable(!editable)
}
const clickDeleteButton = () => {
  deleteTodo(id)
}

  return (
    <S.Todo>
      <label>
       <input type="checkbox" ref={checkboxRef} checked={checked?true:false} onChange={clickCheckbox}/>
       {
       editable?
        <>
          <input type='text' ref={todoInputRef} placeholder={todo} onKeyDown={submitHandler} dataTestid={"modify-input"} />
          <Button onClick={submitHandler} dataTestid={"submit-button"}>제출</Button>
          <Button onClick={clickCancelButton} dataTestid={"cancel-button"}>취소</Button>
        </>
       :
        <>
          <div>{todo}</div>
          <Button onClick={clickEditButton} dataTestid={"modify-button"}>수정</Button>
          <Button onClick={clickDeleteButton} dataTestid={"delete-button"}>삭제</Button>
        </>}
      </label>
    </S.Todo>
  )
}
