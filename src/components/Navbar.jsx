import React from 'react';
import logo from '../assets/loopmee-no bg-blue-preview 1.png';
import comment from '../assets/comment.png';
import bell from '../assets/bell.png';
import person from '../assets/Ellipse 5.png';
import down from '../assets/material-symbols_keyboard-arrow-down.png';
import {FaSearch} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='pl-10 flex w-full items-center border-b'>
            <div className='border-r py-4 w-1/6'>
                <img src={logo} alt=""/>
            </div>
            <div className='flex justify-between w-5/6 pl-10 py-2'>
                <div className='border rounded flex items-center p-2'>
                    <FaSearch className='text-gray-500 mr-2'/>
                    <input type="search" name="" id="" placeholder='Search' />
                </div>
                <div className='flex items-center'>
                    <img src={comment} className='pr-5' alt="" />
                    <img src={bell} className='pr-5' alt="" />
                    <img src={person} className='pr-5' alt="" />
                    <p className='pr-5'>Will Smith</p>
                    <img src={down} className='pr-5' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;