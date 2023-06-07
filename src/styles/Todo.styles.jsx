import styled from "styled-components";

export const Todo = styled.li`
margin: 10px 0;
  label {
    display: grid;
    grid-template-columns: 0.5fr 4fr 1fr 1fr;
    gap: 10px;
    align-items: center;
    border-bottom: 2px solid #A9FAC2;
    padding: 0 0 10px 0;
    .todoText {
      font-size: 18px;
    }
  [data-testid = "modify-input"] {
      outline:none;
      border: none;
      border-radius:5px;
      padding: 10px ;
      font-size: 17px;
  }
  [data-testid = "submit-button"]{
    background-color: #A9FAC2;
  }
  [data-testid = "delete-button"]{

  }
  }
 
`