import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDataContext } from '../Providers/LoginProvider';

const GoogleLoginButton = () => {
    const navigate = useNavigate()
    const [logindata, setLoginData] = useContext(LoginDataContext)

    const responseMessage = (response) => {
        const credentialResponse = jwtDecode(response.credential);
        console.log(credentialResponse, response.credential);
        // Send the credential to your backend for verification
        fetch('http://localhost:3001/api/auth/google', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: response.credential
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setLoginData({
                        user: {
                            ...data.user,
                            token: data.token
                        }
                    })
                    navigate('/')
                }
                else {
                    alert("Unsuccessful login!")
                }
            })
            .catch(err => {
                console.error('Login failed', err);
            });
    };

    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div>
            <GoogleLogin
                onSuccess={responseMessage}
                onError={errorMessage}
                useOneTap
            />
        </div>
    );
};

export default GoogleLoginButton;