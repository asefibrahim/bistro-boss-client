import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import SocialLogin from '../../../components/SocialLogin';

const Login = () => {
    const location = useLocation()

    const navigate = useNavigate()
    let from = location?.state?.from?.pathname || '/'
    const { login } = useContext(AuthContext)
    const capthaRef = useRef(null)
    const [disable, setDisable] = useState(true)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                console.log(result.user);


                navigate(from, { replace: true })
                alert('Login successfully')
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])



    const handlevalidate = () => {
        const value = capthaRef.current.value
        console.log(value);

        if (validateCaptcha(value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={capthaRef} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                                <button onClick={handlevalidate} className='btn btm-nav-sm'>velidate</button>

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>

                        <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;