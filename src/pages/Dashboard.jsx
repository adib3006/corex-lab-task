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
            <div className='flex w-full pl-10'>
                <div className='w-1/6'>
                    <SideBar />
                </div>
                <div className='w-5/6 bg-[#F2F7FA] p-5 flex gap-5'>
                    <div className='w-1/4 bg-white rounded-[5px] p-3'>
                        <ContactInfo />
                    </div>
                    <div className='w-1/2'>
                        <Menu />
                        <Filters />
                        <p className='mt-6'>Upcoming Campaigns</p>
                        <Campaign info={'High'} />
                        <Campaign info={'Moderate'} />
                        <Campaign info={'High'} />
                    </div>
                    <div className='w-1/4 bg-white px-6 py-7 rounded'>
                        <Company />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;