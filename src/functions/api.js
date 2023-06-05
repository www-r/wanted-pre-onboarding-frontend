import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {"Content-Type": "application/json",}
});
const accessToken = localStorage.getItem('access_token')

export const postSignIn = async(email, password) => {
  const response = await instance.post('/auth/signin', {
      "email": email,
      "password": password
  })
  const accessToken = response.data.access_token;
  console.log(accessToken);
  localStorage.setItem("access_token",accessToken );
}

export const postSignUp = async(email, password) => {
  const response = await instance.post('auth/signup', {
      "email": email,
      "password": password
  })
  console.log(response)
}

//
export const createTodo = async(todo) => {
  instance.defaults.headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
  }
  const response = await instance.post('/todos', {
    "todo" : todo,
  })
console.log('create:',response)
}

export const getTodos = async() => {
  instance.defaults.headers = {
    "Authorization": `Bearer ${accessToken}`
  }
  const response = await instance.get('/todos')
  console.log('get:',response.data)
  return response.data
}

export const updateTodo = async (id, todo, isCompleted) => {
  instance.defaults.headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
  }
  const response = await instance.put(`/todos/${id}`, {
    "todo" : todo,
    "isCompleted": isCompleted,
  })
  console.log('update:',response)
  return response.data
}

export const deleteTodo = async(id) => {
  instance.defaults.headers = {
    "Authorization": `Bearer ${accessToken}`
  }
  const response = await instance.delete(`/todos/${id}`)
  console.log('delete:',response)
  return response
}