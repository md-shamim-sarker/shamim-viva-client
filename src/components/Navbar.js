import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import interview from '../assets/interview.svg';
import {AiFillContacts, AiOutlineClose, AiOutlineMenuUnfold} from 'react-icons/ai';
import {FaHome} from 'react-icons/fa';
import {MdOutlineContactMail} from 'react-icons/md';
import {ImProfile} from 'react-icons/im';
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';
import {AuthContext} from '../contexts/UserContext';
import Sidebar from './Sidebar';

const Navbar = () => {
    const {toggle, setToggle, dark, setDark} = useContext(AuthContext);
    console.log(dark);
    return (
        <div className={`w-full fixed top-0 z-20 ${dark ? 'navFooterDark' : 'navFooterLight'}`}>
            <div className='flex items-center justify-between px-4 h-[6vh] lg:h-[8vh]'>
                <div className='flex items-center gap-1'>
                    {
                        toggle
                            ? <AiOutlineClose onClick={() => setToggle(false)} className='text-2xl'></AiOutlineClose>
                            : <AiOutlineMenuUnfold onClick={() => setToggle(true)} className='text-2xl'></AiOutlineMenuUnfold>
                    }
                    <img src={interview} alt="..." className='w-10 h-10' />
                    <h2 className='text-2xl font-bold'>VIVA</h2>
                </div>
                <div className='hidden lg:flex gap-5'>
                    <NavLink to={"/"} className="flex items-center gap-1">
                        <FaHome>Home</FaHome>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={"/"} className="flex items-center gap-1">
                        <MdOutlineContactMail>About</MdOutlineContactMail>
                        <span>About</span>
                    </NavLink>
                    <NavLink to={"/"} className="flex items-center gap-1">
                        <AiFillContacts>Contact</AiFillContacts>
                        <span>Contact</span>
                    </NavLink>
                    <NavLink to={"/"} className="flex items-center gap-1">
                        <ImProfile>Profile</ImProfile>
                        <span>Profile</span>
                    </NavLink>
                </div>
                <div className='flex items-center gap-2'>
                    <label className="swap swap-rotate">
                        <input onClick={() => setDark(!dark)} type="checkbox" />
                        <BsFillSunFill className="swap-off fill-current w-6 h-6 text-orange-500"></BsFillSunFill>
                        <BsFillMoonFill className="swap-on fill-current w-6 h-6"></BsFillMoonFill>
                    </label>
                    <Link className='btn btn-primary btn-sm'>
                        Login
                    </Link>
                </div>
                <div className="btm-nav lg:hidden z-50 h-[7vh]">
                    <NavLink to={"/"}>
                        <FaHome>Home</FaHome>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={"/"}>
                        <MdOutlineContactMail>About</MdOutlineContactMail>
                        <span>About</span>
                    </NavLink>
                    <NavLink to={"/"}>
                        <AiFillContacts>Contact</AiFillContacts>
                        <span>Contact</span>
                    </NavLink>
                    <NavLink to={"/"}>
                        <ImProfile>Profile</ImProfile>
                        <span>Profile</span>
                    </NavLink>
                </div>
                {
                    toggle && <Sidebar></Sidebar>
                }
            </div>
        </div>
    );
};

export default Navbar;