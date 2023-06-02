import React, {useState} from 'react'

export default function SignInPage() {
  const [passwordShown, setPasswordShown] = useState(false)
  return (
    <div>  
      <label htmlFor=""></label>
      <input type="text" />
    <input type={passwordShown?"text":"password"} />
    </div>
  )
}
