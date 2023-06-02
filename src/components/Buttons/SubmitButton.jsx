import React from 'react'

export default function SubmitButton({text, email, password}) {
  return (
    <button disabled={email && password ? false : true}>{text}</button>
  )
}
