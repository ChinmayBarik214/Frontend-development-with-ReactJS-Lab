import './App.css'
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

function Home() {
  return (
    <>
    <h1>This is the Home page.</h1>
    </>
  )
}

function About() {
  return (
    <h1>This is the About page.</h1>
  )
}

export default App
