import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const provider = new GoogleAuthProvider()
const RightSideNav = () => {
    const {signInWithGoogle} = useContext(AuthContext)
    const handleSignWithGoogle = () => {
        signInWithGoogle(provider)
        .then((result ) => {
            console.log(result.user);
        })
        .catch(err => {
            console.error(err)
        })  
    }
    return (
        <div className="space-y-5 p-2">
            <div className="space-y-5">
                <h2 className="text-2xl font-bold">Login With</h2>
                <button onClick={handleSignWithGoogle} className="btn btn-outline w-full hover:border-blue-300 hover:text-blue-500 hover:bg-blue-200">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full hover:border-blue-300 hover:text-blue-500 hover:bg-blue-200">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className="">
                <h2 className="text-2xl font-bold mb-5">Find Us On</h2>
                <div>
                    <a className="p-3 flex gap-4 items-center w-full border rounded-t-xl border-gray-200" href="/">
                    <FaFacebook className="text-blue-500"></FaFacebook> Facebook
                    </a>
                    <a className="p-3 flex gap-4 items-center w-full border border-gray-200" href="/">
                    <FaTwitter className="text-blue-500"></FaTwitter> Twitter
                    </a>
                    <a className="p-3 flex gap-4 items-center w-full border rounded-b-xl border-gray-200" href="/">
                    <FaInstagram className="text-blue-500"></FaInstagram> Instagram
                    </a>
                </div>
            </div>
            <div className="space-y-5 bg-[#F3F3F3] p-3 rounded-lg">
                <h2 className="text-2xl font-bold">Q Zone</h2>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;