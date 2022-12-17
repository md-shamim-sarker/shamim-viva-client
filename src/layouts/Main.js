import React, {useContext} from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {AuthContext} from '../contexts/UserContext';

const Main = () => {
    const {setToggle, dark} = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div onClick={() => setToggle(false)} className={`pt-20 pb-10 ${dark ? 'dark' : 'light'}`}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;