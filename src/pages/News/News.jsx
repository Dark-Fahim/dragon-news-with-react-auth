import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import news1 from '../../assets/1.png'
import news2 from '../../assets/2.png'
import news3 from '../../assets/3.png'
import { CiCalendar } from "react-icons/ci";


const News = () => {
    const { id } = useParams()
    const allNews = useLoaderData()
    const news = allNews.find(news => news._id === id)
    const { title, image_url, details } = news


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid p-4 grid-cols-1 md:grid-cols-4 mt-5 container mx-auto gap-10" >
                <div className="col-span-3 space-y-5">
                    <img src={image_url} alt="" />
                    <h2 className="text-[#403F3F] text-xl font-bold">{title}</h2>
                    <p className="text-[#706F6F]">{details} </p>
                    <Link to={'/'} className="btn bg-[#D72050] text-white"><FaArrowLeft /> All News in this Category</Link>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                        <div className='space-y-2'>
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
                        <div className='space-y-2'>
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
                        <div className='space-y-2'>
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
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;