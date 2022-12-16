import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import interview from '../assets/interview.svg';
import {AiOutlineMenuUnfold} from 'react-icons/ai';
import {GrClose} from 'react-icons/gr';
import {AuthContext} from '../contexts/UserContext';

const Navbar = () => {
    const {toggle, setToggle} = useContext(AuthContext);
    console.log(toggle);
    return (
        <div className='flex items-center justify-between bg-base-200 px-4 py-2'>
            <div className='flex items-center gap-1'>
                {
                    toggle
                        ? <GrClose onClick={() => setToggle(false)} className='text-2xl'></GrClose>
                        : <AiOutlineMenuUnfold onClick={() => setToggle(true)} className='text-2xl'></AiOutlineMenuUnfold>
                }
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