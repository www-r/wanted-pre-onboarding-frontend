import { createBrowserRouter, redirect} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TodolistsPage from "./pages/TodolistsPage";
import NotFoundPage from "./pages/NotFoundPage";

const loader = (path) => {
  console.log(localStorage.getItem('access_token'));
  localStorage.getItem("access_token") ? redirect('/todo') : redirect(path)
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    
  },
  {
    path: "/signin",
    element: <SignInPage/>,
    loader: loader('/signin')
   

  },
  {
    path: "/signup",
    element: <SignUpPage/>,
   loader: loader('/signup')

  },
  {
    path: "/todo",
    element: <TodolistsPage/>,
    loader : loader('/signin')
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);