import { createContext } from "react";

let LoginContext = createContext(
    {
        loginIn: false,
        setLoggedIn: () => {}
    }
)

export default LoginContext