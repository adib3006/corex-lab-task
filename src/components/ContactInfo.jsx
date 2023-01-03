import React from 'react';
import back from '../assets/back.png';
import person from '../assets/person.png';
import google from '../assets/google.png';
import pen from '../assets/pen.png';
import { Icon } from '@iconify/react';

const ContactInfo = () => {
    return (
        <>
            <div className='flex items-center mb-10 mt-3'>
                <img src={back} alt="" className='border rounded-full px-[7px] py-[5px] w-6' />
                <p className='font-semibold ml-4'>Back to Contact</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={person} alt="" className='mb-[11px]' />
                <p className='font-semibold text-xl mb-1'>Pattrick Leach</p>
                <div className='flex items-center mb-7'>
                    <img src={google} alt="" />
                    <p className='text-gray-400 font-semibold ml-1 text-sm'>Google</p>
                </div>
                <div className='flex justify-around w-full px-5'>
                    <div className='border rounded-full'>
                        <Icon icon="material-symbols:add" className=' text-gray-400 m-1' width={20} />
                    </div>
                    <div className='border rounded-full'>
                        <Icon icon="ion:mail-outline" className=' text-gray-400 m-1' width={20} />
                    </div>
                    <div className='border rounded-full'>
                        <Icon icon="ion:call-outline" className=' text-gray-400 m-1' width={20} />
                    </div>
                    <div className='border rounded-full'>
                        <Icon icon="ph:dots-three-duotone" className=' text-gray-400 m-1' width={20} />
                    </div>
                </div>
                <div className='flex justify-around w-full px-5 text-gray-400 text-sm mt-2'>
                    <p>Log</p>
                    <p className='ml-0.5'>Email</p>
                    <p>Call</p>
                    <p>More</p>
                </div>
                <button className='bg-blue-600 hover:bg-blue-700 text-white py-3 px-12 rounded-lg mt-12 flex items-center'>Edit Contact
                    <img src={pen} alt="" className='ml-2' /></button>
            </div>
            <div className='flex text-center mt-14 mb-8'>
                <div className='border-blue-600 border-b-4 w-1/2 hover:cursor-pointer'><p className='font-bold'>Contact Info</p></div>
                <div className='border-b w-1/2 hover:border-blue-600 hover:border-b-4 hover:cursor-pointer'><p className='text-gray-500 hover:font-bold hover:text-black'>Address Info</p></div>
            </div>
            <div className='mb-4'>
                <p className='text-gray-500 mb-0.5 text-sm'>E-mail</p>
                <p className='font-bold'>pattrick@example.com</p>
            </div>
            <div className='mb-4'>
                <p className='text-gray-500 mb-0.5 text-sm'>Phone</p>
                <p className='font-bold'>(001) 546-8528</p>
            </div>
            <div className='mb-4'>
                <p className='text-gray-500 mb-0.5 text-sm'>Contact Owner</p>
                <p className='font-bold'>James Dean</p>
            </div>
            <div className='mb-4'>
                <p className='text-gray-500 mb-0.5 text-sm'>Job Title</p>
                <p className='font-bold'>Software Developer</p>
            </div>
            <div>
                <p className='text-gray-500 mb-0.5 text-sm'>Annual Revenue</p>
                <p className='font-bold'>$ 100,000</p>
            </div>
        </>
    );
};

export default ContactInfo;