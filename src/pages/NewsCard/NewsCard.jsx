import { CiBookmark } from "react-icons/ci";
import { MdOutlineShare } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const { author, title, image_url, details, rating, total_view, _id } = news
    return (
        <div className="my-10 space-y-5">
            <div className="flex justify-between">
                <div className="flex gap-2.5 items-center">
                    <div>
                        <img className="h-[40px] rounded-full" src={author.img} alt="" />
                    </div>
                    <div>
                        <p className="text-[#403F3F]">{author.name}</p>
                        <p className="text-[#706F6F] text-xs">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2.5">
                    <p className="text-[#706F6F]"><CiBookmark /></p>
                    <p className="text-[#706F6F]"><MdOutlineShare /></p>
                </div>
            </div>
            <div className="space-y-5">
                <h2 className="text-[#403F3F] text-xl font-bold">{title}</h2>
                <div className="flex justify-center items-center">
                    <img src={image_url} alt="" />
                </div>
                <div>
                    <p className="text-[#706F6F]">{details.slice(0, 200)} </p>
                    <Link to={`/news/${_id}`} className="text-[#F75B5F] font-semibold">Read More...</Link>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2.5">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />

                        </div>
                        <p className="text-[#706F6F]">{rating.number}</p>
                    </div>
                    <div className="flex gap-2.5 items-center">
                        <p><FaRegEye /></p>
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;