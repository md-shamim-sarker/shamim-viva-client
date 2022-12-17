import React from 'react';
import {Link} from 'react-router-dom';
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>About</Link>
                <Link to={"/"}>Contact</Link>
                <Link to={"/"}>Profile</Link>
            </div>
            <div className="grid grid-flow-col gap-4">
                <Link to={"/"}>
                    <FaFacebook className='text-2xl'></FaFacebook>
                </Link>
                <Link to={"/"}>
                    <FaLinkedin className='text-2xl'></FaLinkedin>
                </Link>
                <Link to={"/"}>
                    <FaGithub className='text-2xl'></FaGithub>
                </Link>
            </div>
            <p className='pb-10 lg:pb-0'>Copyright © 2022 - All right reserved by Shamim Sarker</p>
        </footer>
    );
};

export default Footer;