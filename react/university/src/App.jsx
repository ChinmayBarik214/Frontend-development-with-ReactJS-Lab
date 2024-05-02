import { useState } from 'react'
import './App.css'
import LoginContext from './contexts/LoginContext'

// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'


function App() {
  // context states
  const [loggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const [userdata, setUserdata] = useState(null)
  // Context API
  // Routing
  // localStorage
  return (
    <>
      <LoginContext.Provider value={{loggedIn, setLoggedIn, token, setToken, userdata, setUserdata}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DashboardPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  )
}

export default App
