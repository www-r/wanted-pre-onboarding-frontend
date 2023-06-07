import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {"Content-Type": "application/json",}
});


export const postSignIn = async(email, password) => {
  try {
    const response = await instance.post('/auth/signin', {
      "email": email,
      "password": password
  })
  console.log('access_token:',  response.data.access_token);
  localStorage.setItem("access_token", response.data.access_token );
  console.log('signin:', response)
  return response
  } catch (error) {
    console.error(error)
  }
  
}

export const postSignUp = async(email, password) => {
  try {
    const response = await instance.post('/auth/signup', {
      "email": email,
      "password": password
  })
  console.log('signup:',response)
  return response
  } catch (error) {
    console.error(error)
  }
 
}

//
export const createTodo = async(todo) => {
  instance.defaults.headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
  }
 try {
  const response = await instance.post('/todos', {
    "todo" : todo,
  })
console.log('create:',response.data)
return response.data
 } catch (error) {
  console.log(error)
 }
}

export const getTodos = async() => {
  instance.defaults.headers = {
    "Authorization": `Bearer ${localStorage.getItem('access_token')}`
  }
try {
  const response = await instance.get('/todos')
  console.log('get:',response.data)
  return response.data
} catch (error) {
  console.log(error)
}
}

export const updateTodo = async (id, todo, isCompleted) => {
  instance.defaults.headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('access_token')}`
  }
try {
  const response = await instance.put(`/todos/${id}`, {
    "todo" : todo,
    "isCompleted": isCompleted,
  })
  console.log('update:',response.data)
  return response.data
} catch (error) {
  console.log(error)
}
}

export const deleteTodo = async(id) => {
  instance.defaults.headers = {
    "Authorization": `Bearer ${localStorage.getItem('access_token')}`
  }
try {
  const response = await instance.delete(`/todos/${id}`)
  console.log('delete:',response.data)
  return response.data
} catch (error) {
  console.log(error)
}
}