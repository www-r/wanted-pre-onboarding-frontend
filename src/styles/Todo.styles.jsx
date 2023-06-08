import styled from "styled-components";

export const Todo = styled.li`
margin: 10px 0;
  label {
   display:flex;
    gap:10px;
    border-bottom: 2px solid #A9FAC2;
    padding: 0 0 10px 0;
    .todoWrapper {
      display: grid;
      grid-template-columns: 4fr 1fr 1fr;
      align-items: center;
      gap:10px;
      p {
        font-size:18px;
      }
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