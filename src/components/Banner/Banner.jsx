import { useEffect, useRef } from "react";
import intro from "../../assets/home-intro-video.mp4"
import gamer from "../../assets/gamer.png"
import bannerEnd from "../../assets/endbanner.svg"
import { Link } from "react-router-dom";

const Banner = () => {
    const videoRef = useRef();
    useEffect(() => { 
        if (videoRef.current) {
            videoRef.current.play()           
        }
     },[])

  
    return (
        <div>
            <div className="relative">
                <div className="absolute z-10 inset-0 bg-gradient-to-b from-[#17094b] via-[#11094BBF] via-[#2E0A4F99] to-[#C50B67]"></div>
                <video ref={videoRef} loop muted className="w-full h-full">
                    <source src={intro} type="video/mp4" />
                </video>
            </div>
            <div className="absolute lg:top-60 top-20 lg:pl-36 pl-4 z-20 flex gap-20">
            <div className="w-1/2 md:mt-6 lg:mt-0">
                <h3 className="lg:text-7xl md:text-5xl text-2xl font-extrabold leading-7 lg:leading-[4.5rem] text-white"><span className="bg-gradient-to-t from-[#be006b] to-[#e33b54] text-transparent  bg-clip-text">E</span>sports <br /><span className="bg-gradient-to-t from-[#be006b] to-[#e33b54] text-transparent  bg-clip-text">Event</span>  <br />Management</h3>
                <p className="text-white hidden lg:block text-sm md:text-2xl font-medium md:py-5 leading-4 md:leading-8">We help brands and gamer's through esports and video games events management.</p>
                <Link to="/team" className=" hover:shadow-xl bg-gradient-to-t from-[#be006b] to-[#e33b54] px-3 md:px-8 py-3 md:py-4 rounded-full text-white text-xs md:text-xl font-bold mt-3 md:mt-4">Get a free strategy</Link>
            </div>
            <div className="w-1/2 z-30">
                <img src={gamer} alt="" className="z-30"/>
            </div>
            </div>
            <div className="absolute w-full lg:top-[570px] top-48 md:top-[337px] md:h-24 h-12 z-10 lg:h-72">
                <img src={bannerEnd} alt="" className="w-full h-full"/>
            </div>
        </div>
    );
};

export default Banner;