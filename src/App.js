import React , {useState, useEffect} from "react";
import { Reset } from "styled-reset";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { getTodos } from "./functions/api";


function App() {
  const [todolists, setTodolists] = useState([])
  const getTodolists = async() => {
    const todolists = await getTodos().data
    setTodolists(todolists)
  }
  useEffect(()=>{getTodolists()},[])
  return (
    <>
    <Reset/>
    <RouterProvider router={router} todolists={todolists}/>
      <div className="App">
   
      </div>
    </>
  );
}

export default App;
