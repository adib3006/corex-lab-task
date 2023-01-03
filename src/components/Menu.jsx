import React from 'react';

const Menu = () => {
    return (
        <nav className='flex border rounded bg-[#ECEEF0] text-center items-center w-full'>
            <p className='bg-white p-2 w-1/6 hover:cursor-pointer rounded font-bold'>Activity</p>
            <p className='w-1/6 hover:cursor-pointer text-[#8D8C8C] hover:bg-white hover:p-2 hover:rounded hover:font-bold hover:text-black'>Notes</p>
            <p className='w-1/6 hover:cursor-pointer text-[#8D8C8C] hover:bg-white hover:p-2 hover:rounded hover:font-bold hover:text-black'>E-mails</p>
            <p className='w-1/6 hover:cursor-pointer text-[#8D8C8C] hover:bg-white hover:p-2 hover:rounded hover:font-bold hover:text-black'>Calls</p>
            <p className='w-1/6 hover:cursor-pointer text-[#8D8C8C] hover:bg-white hover:p-2 hover:rounded hover:font-bold hover:text-black'>Task</p>
            <p className='w-1/6 hover:cursor-pointer text-[#8D8C8C] hover:bg-white hover:p-2 hover:rounded hover:font-bold hover:text-black'>Meeting</p>
        </nav>  
    );
};

export default Menu;