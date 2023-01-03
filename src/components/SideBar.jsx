import React from 'react';
import { Icon } from '@iconify/react';

const SideBar = () => {
    return (
        <div className='border-r h-screen'>
            <div className='pr-4'>
                <p className='text-gray-500 py-7'>General</p>
                <div className='flex items-center mb-3 hover:cursor-pointer hover:bg-gray-200 hover:font-semibold hover:rounded p-1 text-gray-700 hover:text-blue-600'>
                    <Icon icon="material-symbols:home-outline" className='mr-3' width={25} />
                    <p>Dashboard</p>
                </div>
                <div className='flex items-center mb-3 hover:cursor-pointer hover:bg-gray-200 hover:font-semibold hover:rounded p-1 text-gray-700 hover:text-blue-600'>
                    <Icon icon="teenyicons:pie-chart-outline" className='mr-3' width={25} />
                    <p>Campaign</p>
                </div>
                <div className='flex items-center mb-3 hover:cursor-pointer hover:bg-gray-200 hover:font-semibold hover:rounded p-1 text-gray-700 hover:text-blue-600'>
                    <Icon icon="lucide:users" className='mr-3' width={25} />
                    <p>Contacts</p>
                </div>
                <div className='flex items-center mb-3 hover:cursor-pointer hover:bg-gray-200 hover:font-semibold hover:rounded p-1 text-gray-700 hover:text-blue-600'>
                    <Icon icon="fluent:data-trending-24-regular" className='mr-3' width={25} />
                    <p>Analytics</p>
                </div>
                <div className='flex items-center mb-3 hover:cursor-pointer hover:bg-gray-200 hover:font-semibold hover:rounded p-1 text-gray-700 hover:text-blue-600'>
                    <Icon icon="mdi:file-document-outline" className='mr-3' width={25} />
                    <p>Reports</p>
                </div>
                <div className='flex items-center mb-3 hover:cursor-pointer hover:bg-gray-200 hover:font-semibold hover:rounded p-1 text-gray-700 hover:text-blue-600'>
                    <Icon icon="la:money-bill-wave" className='mr-3' width={25} />
                    <p>Billing</p>
                </div>
                <div className='flex items-center mb-3 hover:cursor-pointer hover:bg-gray-200 hover:font-semibold hover:rounded p-1 text-gray-700 hover:text-blue-600'>
                    <Icon icon="material-symbols:edit-document-outline-rounded" className='mr-3' width={25} />
                    <p>Conversation</p>
                </div>
            </div>
            <div className='pr-4'>
                <p className='text-gray-500 py-7'>Support</p>
                <div className='flex items-center mb-3 hover:cursor-pointer hover:bg-gray-200 hover:font-semibold hover:rounded p-1 text-gray-700 hover:text-blue-600'>
                    <Icon icon="material-symbols:settings-outline-rounded" className='mr-3' width={25} />
                    <p>Settings</p>
                </div>
                <div className='flex items-center mb-3 hover:cursor-pointer hover:bg-gray-200 hover:font-semibold hover:rounded p-1 text-gray-700 hover:text-blue-600'>
                    <Icon icon="mdi:question-mark-circle-outline" className='mr-3' width={25} />
                    <p>Help Center</p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;