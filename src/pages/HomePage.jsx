import React from 'react'
import Background from '../components/Background'
import Container from '../components/Container'
import Button from '../components/Buttons/Button'
import { useNavigate} from 'react-router-dom'
import thumbnail from '../assets/thumbnail.gif'
 
export default function HomePage() {
  const navigate = useNavigate();
  const onClick = () => {
  navigate('/signin')
}
  return (
    <Background>
      <Container>
        <div className='image'><img src={thumbnail} alt="thumbnail" /></div>
        <Button className='homeButton' onClick={onClick}>시작하기</Button>
      </Container>
    </Background>
  )
}
