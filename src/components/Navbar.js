import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import interview from '../assets/interview.svg';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-1'>
                <img src={interview} alt="..." className='w-10 h-10' />
                <h2 className='text-2xl font-bold'>VIVA</h2>
            </div>
            <div className='flex gap-5'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/"}>About</NavLink>
                <NavLink to={"/"}>Contact</NavLink>
                <NavLink to={"/"}>Profile</NavLink>
            </div>
            <div>
                <Link className='btn btn-primary btn-sm'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;