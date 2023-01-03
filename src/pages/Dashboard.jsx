import React from 'react';
import SideBar from './../components/SideBar';
import Navbar from './../components/Navbar';
import ContactInfo from '../components/ContactInfo';
import Menu from '../components/Menu';
import Filters from '../components/Filters';
import Campaign from '../components/Campaign';
import Company from '../components/Company';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='flex w-full'>
                <div className='w-1/6'>
                    <SideBar />
                </div>
                <div className='w-5/6 bg-[#F2F7FA] p-5 flex gap-4'>
                    <div className='w-[283px] bg-white rounded-[5px] px-[23px]'>
                        <ContactInfo />
                    </div>
                    <div className='w-[537px]'>
                        <Menu />
                        <Filters />
                        <p className='mt-[23px] mb-[14px] text-[#2B2B2B] font-[500] text-[12px]'>Upcoming Campaigns</p>
                        <Campaign info={'High'} />
                        <Campaign info={'Moderate'} />
                        <Campaign info={'High'} />
                    </div>
                    <div className='w-[281px] bg-white px-[24px] py-[29px] rounded'>
                        <Company />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;