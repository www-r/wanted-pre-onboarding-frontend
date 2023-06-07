import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '../components/Background'
import Container from '../components/Container'
import Sign from '../components/Sign'

export default function SignInPage() {
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.getItem('access_token') && navigate('/todo')
  })

  return (
    <Background>
      <Container>
        <Sign title={'로그인'} action={'signin'}/>
      </Container>
    </Background>
  )
}
