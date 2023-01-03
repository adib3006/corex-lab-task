import React from 'react';
import google2 from '../assets/google2.png';
import upArrow from '../assets/upArrow.png';
import downArrow from '../assets/downArrow.png';
import { Icon } from '@iconify/react';

const Company = () => {
    return (
        <>
            <p className='font-bold'>Company</p>
            <div className='flex items-center mt-5'>
                <img src={google2} alt="" className='mr-2' />
                <div className='text-sm'>
                    <p className='font-bold'>Google inc.</p>
                    <div className='flex items-center text-[#9F9F9F]'>
                        <Icon icon="mdi:web" inline={true} /> <span className='ml-1'>www.google.com</span>
                    </div>
                </div>
            </div>
            <div className='mt-7 border rounded py-2 px-3 mb-9 shadow-lg'>
                <div className='flex items-center'>
                    <Icon icon="ion:mail-outline" className='mt-1 mr-2 text-[#B0ACAC]' />
                    <p className='text-[#424242] text-sm'>pattrick@example.com</p>
                </div>
                <div className='flex items-center'>
                    <Icon icon="ion:call-outline" className='mt-1 mr-2 text-[#B0ACAC]' />
                    <p className='text-[#424242] text-sm'>(001) 546-8528</p>
                </div>
            </div>
            <hr />
            <div className='mt-5 flex items-center justify-between mb-9'>
                <div className='flex items-center'>
                    <p className='font-bold mr-2'>Campaigns</p>
                    <p className='rounded px-2 py-0 bg-[#F4F4F4]'>2</p>
                </div>
                <div className='flex items-center text-[#9F9F9F]'>
                    <small className='mr-1'>close</small>
                    <img src={upArrow} alt="" />
                </div>
            </div>
            <button className='border w-full rounded flex items-center justify-center py-2 text-sm'>
                <Icon icon="material-symbols:add" className='text-[#B0ACAC] mr-2' width={20} /> Create New Campaign
            </button>
            <div className='rounded border mt-3 p-4'>
                <div className='flex items-center justify-between'>
                    <small className='text-[#9F9F9F] text-[10px]'>Ending in: 18 Jan, 2021</small>
                    <small className='text-blue-600 bg-[#F1F0FF] px-3 rounded-full text-[10px]'>Enrolled</small>
                </div>
                <p className='font-bold'>Web Development</p>
                <p className='font-bold text-lg'>$1,200</p>
            </div>
            <div className='rounded border mt-3 mb-5 p-4'>
                <div className='flex items-center justify-between'>
                    <small className='text-[#9F9F9F] text-[10px]'>Ending in: 21 Jan, 2021</small>
                    <small className='text-[#FF7043] bg-[#FF7043] bg-opacity-20 px-3 rounded-full text-[10px]'>Pending</small>
                </div>
                <p className='font-bold'>AI Workshop</p>
                <p className='font-bold text-lg'>$2,200</p>
            </div>
            <hr />
            <div className='mt-5 mb-6 flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='font-bold mr-2'>Tickets</p>
                    <p className='rounded px-2 py-0 bg-[#F4F4F4]'>2</p>
                </div>
                <div className='flex items-center text-[#9F9F9F]'>
                    <small className='mr-1'>View</small>
                    <img src={downArrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='mt-5 mb-6 flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='font-bold mr-2'>Attachments</p>
                </div>
                <div className='flex items-center text-[#9F9F9F]'>
                    <small className='mr-1'>View</small>
                    <img src={downArrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='mt-5 mb-6 flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='font-bold mr-2'>Playbooks</p>
                </div>
                <div className='flex items-center text-[#9F9F9F]'>
                    <small className='mr-1'>View</small>
                    <img src={downArrow} alt="" />
                </div>
            </div>
            <hr />
        </>
    );
};

export default Company;