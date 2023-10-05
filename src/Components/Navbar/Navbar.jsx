import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = ({ logo }) => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("user Logout Succesfully!")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/destination">Destination</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </>
    return (
        <div className="navbar justify-around w-full mx-auto items-center" >
            <div >
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns={logo} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src={logo} />
            </div>
            <div className="flex gap-20">
                <div className=" lg:flex gap-5">
                    <input type="text" placeholder="Search your destination..." className="input rounded-sm focus:outline-none text-black input-bordered input-sm w-80" />
                    <ul className="flex gap-5 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    {
                        user ?
                            <div className="flex items-center gap-5">
                                <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu space-y-3 menu-sm w-[205px] right-0 dropdown-content bg-base-100 rounded-box">
                                        <li><span>{user?.email}</span></li>
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                            </a>
                                        </li>
                                        <li><Link onClick={handleLogOut} className="btn btn-sm w-full bg-yellow-500 border-none">LogOut</Link></li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <Link to="/login" className="btn btn-sm bg-yellow-500 border-none">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;