import React , {useState,useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '../components/Background'
import TodosContainer from '../components/TodosContainer'
import Button from '../components/Buttons/Button'
import logoutIcon from '../assets/icons/logout.png'
import * as S from '../styles/TodolistsPage.styles'
import { getTodos, createTodo } from '../functions/api'


export default function TodolistsPage() {
  const [todolists, setTodolists] = useState([])
  const newTodoInputRef = useRef()
  const navigate = useNavigate()

  const getTodolists = async() => {
    const todolists = await getTodos()

    setTodolists(todolists)
  }

  const addTodoHandler = async(e) => {
      e.preventDefault()
      if (newTodoInputRef.current.value) {
        const response = await createTodo(newTodoInputRef.current.value)
        setTodolists([...todolists,response])
      } else {
        alert('내용을 입력해주세요')
      }
    }
  

  const logoutHandler = () => {
    alert('로그아웃하시나요?')
    localStorage.removeItem('access_token')
    window.location.reload()
  }

  useEffect(()=>{
  localStorage.getItem('access_token')? getTodolists() : navigate('/signin');
}, []) /* eslint-disable-line */

  return (
    <Background>
      <S.Container>
      <S.Header>
      <h1>투두리스트</h1>
        <img src={logoutIcon} alt="logout icon"  onClick={logoutHandler}/>
      </S.Header>
        <S.InputContainer onSubmit={addTodoHandler}>
          <input type="text" className='todoInput' ref={newTodoInputRef} data-testid="new-todo-input"/>
          <Button type={'submit'} className='todolistsInputBtn' dataTestid="new-todo-add-button" >추가</Button>
        </S.InputContainer>
        <>{todolists?.length !== 0 && <TodosContainer todolists={todolists} setTodolists={setTodolists} getTodolists={getTodolists} />}</>
      </S.Container>
    </Background>
  )
}
