import Navbar from "../../Components/Navbar/Navbar";
import sajek from "../../assets/Sajek.png"
import srimongle from "../../assets/Sreemongol.png"
import sondorbon from "../../assets/sundorbon.png"
import seaBeach from "../../assets/banner.png"
import logo from "../../assets/logo.svg"

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen place-items-start" style={{ backgroundImage: `url(${seaBeach})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="  w-full text-neutral-content">
                    <div className="">
                        <Navbar logo={logo}></Navbar>
                        <div className="flex justify-center items-center h-[80vh]">
                            <div className="w-4/5 flex mx-auto">
                                <div className="">
                                    <h1 className="text-6xl font-bold">COX'S BAZAR</h1>
                                    <p className="text-base mt-3 mb-3">Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                                    <button className="btn btn-sm normal-case bg-yellow-500 border-none">Booking</button>
                                </div>
                                <div className="flex gap-5 justify-end">
                                    <img className="w-1/4" src={sajek} alt="" />
                                    <img className="w-1/4" src={srimongle} alt="" />
                                    <img className="w-1/4" src={sondorbon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;