import { useState } from 'react'
import './App.css'

// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'


function App() {
  const [count, setCount] = useState(0)
  // Context API
  // Routing
  // localStorage
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
