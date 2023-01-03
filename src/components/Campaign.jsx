import React from 'react';
import { Icon } from '@iconify/react';
import details from '../assets/details.png';
import red from '../assets/red.png';
import maroon from '../assets/maroon.png';
import person2 from '../assets/person2.png';

const Campaign = ({info}) => {
    return (
        <div className=' bg-white rounded mb-[14px] py-[12px] border'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center text-[#474747] text-[12px] px-[17px] pb-[10px]'>
                    <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
                    <div className='rounded-full bg-[#F1F0FF] mx-2'>
                        <img src={details} alt="" className='m-1' />
                    </div>
                    <p className='font-bold'>Campaign <span className='font-normal'>created</span> James Dean</p>
                </div>
                <div className='flex items-center text-[#9F9F9F] text-[8px] px-3 pb-2'>
                    <p className='mr-[5px]'>Due:</p>
                    <Icon icon="material-symbols:calendar-month-outline-sharp" inline={true} width='10px' height='10px' className='mr-[5px]'/>
                    <p>Today</p>
                    <span className='font-bold text-[#6C6C6C] ml-[4px] mr-[30px]'>12.00pm</span>
                    <Icon icon="ph:dots-three-duotone" width={20} />
                </div>
            </div>
            <hr />
            <div className='mt-[20px] px-[19px]'>
                <input type="radio" id="" name="task" value="" className='mr-[13px]' />
                <label htmlFor="tast" className='font-semibold text-[13px] text-[#2B2B2B]'>Prepare quote for Pattrick Leach</label>
                <p className='text-[#B6B6B6] text-[10px] mx-[26px]'>Lorem ipsum may be used as a placeholder before final copy is available. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <div className='mx-7 mt-[40px] border rounded pt-[5px] pb-[9px] pl-[15px] grid grid-cols-3'>
                    <div className='border-r'>
                        <p className='text-[#9F9F9F] mb-[4px] text-[10px]'>Reminder</p>
                        <select name="" id="" className='text-[12px] text-[#2B2B2B] focus:outline-none'>
                            <option value="No Reminder" defaultValue={true}>No Reminder</option>
                            <option value="Reminder">Reminder</option>
                        </select>
                    </div>
                    <div className='border-r flex flex-col items-center'>
                        <p className='text-[#9F9F9F] mb-[4px] text-[10px]'>Task Priority</p>
                        <div className='flex items-center'>
                            {(info === 'High') && <img src={red} alt="" className='mr-2' />}
                            {(info === 'Moderate') && <img src={maroon} alt="" className='mr-2' />}
                            <select name="" id="" className='text-[12px] text-[#2B2B2B] focus:outline-none'>
                                <option value="High" className='flex' defaultValue={true}>
                                    {`${info}`}
                                </option>
                                {(info === 'High') && <option value="High" className='flex'>
                                    Moderate
                                </option>}
                                {(info === 'Moderate') && <option value="High" className='flex'>
                                    High
                                </option>}
                            </select>
                        </div>
                    </div>
                    <div className='pl-[16px]'>
                        <p className='text-[#9F9F9F] ml-1 mb-[4px] text-[10px]'>Assigned to</p>
                        <div className='flex items-center'>
                            <img src={person2} alt="" className='mr-[8px] w-[16px] h-[16px]'/>
                            <p className='text-[12px]'>James Dean</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;