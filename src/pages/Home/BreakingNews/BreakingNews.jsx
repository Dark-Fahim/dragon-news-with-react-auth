
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="p-4 bg-[#f3f3f3] rounded-lg flex my-8">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee className="text-black" pauseOnHover={true} speed={150}>
                <Link className="mr-4 "  to={'/'}>Match Highlights: Germany vs Spain — as it happened   !...</Link>
                <Link className="mr-4 " to={'/'}>Match Highlights: Germany vs Spain — as it happened   !...</Link>
                <Link className="mr-4 " to={'/'}>Match Highlights: Germany vs Spain — as it happened   !...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;