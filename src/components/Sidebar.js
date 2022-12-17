import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='bg-blue-100 w-3/5 lg:w-1/6 h-[87vh] lg:h-[92vh] fixed top-[6vh] lg:top-[8vh] left-0 p-4'>
            <h2 className='text-2xl font-bold text-center'>All Topics</h2>
            <div className='flex flex-col gap-1'>
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