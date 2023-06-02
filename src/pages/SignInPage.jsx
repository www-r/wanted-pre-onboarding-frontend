import React, {useState,useEffect} from 'react'
import SubmitButton from '../components/Buttons/SubmitButton'
export default function SignInPage() {
  const [passwordShown, setPasswordShown] = useState(false)
  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)
  const validateEmail = (e) => {
    const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if(pattern.test(e.target.value)){
      setEmail(true)
    }
    else{ setEmail(false)} 
    console.log(e.target.value)
    console.log(email)
  }
  const validatePassword = (e) => {
    if(e.target.value.length > 7){
      setPassword(true)
    } else {
      setPassword(false)
    }
  }
  const clickPasswordIcon = () => {
    setPasswordShown(!passwordShown)
  }
  const clickLoginButton = () => {

  }
  useEffect(()=>{
    setEmail(false)
    setPassword(false)
    return ()=>{setEmail(false)
    setPassword(false)}
  },[])
  return (
    <div> 
      <span>Login</span> 
      <div className='emailContainer'>
        <label>email</label>
        <input type="text" onChange={validateEmail}/>
      </div>
      <div className='passwordContainer'>
        <label>password</label>
        <input type={passwordShown?"text":"password"} onChange={validatePassword} />
        <img className='passwordIcon' src="../assets/icons/visibilityIcon.png" alt="visibility icon" onClick={clickPasswordIcon}/>  
      </div>
      <SubmitButton text={"로그인하기"} email={email} password={password} onClick={clickLoginButton}/>
    </div>
  )
}
