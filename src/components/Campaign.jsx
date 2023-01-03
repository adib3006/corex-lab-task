import React from 'react';
import { Icon } from '@iconify/react';
import details from '../assets/details.png';
import red from '../assets/red.png';
import maroon from '../assets/maroon.png';
import person2 from '../assets/person2.png';

const Campaign = ({info}) => {
    return (
        <div className=' bg-white rounded mt-3 py-3 border'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center text-[#474747] text-sm px-3 pb-2'>
                    <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
                    <div className='rounded-full bg-[#F1F0FF] mx-2'>
                        <img src={details} alt="" className='m-1' />
                    </div>
                    <p className='font-bold text-xs'>Campaign <span className='font-normal'>created</span> James Dean</p>
                </div>
                <div className='flex items-center text-[#9F9F9F] text-xs px-3 pb-2'>
                    <p className='mr-1'>Due:</p>
                    <Icon icon="material-symbols:calendar-month-outline-sharp" inline={true} />
                    <p>Today</p>
                    <p className='font-bold text-[#6C6C6C] ml-1 mr-7'>12.00pm</p>
                    <Icon icon="ph:dots-three-duotone" width={20} />
                </div>
            </div>
            <hr />
            <div className='mt-5 px-3'>
                <input type="radio" id="" name="task" value="" className='mr-4' />
                <label htmlFor="tast" className='font-bold'>Prepare quote for Pattrick Leach</label>
                <p className='text-[#B6B6B6] text-sm ml-7'>Lorem ipsum may be used as a placeholder before final copy is available. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <div className='mx-7 mt-10 border rounded p-3 grid grid-cols-3 text-sm'>
                    <div className='border-r'>
                        <p className='text-[#9F9F9F] ml-1 mb-1'>Reminder</p>
                        <select name="" id="">
                            <option value="No Reminder" defaultValue={true}>No Reminder</option>
                            <option value="Reminder">Reminder</option>
                        </select>
                    </div>
                    <div className='border-r flex flex-col items-center'>
                        <p className='text-[#9F9F9F] mb-1'>Task Priority</p>
                        <div className='flex items-center'>
                            {(info === 'High') && <img src={red} alt="" className='mr-2' />}
                            {(info === 'Moderate') && <img src={maroon} alt="" className='mr-2' />}
                            <select name="" id="">
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
                    <div className='pl-2'>
                        <p className='text-[#9F9F9F] ml-1 mb-1'>Assigned to</p>
                        <div className='flex items-center'>
                            <img src={person2} alt="" className='mr-2'/>
                            <p>James Dean</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;