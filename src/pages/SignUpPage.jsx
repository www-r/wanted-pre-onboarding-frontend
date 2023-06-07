import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '../components/Background'
import Container from '../components/Container'
import Sign from '../components/Sign'

export default function SignUpPage() {
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('access_token')){
      navigate('/todo')
    }
  },[])

  return (
    <Background>
      <Container>
        <Sign title={'회원가입'} action={'signup'}/>
      </Container>
    </Background>
   
  )
}
