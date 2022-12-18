import React from 'react';
import {Link} from 'react-router-dom';
import auth from '../assets/authentication.svg';

const Registration = () => {
    return (
        <div className="hero">
            <div className="w-full lg:w-1/2 mx-auto hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <img src={auth} alt="..." />
                </div>
                <div className="w-full lg:w-1/2 card flex-shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className='text-center text-2xl font-bold mb-5'>Registration Now</h2>
                        <div className="form-control">
                            <input type="text" placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="New Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Register</button>
                            <small>Already have an account. Please <Link to={"/login"} className="hover:underline text-blue-600">Login</Link>.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;