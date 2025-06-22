import { useContext } from "react"
import { LoginDataContext } from "../Providers/LoginProvider"
import { Link } from "react-router-dom"

export default function Profile() {
    const [loginData] = useContext(LoginDataContext)

    return <>
        {
            !loginData?.user ? <>
                You are not yet logged in
                Please login using the link provided <Link to={"/login"}>Login</Link>
            </>
                : <>
                    <div>
                        <h2>Profile Information</h2>
                        <div style={{ marginTop: '20px' }}>
                            <img
                                src={loginData.user?.picture}
                                alt="Profile"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    marginBottom: '15px'
                                }}
                            />
                            <p><strong>Name:</strong> {loginData.user?.name}</p>
                            <p><strong>Email:</strong> {loginData.user?.email}</p>
                            {/* Add more profile data as needed */}
                        </div>
                    </div>
                </>
        }
    </>
}