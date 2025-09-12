import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(form.get('checkbox'));
        
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-white max-w-[500px] mx-auto shadow-2xl mt-24 p-8 rounded-lg">
                <h2 className="text-center text-[#403F3F] text-3xl font-semibold mb-4">Register Your Account</h2>
                <form onSubmit={handleRegister} className="flex justify-center ">
                    <fieldset className="fieldset space-y-5 bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <div className="space-y-2.5">
                            <label className="label text-[#403F3F] text-xl font-semibold">Your Name</label>
                            <input type="text" className="input" placeholder="Enter your Name" name="name" />
                        </div>
                        <div className="space-y-2.5">
                            <label className="label text-[#403F3F] text-xl font-semibold">Photo URL</label>
                            <input type="text" className="input" placeholder="your photo url" name="photo" optional />
                        </div>

                        <div className="space-y-2.5">
                            <label className="label text-[#403F3F] text-xl font-semibold">Email address</label>
                            <input type="email" className="input" placeholder="Enter your email address" name="email" />
                        </div>

                        <div className="space-y-2.5">
                            <label className="label text-[#403F3F] text-xl font-semibold">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />
                        </div>
                        
                        <label className="label">
                            <input type="checkbox" className="checkbox" name="checkbox"/>
                            Accept Term & Conditions
                        </label>

                        <button className="btn btn-neutral mt-4">Register</button>


                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;