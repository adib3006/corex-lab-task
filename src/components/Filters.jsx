import React from 'react';

const Filters = () => {
    return (
        <div className='flex mt-10'>
            <div className='flex items-center p-2 bg-white mr-6 text-[#7A7A7A] rounded'>
                <p>Filter Activity</p>
                <select name="" id="" className=' bg-white rounded mx-1'>
                    <option value="20" defaultValue={true}>21/25</option>
                </select>
            </div>
            <div className='flex items-center p-2 bg-white text-[#7A7A7A] rounded'>
                <select name="" id="" className=' bg-white rounded mx-1'>
                    <option value="20" defaultValue={true}>All Users</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;