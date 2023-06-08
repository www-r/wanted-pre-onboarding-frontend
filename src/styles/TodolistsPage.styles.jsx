import styled from "styled-components";

export const Header = styled.div`
  display: block;
  font-size: 20px;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 30px;
  }
  img {
    width: 30px;
    :hover{
      cursor: pointer;
    }
  }
`
export const Container = styled.div`
border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color:pink;
  padding: 10px;

`
export const InputContainer = styled.form`
  position: relative;
  padding: 0 0 20px ;
  input {
    outline: none;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    padding: 15px 30px;
    width: 100%;
    font-size: 30px;
  }
  .todolistsInputBtn {
    position: absolute;
    right: 15px;
    top: 10px;
    background-color: #A9FAC2;
  }

`
