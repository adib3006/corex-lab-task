import React from 'react';

const Filters = () => {
    return (
        <div className='flex mt-[31px] text-[12px]'>
            <div className='flex items-center p-2 bg-white mr-6 text-[#7A7A7A] rounded'>
                <p>Filter Activity</p>
                <select name="" id="" className=' bg-white rounded mx-1 focus:outline-none'>
                    <option value="20" defaultValue={true} className='mr-[14px]'>21/25</option>
                </select>
            </div>
            <div className='flex items-center p-2 bg-white text-[#7A7A7A] rounded'>
                <select name="" id="" className=' bg-white rounded mx-1 focus:outline-none'>
                    <option value="20" defaultValue={true} className='mr-[14px]'>All Users</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;