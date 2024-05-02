import { useContext, useState } from "react"
import axios from 'axios'
import LoginContext from "../contexts/LoginContext"

function LoginPage() {
    const loginContext = useContext(LoginContext)
    const handleLogin = (e) => {
        e.preventDefault()

        axios.post(
            // (url, json data)
            'https://university.demoapi.xyz' + '/api/auth/local', // 
            {
                /* JSON data
                  // {
                    //  identifier: <>,
                    // password: <>
                  //}
                // admin panel > settings > roles > 
                */
                'identifier': username,
                'password': password
            }
        ).then(response => {
            console.log(response)
            loginContext.setLoggedIn(true)
            loginContext.setToken(response.data.jwt)
            loginContext.setUserdata(response.data.user)
        }).catch(error => {
            console.log(error)
        })

        console.log(username)
        console.log(password)
    }
    // States
    const [username, setUsername] = useState('frontenduser')
    const [password, setPassword] = useState('KRMU@123')
    return (
        <>
            <h1>My Login page</h1>
            <form onSubmit={handleLogin}>
                <div className="form_field">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                </div>
                <div className="form_field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div className="form_field">
                    <button type="submit">Login</button>
                </div>
            </form>
            <div>{loginContext.loggedIn ? 'Logged in' : 'Not logged in'}</div>
            <div>{loginContext.token}</div>
        </>
    )
}

export default LoginPage