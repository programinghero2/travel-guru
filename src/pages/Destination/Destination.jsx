import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import seabeach from "../../assets/banner.png"
import logo from "../../assets/logo.svg"
const Destination = () => {
    const navigate = useNavigate()
    const handleBooking = () => {
       navigate("/bookingDetails")
    }
    return (
        <div>
            <div className="hero min-h-screen place-items-start" style={{ backgroundImage: `url(${seabeach})`, backgroundSize: "cover" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" w-full text-neutral-content">
                    <div>
                        <Navbar logo={logo}></Navbar>
                        <div className="flex justify-center items-center h-[80vh]">
                            <div className="w-11/12 flex items-center mx-auto">
                                <div className="w-1/2 flex flex-col justify-center">
                                    <h1 className="text-6xl text-left font-bold">COX'S BAZAR</h1>
                                    <p className="text-base mt-3 mb-3">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                                    <button className="btn w-1/5 btn-sm normal-case bg-yellow-500 border-none">Booking</button>
                                </div>
                                <div className="flex gap-5 w-1/2 justify-end">
                                    <div className="bg-base-100 text-black w-3/5 space-y-2 h-[380px] p-5">
                                        <div>
                                            <label className="block text-[#818181]" htmlFor="cars">Origin:</label>
                                            <select className="border py-3 w-full border-gray-400" id="cars" name="carlist" form="carform">
                                                <option value="volvo">Dhaka</option>
                                                <option value="saab">Shylte</option>
                                                <option value="opel">Chattagram</option>
                                                <option value="audi">Barisal</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[#818181]" htmlFor="destination">Destination:</label>
                                            <select className="border w-full py-3 border-gray-400" id="destination" name="carlist" form="carform">
                                                <option value="volvo">Cox's Bazar</option>
                                                <option value="saab">Sundorban</option>
                                                <option value="opel">Srimangol</option>
                                                <option value="audi">badorbon</option>
                                            </select>
                                        </div>
                                        <div className="flex gap-5">
                                            <div>
                                                <label className="block text-[#818181]" htmlFor="from">From:</label>
                                                <input className="py-2" type="date" id="from" name="birthday" />
                                            </div>
                                            <div>
                                                <label className="block text-[#818181]" htmlFor="to">To:</label>
                                                <input className="py-2" type="date" id="to" name="birthday" />
                                            </div>
                                        </div>
                                        <button onClick={handleBooking} className="btn w-full bg-yellow-500 hover:bg-yellow-600 normal-case">Start Booking</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;