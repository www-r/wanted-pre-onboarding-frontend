import React from 'react'
import * as S from '../../styles/Button.styles'
export default function Button({children, onClick,dataTestid, className, ...props}) {
  
  return (
  <S.Button onClick={onClick} className={className} data-testid={dataTestid} {...props}>{children}</S.Button>
  )
}
