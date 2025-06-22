import { useContext, useEffect, useState } from "react";
import GoogleLoginButton from "./GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LoginDataContext } from "../Providers/LoginProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const clientId = '775913148097-pgltoejktkei9842ho84ugmthjrptice.apps.googleusercontent.com';
    const [isLogin, setIsLogin] = useState(true)
    const [data, setdata] = useState({
        email: "",
        password: ""
    })
    const [registerData, setRegisterData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
    })
    const navigate = useNavigate()
    const [, setLoginData] = useContext(LoginDataContext)

    useEffect(() => {
        setdata({
            email: "",
            password: ""
        })
        setRegisterData({
            email: "",
            password: "",
            confirmPassword: "",
            name: ""
        })
    }, [isLogin])

    function signin() {
        if (data.email && data.password) {
            fetch('http://91.108.104.49:448/api/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data)
            })
                .then((res) => res.json())
                .then((resData) => {
                    if (resData.message === 'Login successful') {
                        setLoginData({
                            user: {
                                ...data.user,
                                token: data.token
                            }
                        })
                        navigate('/')
                    }
                    else {
                        alert("Login Unsuccessful")
                    }
                }).catch((er) => {
                    console.error(er)
                })
        }
        else {
            if (!data.email) {
                alert("email is required")
            }
            else if (!data.password) {
                alert("email is required")
            }
        }
    }

    function signup() {
        if (!registerData.email || !registerData.password || !registerData.confirmPassword || !registerData.name) {
            if (!registerData.name) {
                alert("name is required")
            }
            else if (!registerData.email) {
                alert("email is required")
            }
            else if (!registerData.password) {
                alert("email is required")
            }
            else if (!registerData.confirmPassword) {
                alert("confirm password is required")
            }
        }
        else if (registerData.password !== registerData.confirmPassword) {
            alert("confirm password should match with password")
        }
        else {
            fetch('http://91.108.104.49:448/api/users/signup', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(registerData)
            }).then((res) => res.json())
                .then((resData) => {
                    if (resData.message === 'User registered') {
                        setIsLogin(true)
                    }
                    else {
                        alert("Signup Unsuccessful")
                    }
                }).catch((er) => {
                    console.error(er)
                })

        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            padding: '20px'
        }}>
            {
                isLogin ?
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px',
                        textAlign: 'center'
                    }}>
                        <h1 style={{
                            marginBottom: '1.5rem',
                            color: '#333',
                            fontSize: '1.8rem'
                        }}>
                            Login
                        </h1>
                        <div>
                            <input
                                style={{ width: "90%", height: '30px', borderRadius: '10px' }}
                                placeholder="Enter email"
                                value={data.email}
                                onChange={(e) => {
                                    setdata({
                                        ...data,
                                        "email": e.target.value
                                    })
                                }}
                            />
                            <input
                                type="password"
                                style={{ width: "90%", height: '30px', marginTop: '20px', borderRadius: '10px' }}
                                placeholder="Enter password"
                                value={data.password}
                                onChange={(e) => {
                                    setdata({
                                        ...data,
                                        "password": e.target.value
                                    })
                                }}
                            />

                            <button onClick={() => { signin() }} style={{ color: "white", background: "blue", width: "90%", height: "30px", marginTop: "20px", borderRadius: "20px" }}>
                                Sign in
                            </button>
                            <button
                                onClick={() => {
                                    setdata({
                                        email: "",
                                        password: "",
                                    })
                                }} style={{ width: "90%", height: "30px", marginTop: "20px", borderRadius: "20px" }}>
                                Reset
                            </button>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: "10px",
                            marginBottom: '1rem'
                        }}>
                            <GoogleOAuthProvider clientId={clientId}>
                                <GoogleLoginButton />
                            </GoogleOAuthProvider>
                        </div>

                        <div style={{
                            marginTop: '1.5rem', color: '#666',
                            fontSize: '0.9rem'
                        }}>
                            No Account! Please <div
                                style={{ display: 'inline', textDecoration: 'underline', color: 'blue' }}
                                onClick={() => {
                                    setIsLogin(false)
                                }}
                            >
                                sign up
                            </div> here
                        </div>
                    </div>
                    :
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px',
                        textAlign: 'center'
                    }}>
                        <h1 style={{
                            marginBottom: '1.5rem',
                            color: '#333',
                            fontSize: '1.8rem'
                        }}>
                            Sign up
                        </h1>
                        <div>
                            <input
                                style={{ width: "90%", height: '30px', borderRadius: '10px' }}
                                placeholder="Enter name"
                                value={registerData.name}
                                onChange={(e) => {
                                    setRegisterData({
                                        ...registerData,
                                        "name": e.target.value
                                    })
                                }}
                            />
                            <input
                                style={{ width: "90%", height: '30px', borderRadius: '10px', marginTop: "20px" }}
                                placeholder="Enter email"
                                value={registerData.email}
                                onChange={(e) => {
                                    setRegisterData({
                                        ...registerData,
                                        "email": e.target.value
                                    })
                                }}
                            />
                            <input
                                type="password"
                                style={{ width: "90%", height: '30px', marginTop: '20px', borderRadius: '10px' }}
                                placeholder="Enter password"
                                value={registerData.password}
                                onChange={(e) => {
                                    setRegisterData({
                                        ...registerData,
                                        "password": e.target.value
                                    })
                                }}
                            />
                            <input
                                type="password"
                                style={{ width: "90%", height: '30px', marginTop: '20px', borderRadius: '10px' }}
                                placeholder="Enter confirm password"
                                value={registerData.confirmPassword}
                                onChange={(e) => {
                                    setRegisterData({
                                        ...registerData,
                                        "confirmPassword": e.target.value
                                    })
                                }}
                            />
                            <button onClick={() => { signup() }} style={{ color: "white", background: "blue", width: "90%", height: "30px", marginTop: "20px", borderRadius: "20px" }}>
                                Sign up
                            </button>
                            <button onClick={() => {
                                setRegisterData({
                                    name: "",
                                    email: "",
                                    password: "",
                                    confirmPassword: ""
                                })
                            }} style={{ width: "90%", height: "30px", marginTop: "20px", borderRadius: "20px" }}>
                                Reset
                            </button>
                        </div>
                        <div style={{
                            marginTop: '1.5rem', color: '#666',
                            fontSize: '0.9rem'
                        }}>
                            Already have an Account! Please <div
                                style={{ display: 'inline', textDecoration: 'underline', color: 'blue' }}
                                onClick={() => {
                                    setIsLogin(true)
                                }}
                            >
                                sign in
                            </div> here
                        </div>
                    </div>
            }
        </div>
    );
}