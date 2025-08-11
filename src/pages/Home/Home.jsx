import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews/BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl poppins">this is home</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <h2 className="text-4xl">left</h2>
                </div>
                <div className="col-span-2">
                    <h2 className="text-4xl">News Coming Soon</h2>
                </div>
                <div>
                    <h2 className="text-4xl">Right</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;