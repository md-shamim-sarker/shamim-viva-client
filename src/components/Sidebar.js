import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const Sidebar = () => {
    const {setToggle, dark} = useContext(AuthContext);
    return (
        <div className={`w-3/5 lg:w-1/6 h-[86vh] lg:h-[92vh] fixed top-[6vh] lg:top-[8vh] left-0 p-4 overflow-y-auto ${dark ? 'navFooterDark' : 'navFooterLight'}`}>
            <h2 className='text-2xl font-bold text-center'>All Topics</h2>
            <div onClick={() => setToggle(false)} className='flex flex-col gap-1'>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
                <NavLink to={"/"}>Link Item</NavLink>
            </div>
        </div>
    );
};

export default Sidebar;