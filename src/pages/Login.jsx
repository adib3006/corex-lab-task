import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import loginBG from '../assets/loginBG.PNG';
import logoWhite from '../assets/logoWhite.png';
import login from '../assets/login.png';

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    }
    return (
        <div className='flex w-full'>
            <div className='w-1/2 min-h-screen flex flex-col justify-center items-center'>
                <div className='flex flex-col w-3/5 p-6 rounded-md bg-white text-gray-900'>
                    <div className='mb-[52px]'>
                        <h1 className='text-[24px] font-[500]'>Sign in</h1>
                        <p className='text-[14px] text-[#949CA9]'>
                            Enter your credentials to access to your account
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-[14px] text-[#344054]'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-[14px] text-[#344054] mb-2'>
                                        Password
                                    </label>
                                </div>
                                <div className='w-full py-2 border rounded-md border-gray-300 focus:outline-gray-500 flex items-center'>
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        required
                                        placeholder='••••••••'
                                        className='w-11/12 px-3 focus:outline-none'
                                    />
                                    <Icon icon="dashicons:hidden" />
                                </div>
                            </div>
                        </div>
                        <div className='my-[29px] flex items-center justify-between'>
                            <div>
                                <input type="checkbox" name="check" id="" />
                                <label htmlFor="check" className='text-[14px] text-[#344054] font-[500]'> Remember me</label>
                            </div>
                            <p className='text-[#167EE6] text-[14px] font-[500]'>Forgot password?</p>
                        </div>
                        <div>
                            <button type='submit' className='mb-5 w-full px-8 py-3 font-semibold rounded-md bg-[#3D59DD] text-white hover:bg-[#354cc2]'>Sign in</button>
                        </div>
                    </form>
                    <button type='submit' className='flex items-center justify-center border-2 mb-5 w-full px-8 py-3 font-semibold rounded-md text-[#344054]'>
                        <Icon icon="logos:google-icon" width={25} className='mr-3' />
                        Sign in with Google</button>
                    <p className='px-6 text-[14px] text-center text-[#344054]'>
                        Don't have an account?{' '}
                        <Link to='/' className='hover:underline text-[#167EE6]'>
                            Sign up
                        </Link>
                        .
                    </p>
                </div>
            </div>
            <div className='w-1/2 bg-cover min-h-screen' style={{ backgroundImage: `url(${loginBG})` }}>
                <div className='flex flex-col items-end justify-between p-5 h-1/2'>
                    <img src={logoWhite} alt="" className='w-[220px]'/>
                    <div className='text-white text-end pl-20'>
                        <p className='text-[36px] font-[500] mb-8'>Automate your message service</p>
                        <p className='text-[14px]'>Make your tasks easy with Loopmee by an automated integration along with your contacts</p>
                    </div>
                </div>
                <div className='h-1/2 flex justify-end'>
                    <img src={login} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;