import React from 'react';
import google2 from '../assets/google2.png';
import upArrow from '../assets/upArrow.png';
import downArrow from '../assets/downArrow.png';
import { Icon } from '@iconify/react';

const Company = () => {
    return (
        <>
            <p className='font-bold text-[#2B2B2B] text-[12px]'>Company</p>
            <div className='flex items-center mt-[18px]'>
                <img src={google2} alt="" className='w-[33px] h-[33px] mr-[7px]' />
                <div className='text-sm'>
                    <p className='font-semibold text-[12px]'>Google inc.</p>
                    <div className='flex items-center text-[#9F9F9F]'>
                        <Icon icon="mdi:web" inline={true} width='10px' height='10px'/> 
                        <span className='ml-[6px] text-[10px]'>www.google.com</span>
                    </div>
                </div>
            </div>
            <div className='mt-[28px] border rounded py-[12px] px-[23px] mb-[35px] shadow-lg'>
                <div className='flex items-center mb-[6px]'>
                    <Icon icon="ion:mail-outline" className='mr-[9px] text-[#B0ACAC]' width='13px'/>
                    <p className='text-[#424242] text-[12px] font-[400]'>pattrick@example.com</p>
                </div>
                <div className='flex items-center'>
                    <Icon icon="ion:call-outline" className='mr-[10px] text-[#B0ACAC]' width='12px'/>
                    <p className='text-[#424242] text-[12px] font-[400]'>(001) 546-8528</p>
                </div>
            </div>
            <hr />
            <div className='mt-[21px] flex items-center justify-between mb-9'>
                <div className='flex items-center'>
                    <p className='font-bold mr-2 text-[12px]'>Campaigns</p>
                    <p className='rounded px-[10px] py-0 bg-[#F4F4F4] text-[12px] text-[#676767]'>2</p>
                </div>
                <div className='flex items-center text-[#9F9F9F] font-[600]'>
                    <p className='mr-[6px] text-[8px]'>close</p>
                    <img src={upArrow} alt="" />
                </div>
            </div>
            <button className='border w-full rounded flex items-center justify-center py-[5px] text-[9px] font-[600] text-[#2B2B2B]'>
                <Icon icon="material-symbols:add" className='text-[#B0ACAC] mr-2' width={20} /> Create New Campaign
            </button>
            <div className='rounded border mt-[11px] py-[14px] px-[16px]'>
                <div className='flex items-center justify-between'>
                    <p className='text-[#9F9F9F] text-[9px] font-[400]'>Ending in: 18 Jan, 2021</p>
                    <p className='text-blue-600 bg-[#F1F0FF] px-[20px] py-[1px] rounded-full text-[8px] font-[600]'>Enrolled</p>
                </div>
                <p className='font-semibold text-[12px] text-[#2B2B2B]'>Web Development</p>
                <p className='font-bold text-[16px] text-[#2B2B2B]'>$1,200</p>
            </div>
            <div className='rounded border mt-[23px] mb-[20px] py-[14px] px-[16px]'>
                <div className='flex items-center justify-between'>
                    <p className='text-[#9F9F9F] text-[9px] font-[400]'>Ending in: 21 Jan, 2021</p>
                    <p className='text-[#FF7043] bg-[#FF7043] bg-opacity-20 px-[20px] py-[1px] rounded-full text-[8px] font-[600]'>Pending</p>
                </div>
                <p className='font-semibold text-[12px] text-[#2B2B2B]'>AI Workshop</p>
                <p className='font-bold text-[16px] text-[#2B2B2B]'>$2,200</p>
            </div>
            <hr />
            <div className='mt-[23px] mb-[25px] flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='font-bold mr-[11px] text-[12px] text-[#2B2B2B]'>Tickets</p>
                    <p className='rounded px-[10px] py-0 bg-[#F4F4F4] text-[12px] text-[#676767]'>2</p>
                </div>
                <div className='flex items-center text-[#9F9F9F]'>
                    <small className='mr-[6px] text-[8px]'>View</small>
                    <img src={downArrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='mt-[23px] mb-[25px] flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='font-bold mr-[11px] text-[12px] text-[#2B2B2B]'>Attachments</p>
                </div>
                <div className='flex items-center text-[#9F9F9F]'>
                    <small className='mr-[6px] text-[8px]'>View</small>
                    <img src={downArrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='mt-[23px] mb-[25px] flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='font-bold mr-[11px] text-[12px] text-[#2B2B2B]'>Playbooks</p>
                </div>
                <div className='flex items-center text-[#9F9F9F]'>
                    <small className='mr-[6px] text-[8px]'>View</small>
                    <img src={downArrow} alt="" />
                </div>
            </div>
            <hr />
        </>
    );
};

export default Company;