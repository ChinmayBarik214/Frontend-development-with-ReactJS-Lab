import './App.css'
import { Routes, Route, Link, Router, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <main style={{
        marginTop: 50,
      }}>
        <Outlet />
      </main>
    </>
  )
}

function Header() {
  return (
    <>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

function Home() {
  return (
    <>
      <h2>This is the Home page.</h2>
    </>
  )
}

function About() {
  return (
    <h2>This is the About page.</h2>
  )
}

export default App
