import React from 'react';

const Menu = () => {
    return (
        <nav className='flex border rounded bg-[#ECEEF0] text-center items-center w-full text-[12px]'>
            <p className='bg-white w-[101px] pt-[11px] h-[41px] hover:cursor-pointer rounded font-bold drop-shadow]'>Activity</p>
            <p className='w-[101px] pt-[11px] h-[41px] hover:cursor-pointer text-[#8D8C8C] hover:bg-white hover:rounded hover:font-bold hover:text-black'>Notes</p>
            <p className='w-[101px] pt-[11px] h-[41px] hover:cursor-pointer text-[#8D8C8C] hover:bg-white hover:rounded hover:font-bold hover:text-black'>E-mails</p>
            <p className='w-[101px] pt-[11px] h-[41px] hover:cursor-pointer text-[#8D8C8C] hover:bg-white hover:rounded hover:font-bold hover:text-black'>Calls</p>
            <p className='w-[101px] pt-[11px] h-[41px] hover:cursor-pointer text-[#8D8C8C] hover:bg-white hover:rounded hover:font-bold hover:text-black'>Task</p>
            <p className='w-[101px] pt-[11px] h-[41px] hover:cursor-pointer text-[#8D8C8C] hover:bg-white hover:rounded hover:font-bold hover:text-black'>Meeting</p>
        </nav>  
    );
};

export default Menu;