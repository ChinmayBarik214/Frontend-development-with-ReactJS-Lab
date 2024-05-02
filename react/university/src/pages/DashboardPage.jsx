import { useContext } from "react"
import LoginContext from "../contexts/LoginContext"

function DashboardPage() {
    const loginContext = useContext(LoginContext)
    return (
        <>
            <h1>My Dashboard</h1>
        </>
    )
}

export default DashboardPage