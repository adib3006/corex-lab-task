import React from 'react';
import person from '../assets/person.png';
import google from '../assets/google.png';
import pen from '../assets/pen.png';
import { Icon } from '@iconify/react';

const ContactInfo = () => {
    return (
        <>
            <div className='flex items-center mb-[38px] mt-[29px]'>
                <Icon icon="material-symbols:keyboard-arrow-left" className='border rounded-full text-[#BEBEBE] hover:cursor-pointer'/>
                <p className='font-semibold ml-[14px] text-[#2B2B2B] text-[12px]'>Back to Contact</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={person} alt="" className='mb-[11px] w-[80px] h-[80px]' />
                <p className='font-bold text-[17px] mb-[7px] text-[#121F26]'>Pattrick Leach</p>
                <div className='flex items-center mb-[29px]'>
                    <img src={google} alt="" className='w-[16px] h-[16px]'/>
                    <p className='text-[#878787] font-semibold ml-1 text-[10px]'>Google</p>
                </div>
                <div className='flex justify-around w-full px-5'>
                    <div className='border border-[#DBDBDB] rounded-full hover:cursor-pointer'>
                        <Icon icon="material-symbols:add" className=' text-[#B0ACAC] m-[7px]' width="14" height="14" />
                    </div>
                    <div className='border border-[#DBDBDB] rounded-full hover:cursor-pointer'>
                        <Icon icon="ion:mail-outline" className=' text-[#B0ACAC] m-[7px]' width="14" height="14" />
                    </div>
                    <div className='border border-[#DBDBDB] rounded-full hover:cursor-pointer'>
                        <Icon icon="ion:call-outline" className=' text-[#B0ACAC] m-[7px]' width="14" height="14"  />
                    </div>
                    <div className='border border-[#DBDBDB] rounded-full hover:cursor-pointer'>
                        <Icon icon="ph:dots-three-duotone" className=' text-[#B0ACAC] m-[7px]' width="14" height="14"  />
                    </div>
                </div>
                <div className='flex justify-around w-full px-5 text-[#696868] text-[10px] mt-[7px] font-[400]'>
                    <p>Log</p>
                    <p className='ml-0.5'>Email</p>
                    <p>Call</p>
                    <p>More</p>
                </div>
                <button className='bg-[#2142D9] hover:bg-[#1933a7] text-white text-[12px] py-[11px] px-[37px] rounded-lg mt-[36px] flex items-center'>Edit Contact
                    <img src={pen} alt="" className='ml-[18px]' /></button>
            </div>
            <div className='flex text-center mt-[58px] mb-[25px]'>
                <div className='border-blue-600 border-b-4 w-1/2 hover:cursor-pointer mb-[7px]'>
                    <p className='font-bold text-[12px] text-[#2B2B2B]'>Contact Info</p></div>
                <div className='border-b w-1/2 hover:border-blue-600 hover:border-b-4 hover:cursor-pointer mb-[7px]'><p className='text-[12px] text-[#9F9F9F] hover:font-bold hover:text-[#2B2B2B]'>Address Info</p></div>
            </div>
            <div className='mb-[17px]'>
                <p className='text-[#9F9F9F] mb-[3px] text-[10px]'>E-mail</p>
                <p className='font-bold text-[12px] text-[#2B2B2B]'>pattrick@example.com</p>
            </div>
            <div className='mb-[17px]'>
                <p className='text-[#9F9F9F] mb-[3px] text-[10px]'>Phone</p>
                <p className='font-bold text-[12px] text-[#2B2B2B]'>(001) 546-8528</p>
            </div>
            <div className='mb-[17px]'>
                <p className='text-[#9F9F9F] mb-[3px] text-[10px]'>Contact Owner</p>
                <p className='font-bold text-[12px] text-[#2B2B2B]'>James Dean</p>
            </div>
            <div className='mb-[17px]'>
                <p className='text-[#9F9F9F] mb-[3px] text-[10px]'>Job Title</p>
                <p className='font-bold text-[12px] text-[#2B2B2B]'>Software Developer</p>
            </div>
            <div>
                <p className='text-[#9F9F9F] mb-[3px] text-[10px]'>Annual Revenue</p>
                <p className='font-bold text-[12px] text-[#2B2B2B]'>$ 100,000</p>
            </div>
        </>
    );
};

export default ContactInfo;