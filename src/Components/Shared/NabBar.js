import React from 'react';
import { Link } from 'react-router-dom';
import NavImage from '../../Media/Images/dexper-logo-navigation.svg';

const NabBar = () => {
    const navTabs = <>
        <li>
            <Link to=''>Home</Link>
        </li>
        <li>
            <Link to=''>Schedule
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-black">
                <li><Link to=''>On-site Schedule</Link></li>
                <li><Link to=''>Virtual Schedule</Link></li>
            </ul>
        </li>
        <li>
            <Link to=''>Speakers</Link>
        </li>
        <li>
            <Link to=''>Info</Link>
        </li>
        <li>
            <Link to=''>FAQ</Link>
        </li>
    </>
    return (
        <nav className='bg-black px-5 py-2'>
            <div className="navbar  text-white text-[14px] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navTabs}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"> <img src={NavImage} alt="" /> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navTabs}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='' className='text-[16px] px-[18px] py-[10px] border-[2px] border-slate-600 rounded hover:border-white mx-4' >Sign In</Link>
                    <Link to='' className="bg-white text-black normal-case px-[18px] py-[12px] text-[16px] font-bold rounded">Register Now</Link >
                </div>
            </div>
        </nav>
    );
};

export default NabBar;