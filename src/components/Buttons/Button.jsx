import React from 'react'
import * as S from '../../styles/Button.styles'
export default function Button({children, onClick,dataTestid, className}) {
  
  return (
  <S.Button onClick={onClick} className={className} data-testid={dataTestid} >{children}</S.Button>
  )
}
