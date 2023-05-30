import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa"
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)

    const location = useLocation()

    const navigate = useNavigate()
    let from = location?.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {

                const loggedUser = result.user
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true })

                    })

            })
    }


    return (
        <div>
            <div className='divider'>

            </div>
            <div className='text-center'>
                <button onClick={handleGoogleLogin} className='btn btn-circle'>

                    <FaGoogle></FaGoogle>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;