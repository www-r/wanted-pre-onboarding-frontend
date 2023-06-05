import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import SignButton from './Buttons/SignButton'
import { postSignIn, postSignUp } from '../functions/api'
import * as S from '../styles/Sign.styles'
export default function Sign({title, action}) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailState, setEmailState] = useState(false)
  const [passwordState, setPasswordState] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)
  let clickHandler
  try {
    if(action === 'signin'){
      clickHandler =() => {
        //signin API
        postSignIn(email, password)
        //navigate to todolists page
        navigate('/todos')
      }
     }
     else if (action === 'signup'){
      clickHandler = () => {
        //signup API
        postSignUp(email, password)
        //navigate to signin page
        navigate('/signin')
      }
     }
  } catch (error) {
    console.log(error)
  }

 const validateEmail = (e) => {
  setEmail(e.target.value)
  const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  if(pattern.test(e.target.value)){
    setEmailState(true)
  }
  else{ setEmailState(false)} 
  console.log(e.target.value)
}
const validatePassword = (e) => {
  setPassword(e.target.value)
  if(e.target.value.length > 7){
    setPasswordState(true)
  } else {
    setPasswordState(false)
  }
  console.log(e.target.value)
}
  return (
    <S.Background>
      <S.SignContainer>
        <h1>{title}</h1>
        <S.EmailContainer className='itemWrapper'>
          <label for='email-input'>email</label>
          <input type="text" onChange={validateEmail} data-testid="email-input" id='email-input'/>
        </S.EmailContainer>
        <S.PasswordContainer className='itemWrapper'>
          <label>password</label>
          <input type={passwordShown?"text":"password"} onChange={validatePassword} data-testid="password-input"/>
          <img className='passwordIcon' src="../assets/icons/visibilityIcon.png" alt="visibility icon" onClick={()=>{setPasswordShown(!passwordShown)}}/>
        </S.PasswordContainer>
        <div className='btnWrapper'>
          <SignButton text={title} onClick={clickHandler} emailState={emailState} passwordState={passwordState} 
          dataTestid={title === '로그인'? "signin-button" : "signup-button"}
          />
         { title === '로그인' && <button onClick={()=>{navigate('/signup')}}>회원가입</button>}
        </div >
      </S.SignContainer>
    </S.Background>
  )
}
