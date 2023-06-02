import React from 'react'
import Todolist from '../components/Todolist'
import * as S from '../styles/TodolistsPage.style'
export default function TodolistsPage(props) {
  const todolists = props.todolists
  return (
    <>
      <div>
         <ul>
        {
          todolists.map((todo)=> <Todolist todo={todo}/>)
        }
      </ul>
      </div>
    </>
  )
}
