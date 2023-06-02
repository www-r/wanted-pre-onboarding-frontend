import React from 'react'
import { Link } from 'react-router-dom'
import * as S from '../styles/Buttons.styles'

export function PageButton({text}) {
  return (
    <S.Button><Link to={'/signin'}>{text}</Link></S.Button>
  )
}
