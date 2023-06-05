import React from 'react'
import * as S from '../../styles/Button.styles'
 
export default function SignButton({text, emailState, passwordState, onClick, dataTestid}) {
  return (
    <S.SignButton disabled={emailState && passwordState ? false : true} onClick={onClick} data-testid={dataTestid}>{text}</S.SignButton>
  )
}
