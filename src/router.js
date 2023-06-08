import { createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TodolistsPage from "./pages/TodolistsPage";
import NotFoundPage from "./pages/NotFoundPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    
  },
  {
    path: "/signin",
    element: <SignInPage/>,
  
   

  },
  {
    path: "/signup",
    element: <SignUpPage/>,
   

  },
  {
    path: "/todo",
    element: <TodolistsPage/>,
   
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);