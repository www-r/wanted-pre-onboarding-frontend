import React from 'react'
import * as S from '../../styles/Button.styles'
 
export default function SignButton({className, text, emailState, passwordState, onClick, dataTestid}) {
  return (
    <S.Button className={className} disabled={emailState && passwordState ? false : true} onClick={onClick} data-testid={dataTestid}>{text}</S.Button>
  )
}
