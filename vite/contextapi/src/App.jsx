import './App.css'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <main style={{
        marginTop: 50,
      }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function Header() {
  return (
    <>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/auth">Auth</Link>
        <p>Logged in</p>
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
          <Route path='/auth' element={<Auth />} />
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

function Auth() {
  return (
    <h2>This is the Auth page.</h2>
  )
}

function Footer() {
  return (
    <footer className='footer'>
      © Copyright 
    </footer>
  )
}

export default App
