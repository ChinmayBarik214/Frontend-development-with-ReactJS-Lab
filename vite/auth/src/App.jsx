import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios'

function App() {
  
  const [loginData, setLoginData] = useState(null)

  async function autoLogin() {
    try {
      const response = await axios.post(
        'http://172.16.94.178:1337/api/auth/local',
        {
          identifier: 'testing',
          password: 'Testing@123'
        }
      )
      console.log(response.data)
      
      setLoginData(response.data)
      localStorage.setItem('loginData',loginData)

    } catch(error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    autoLogin()
    return ()=>{}
  },[]);

  return (
    <>
      {
        loginData
        ? (
          <>
            <h1>Logged in as "{loginData.user.username}"</h1>
            <button onClick={()=>{setLoginData(null)}}>Log Out</button>
          </>
        )
        : (
          <>
            <h1>Logged Out</h1>
            <form>
              <input />
            </form>
          </>
        )
      }
    </>
  )
}

export default App
