import { useState } from "react"

function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <h1>My Login page</h1>
            <form>
                <div className="form_field">
                    <label for="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={() => {}}
                    />
                </div>
                <div className="form_field">
                    <label for="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                    />
                </div>
                <div className="form_field">
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}

export default LoginPage