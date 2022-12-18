import React from 'react';
import {Link} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs';
import auth from '../assets/authentication.svg';

const Login = () => {
    return (
        <div className="hero">
            <div className="w-full lg:w-1/2 mx-auto hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <img src={auth} alt="..." />
                </div>
                <div className="w-full lg:w-1/2 card flex-shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className='text-center text-2xl font-bold'>Login Now</h2>
                        <div className="form-control">
                            <input type="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" className="input input-bordered" />
                            <Link to={"/"} className="hover:underline text-blue-600">
                                <small>Forgot password</small>
                            </Link>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                            <small>Don't have an account. Please <Link to={"/registration"} className="hover:underline text-blue-600">Register</Link>.</small>
                        </div>
                        <div className="divider">OR</div>
                        <div className='flex items-center justify-center gap-x-3'>
                            <Link to={"/"}>
                                <FcGoogle className='text-[1.5rem]'></FcGoogle>
                            </Link>
                            <Link to={"/"}>
                                <BsFacebook className='text-[1.4rem] text-blue-700'></BsFacebook>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;