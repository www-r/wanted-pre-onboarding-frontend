import styled from "styled-components";

export const SignContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  margin:auto;
  padding: 20px 20px 10px 20px;
  background-color: #FECBDD;
  width:480px;
  height: 480px;
  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 30px;
    padding: 30px 0 50px;
  }
  .itemWrapper {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    input {
      outline: none;
      border: none;
      border-radius:5px;
      padding: 15px 70px 15px 25px;
      font-size: 20px;
    }
  }
`
export const EmailContainer = styled.div``

export const PasswordContainer = styled.div`
  position: relative;
  .passwordIcon {
    position: absolute;
    right: 10px;
    top: 39.5px;
    &:hover {
      cursor: pointer;
    }
  }
`
export const ButtonContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 15px;
`
export const Label = styled.label`
  padding-bottom: 5px;
  font-weight: 500;
  font-size:20px;
  
`
export const Message = styled.p`
  padding: 10px 0 0;
  height: 17px;
  color: red;
`