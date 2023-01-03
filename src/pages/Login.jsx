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
                    <div className='mb-12'>
                        <h1 className='text-2xl font-semibold'>Sign in</h1>
                        <p className='text-sm text-[#949CA9]'>
                            Enter your credentials to access to your account
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
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
                                    <label htmlFor='password' className='text-sm mb-2'>
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
                        <div className='my-8 flex items-center justify-between'>
                            <div>
                                <input type="checkbox" name="check" id="" />
                                <label htmlFor="check"> Remember me</label>
                            </div>
                            <p className='text-[#167EE6]'>Forgot password?</p>
                        </div>
                        <div>
                            <button type='submit' className='mb-5 w-full px-8 py-3 font-semibold rounded-md bg-[#3D59DD] text-white hover:bg-[#354cc2]'>Sign in</button>
                        </div>
                    </form>
                    <button type='submit' className='flex items-center justify-center border-2 mb-5 w-full px-8 py-3 font-semibold rounded-md'>
                        <Icon icon="logos:google-icon" width={25} className='mr-3' />
                        Sign in with Google</button>
                    <p className='px-6 text-sm text-center text-gray-500'>
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
                    <img src={logoWhite} alt="" />
                    <div className='text-white text-end pl-20'>
                        <p className='text-3xl font-semibold mb-8'>Automate your message service</p>
                        <p>Make your tasks easy with Loopmee by an automated integration along with your contacts</p>
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