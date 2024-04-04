import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginData, setLoginData] = useState(null)

  async function loginUser() {
    try {
      const response = await axios.post(
        'http://172.16.94.178:1337/api/auth/local',
        {
          identifier: username,
          password: password
        }
      )
      console.log(response.data)

      setLoginData(response.data)
      localStorage.setItem('loginData', loginData)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {
        loginData
          ? (
            <>
              <h1>Logged in as "{loginData.user.username}"</h1>
              <button onClick={() => { setLoginData(null) }}>Log Out</button>
            </>
          )
          : (
            <>
              <h1>Logged Out</h1>
              <form>
                <input onChange={(e) => {
                  setUsername(e.target.value)
                }} />
                <input onChange={(e) => {
                  setPassword(e.target.value)
                }} />
                <button type='button' onClick={loginUser}>Sign in</button>
              </form>
            </>
          )
      }
    </>
  )
}

export default App
