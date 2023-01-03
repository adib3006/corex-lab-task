import React from 'react';
import { Icon } from '@iconify/react';

const SideBar = () => {
    return (
        <div className='border-r h-screen'>
            <div className='pr-[22px]'>
                <p className='text-[14px] text-[#959595] font-[400] py-[35px] pl-[30px]'>General</p>
                <div className='text-[15px] text-[#353535] font-[400] hover:text-[#2142D9] flex items-center mb-[4px] hover:cursor-pointer hover:bg-[#F1F0FF] hover:font-[700] hover:rounded-[10px] pl-[25px] py-[10px]'>
                    <Icon icon="material-symbols:home-outline" className='mr-[17px]' width='20px' height='20px'/>
                    <p>Dashboard</p>
                </div>
                <div className='text-[15px] text-[#353535] font-[400] hover:text-[#2142D9] flex items-center mb-[4px] hover:cursor-pointer hover:bg-[#F1F0FF] hover:font-[700] hover:rounded-[10px] pl-[25px] py-[10px]'>
                    <Icon icon="teenyicons:pie-chart-outline" className='mr-[17px]' width='18px' height='18px'/>
                    <p>Campaign</p>
                </div>
                <div className='text-[15px] text-[#353535] font-[400] hover:text-[#2142D9] flex items-center mb-[4px] hover:cursor-pointer hover:bg-[#F1F0FF] hover:font-[700] hover:rounded-[10px] pl-[25px] py-[10px]'>
                    <Icon icon="lucide:users" className='mr-[17px]' width='18px' height='18px'/>
                    <p>Contacts</p>
                </div>
                <div className='text-[15px] text-[#353535] font-[400] hover:text-[#2142D9] flex items-center mb-[4px] hover:cursor-pointer hover:bg-[#F1F0FF] hover:font-[700] hover:rounded-[10px] pl-[25px] py-[10px]'>
                    <Icon icon="fluent:data-trending-24-regular" className='mr-[17px]' width='18px' height='18px'/>
                    <p>Analytics</p>
                </div>
                <div className='text-[15px] text-[#353535] font-[400] hover:text-[#2142D9] flex items-center mb-[4px] hover:cursor-pointer hover:bg-[#F1F0FF] hover:font-[700] hover:rounded-[10px] pl-[25px] py-[10px]'>
                    <Icon icon="mdi:file-document-outline" className='mr-[17px]' width='18px' height='18px'/>
                    <p>Reports</p>
                </div>
                <div className='text-[15px] text-[#353535] font-[400] hover:text-[#2142D9] flex items-center mb-[4px] hover:cursor-pointer hover:bg-[#F1F0FF] hover:font-[700] hover:rounded-[10px] pl-[25px] py-[10px]'>
                    <Icon icon="la:money-bill-wave" className='mr-[17px]' width='18px' height='18px'/>
                    <p>Billing</p>
                </div>
                <div className='text-[15px] text-[#353535] font-[400] hover:text-[#2142D9] flex items-center mb-[4px] hover:cursor-pointer hover:bg-[#F1F0FF] hover:font-[700] hover:rounded-[10px] pl-[25px] py-[10px]'>
                    <Icon icon="material-symbols:edit-document-outline-rounded" className='mr-[17px]' width='18px' height='18px'/>
                    <p>Conversation</p>
                </div>
            </div>
            <div className='pr-4'>
                <p className='text-[14px] text-[#959595] font-[400] py-[35px] pl-[30px]'>Support</p>
                <div className='text-[15px] text-[#353535] font-[400] hover:text-[#2142D9] flex items-center mb-[4px] hover:cursor-pointer hover:bg-[#F1F0FF] hover:font-[700] hover:rounded-[10px] pl-[25px] py-[10px]'>
                    <Icon icon="material-symbols:settings-outline-rounded" className='mr-[17px]' width='18px' height='18px'/>
                    <p>Settings</p>
                </div>
                <div className='text-[15px] text-[#353535] font-[400] hover:text-[#2142D9] flex items-center mb-[4px] hover:cursor-pointer hover:bg-[#F1F0FF] hover:font-[700] hover:rounded-[10px] pl-[25px] py-[10px]'>
                    <Icon icon="mdi:question-mark-circle-outline" className='mr-[17px]' width='18px' height='18px'/>
                    <p>Help Center</p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;