import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'));
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-white max-w-[500px] mx-auto shadow-2xl mt-24 p-8 rounded-lg">
                <h2 className="text-center text-[#403F3F] text-3xl font-semibold mb-4">Login Your Account</h2>
                <form onSubmit={handleLogin} className="flex justify-center ">
                    <fieldset className="fieldset space-y-5 bg-base-200 border-base-300 rounded-box w-xs border p-4">

                        <div className="space-y-2.5">
                            <label className="label text-[#403F3F] text-xl font-semibold">Email address</label>
                            <input type="email" className="input" placeholder="Enter your email address" name="email" />
                        </div>

                        <div className="space-y-2.5">
                            <label className="label text-[#403F3F] text-xl font-semibold">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />
                        </div>

                        <button className="btn btn-neutral mt-4">Login</button>

                        <p className="font-semibold ">Dont’t Have An Account ? <Link to={'/register'} className="text-[#F75B5F]">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;