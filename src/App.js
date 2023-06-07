import React  from "react";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Reset } from "styled-reset";
import  GlobalStyle  from "./styles/GlobalStyle";

function App() {

  return (
      <div className="App">
        <Reset/>
        <GlobalStyle/>
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
