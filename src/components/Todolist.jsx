import React from 'react'
import {SubmitButton} from '../components/Buttons'
export default function Todolist({todo}) {
  return (
    <li>
      <label>
       <input type="checkbox" />
       <p>{todo}</p>
      <SubmitButton/> 
      <SubmitButton/> 
      </label>
    </li>
  )
}
