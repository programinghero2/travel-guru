import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../Components/Navbar/Navbar";
import logo from "../../assets/blackLogo.svg"
import { Link } from "react-router-dom";
const Login = () => {
    const { loginUser, forgetPassword,user,emailUpdate } = useContext(AuthContext)
    const emailRef = useRef()
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password")
        e.currentTarget.reset()
        loginUser(email, password)
            .then(() => {
                user?.email ? alert("Already Login") : alert("Login Successfully")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handlPassReset = () => {
        forgetPassword(emailRef.current.value)
            .then(result => {
                alert("please check your email")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleEmailUpdate = () => {
        emailUpdate(emailRef.current.value)
        .then()
        .catch()
    }
    return (
        <div>
            <Navbar logo={logo}></Navbar>
            {/* login form */}
            <div className="h-[80vh] mt-16">
                <form onSubmit={handleLogin} className="card-body mx-auto w-1/4 p-5 border border-gray-400">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <Link onClick={handlPassReset} className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        <p><Link onClick={handleEmailUpdate}>Update Email</Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <p className="mt-3">Don't have an account? <Link className="text-blue-600" to="/register">create an account</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;