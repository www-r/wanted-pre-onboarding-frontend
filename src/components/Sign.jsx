import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import SignButton from './Buttons/SignButton'
import Button from './Buttons/Button'
import { postSignIn, postSignUp } from '../functions/api'
import * as S from '../styles/Sign.styles'
import visibilityIcon from '../assets/icons/visibilityIcon.png'
import invisibilityIcon from '../assets/icons/invisibilityIcon.png'

export default function Sign({title, action}) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailState, setEmailState] = useState(false)
  const [passwordState, setPasswordState] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)

  const clickHandler = async() => {
      if(action === 'signin'){
        try {
          console.log('email:', email, 'password:', password)
          await postSignIn(email, password)
          navigate('/todo')  
        } catch (error) {
          alert(error.data.message)
        }
    } 
      else if (action === 'signup'){
        try {
          console.log('email:', email, 'password:', password)
          await postSignUp(email, password) 
          // const res = postSignIn(email, password)
          navigate('/signin') 
        } catch (error) {
          alert(error.data.message)
        }
    }
      }
  const validateEmail = (e) => {
  setEmail(e.target.value)
  // const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  const pattern = /@/
  if(pattern.test(e.target.value)){
    setEmailState(true)
  }
  else{ setEmailState(false)} 
  // console.log(e.target.value)
}
const validatePassword = (e) => {
  setPassword(e.target.value)
  if(e.target.value.length > 7){
    setPasswordState(true)
  } else {
    setPasswordState(false)
  }
  // console.log(e.target.value)
}
  return (
  
      <S.SignContainer>
        <h1>{title}</h1>
        <S.EmailContainer className='itemWrapper'>
          <S.Label for='email-input'>email</S.Label>
          <input type="text" onChange={validateEmail} data-testid="email-input" id='email-input'/>
          <S.Message>{!emailState?'@를 포함해주세요':''}</S.Message>
        </S.EmailContainer>
        <S.PasswordContainer className='itemWrapper'>
          <S.Label>password</S.Label>
          <input type={passwordShown?"text":"password"} onChange={validatePassword} onKeyDown={(e)=>e.code==='Enter' && clickHandler()} data-testid="password-input"/>
          <S.Message>{!passwordState?'8자리 이상으로 정해주세요':''}</S.Message>
          <img className='passwordIcon' src={passwordShown?visibilityIcon:invisibilityIcon} alt="visibility icon" onClick={()=>{setPasswordShown(!passwordShown)}}/>
        </S.PasswordContainer>
        <S.ButtonContainer>
          <SignButton className={'signButton'} text={title} onClick={clickHandler} emailState={emailState} passwordState={passwordState} 
          dataTestid={title === '로그인'? "signin-button" : "signup-button"}
          />
         { title === '로그인' ? <Button onClick={()=>{navigate('/signup')}}>회원가입하러 가기</Button> : <Button onClick={()=>{navigate('/signin')}}>로그인하러 가기</Button> }
        </S.ButtonContainer>
      </S.SignContainer>
  
  )
}


