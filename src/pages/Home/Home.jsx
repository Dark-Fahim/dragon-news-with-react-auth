import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <div>
                    <LeftSide></LeftSide>
                </div>
                <div className="col-span-2">
                    <h2 className="text-4xl">News Coming Soon</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;