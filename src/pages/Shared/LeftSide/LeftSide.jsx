import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import news1 from '../../../assets/1.png'
import news2 from '../../../assets/2.png'
import news3 from '../../../assets/3.png'
import { CiCalendar } from "react-icons/ci";

const LeftSide = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className='space-y-3 lg:block flex flex-col items-center'>
            <h2 className="text-2xl">All Categories</h2>
            <ul className='space-y-5 mt-5'>
                {
                    categories.map(category => (
                    <li key={category.id} className='hover:bg-[#E7E7E7] py-2 px-2 rounded-lg cursor-pointer'><Link to={`/category/${category.id}`}>{category.name}</Link></li>
                    ))
                }
            </ul>
            <div className='space-y-2 flex flex-col items-center p-4'>
                <img src={news1} alt="" />
                <h2 className='text-lg font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex justify-between'>
                    <p className='text-[#403F3F]'>Sports</p>
                    <div className='flex items-center gap-2 text-[#9F9F9F]'>
                        <CiCalendar></CiCalendar>
                        Jan 4, 2022
                    </div>
                </div>
            </div>
            <div className='space-y-2 flex flex-col items-center p-4'>
                <img src={news2} alt="" />
                <h2 className='text-lg font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex justify-between'>
                    <p className='text-[#403F3F]'>Sports</p>
                    <div className='flex items-center gap-2 text-[#9F9F9F]'>
                        <CiCalendar></CiCalendar>
                        Jan 4, 2022
                    </div>
                </div>
            </div>
            <div className='space-y-2 flex flex-col items-center p-4'>
                <img src={news3} alt="" />
                <h2 className='text-lg font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex justify-between'>
                    <p className='text-[#403F3F]'>Sports</p>
                    <div className='flex items-center gap-2 text-[#9F9F9F]'>
                        <CiCalendar></CiCalendar>
                        Jan 4, 2022
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;