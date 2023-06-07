import React from 'react'
// import * as S from '../../styles/Button.styles'
export default function Button({children, onClick,dataTestid}) {
  
  return (
  <button onClick={onClick} data-testid={dataTestid} >{children}</button>
  )
}
