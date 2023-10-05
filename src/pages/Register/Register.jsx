import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../Components/Navbar/Navbar";
import logo from "../../assets/blackLogo.svg"
import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs';
import { BiLogoGoogle } from 'react-icons/bi';

const Register = () => {
    const { createUser,googleLogin,facebookLogin} = useContext(AuthContext)
    const handleUser = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const fName = form.get("fName");
        const LName = form.get("LName");
        const email = form.get("email");
        const password = form.get("password")
        const confirmPass = form.get("ConfirmPassword")
        if(password !== confirmPass){
            return alert("password not match!")
        }
        if (password.length < 6) {
            return alert("Password must be 6 character")
        }
        createUser(email, password)
            .then(result => {
                alert("register succesfully!")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then((result) => {
            console.log(result.user)
            alert("Login Succesfully")
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    const handleFacebookLogin = () => {
        facebookLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
            <Navbar logo={logo}></Navbar>
            {/* login form */}
            <div className=" ">
                <form onSubmit={handleUser} className=" mt-10 mx-auto w-1/4 p-5 border border-gray-400">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" name="fName" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" name="LName" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <input type="password" placeholder="Confirm password" name="ConfirmPassword" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        <p className="mt-3">Already have an account? please <Link className="text-blue-500" to="/login">Login</Link></p>
                    </div>
                </form>
                <div className="flex gap-2 justify-center items-center mt-5 mb-5">
                    <div className="w-36 h-[1px] bg-gray-400"></div>
                    <p>Or</p>
                    <div className="w-36 h-[1px] bg-gray-400"></div>
                </div>
                {/* social login */}
                <div className=" w-1/4 mx-auto space-y-3 mb-10">
                    <button onClick={handleFacebookLogin} className="btn btn-outline w-full">
                        <BsFacebook className="text-2xl"></BsFacebook>
                        Button
                    </button>
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
                        <BiLogoGoogle className="text-2xl"></BiLogoGoogle>
                        Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;