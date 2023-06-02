import { useEffect } from "react"
import HomePage from "./pages/HomePage"

const testPost = async () => {
  const postBody = {
    email: 'jessicak0828@gmail.com',
    password: '1234@abcd'
  }

  const res = await fetch('https://www.pre-onboarding-selection-task.shop/auth/signin', {
    method: 'POST',
    body:JSON.stringify(postBody),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const result = await res.json()

  console.log({res,result})

  return result

}

function App() {
  // useEffect(() => {
  //   testPost()
  // }, [])
  
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
