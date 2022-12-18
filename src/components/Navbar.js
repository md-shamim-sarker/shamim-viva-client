import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import interview from '../assets/interview.svg';
import {AiOutlineClose, AiOutlineMenuUnfold} from 'react-icons/ai';
import {FaHome} from 'react-icons/fa';
import {MdAddCall, MdOutlineContactMail} from 'react-icons/md';
import {ImProfile} from 'react-icons/im';
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';
import {HiOutlineViewGridAdd} from 'react-icons/hi';
import {AuthContext} from '../contexts/UserContext';
import Sidebar from './Sidebar';

const Navbar = () => {
    const {toggle, setToggle, dark, setDark} = useContext(AuthContext);
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
                        <FaHome className='text-xl'></FaHome>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={"/about"} className="flex items-center gap-1">
                        <MdOutlineContactMail className='text-xl'></MdOutlineContactMail>
                        <span>About</span>
                    </NavLink>
                    <NavLink to={"/contact"} className="flex items-center gap-1">
                        <MdAddCall className='text-[1.2rem]'></MdAddCall>
                        <span>Contact</span>
                    </NavLink>
                    <NavLink to={"/profile"} className="flex items-center gap-1">
                        <ImProfile className='text-[1.2rem]'></ImProfile>
                        <span>Profile</span>
                    </NavLink>
                    <NavLink to={"/addNote"} className="flex items-center gap-1">
                        <HiOutlineViewGridAdd className='text-xl'></HiOutlineViewGridAdd>
                        <span>New</span>
                    </NavLink>
                </div>
                <div className='flex items-center gap-2'>
                    <label className="swap swap-rotate">
                        <input onClick={() => setDark(!dark)} type="checkbox" />
                        <BsFillSunFill className="swap-off fill-current w-6 h-6 text-orange-500"></BsFillSunFill>
                        <BsFillMoonFill className="swap-on fill-current w-6 h-6"></BsFillMoonFill>
                    </label>
                    <Link to={"/login"} className='btn btn-primary btn-sm'>
                        Login
                    </Link>
                </div>
                <div className='btm-nav lg:hidden z-50 h-[8vh]'>
                    <NavLink to={"/"} className={dark ? 'navMobileDark' : 'navMobileLight'}>
                        <FaHome></FaHome>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={"/about"} className={dark ? 'navMobileDark' : 'navMobileLight'}>
                        <MdOutlineContactMail></MdOutlineContactMail>
                        <span>About</span>
                    </NavLink>
                    <NavLink to={"/contact"} className={dark ? 'navMobileDark' : 'navMobileLight'}>
                        <MdAddCall></MdAddCall>
                        <span>Contact</span>
                    </NavLink>
                    <NavLink to={"/profile"} className={dark ? 'navMobileDark' : 'navMobileLight'}>
                        <ImProfile></ImProfile>
                        <span>Profile</span>
                    </NavLink>
                    <NavLink to={"/addNote"} className={dark ? 'navMobileDark' : 'navMobileLight'}>
                        <HiOutlineViewGridAdd></HiOutlineViewGridAdd>
                        <span>New</span>
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