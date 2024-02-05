import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useState } from 'react';
import aboutUp from "../../assets/about_upper_paint_splatter.svg"
import aboutDown from "../../assets/about_lower_paint_splatter.svg"
import gamer from "../../assets/pubg.png"
// ..
AOS.init();

const Hero = () => {
    const [isShowa, setIsShowa] = useState(false);
    const [isShowb, setIsShowb] = useState(false);
    const [isShowc, setIsShowc] = useState(false); 
  const gradientStyle = {
    background:
      "radial-gradient(50% 50% at 50% 50%, rgba(108, 16, 82, 0.6) 0%, rgba(108, 16, 82, 0) 100%)",
  };
  const aboutGradientStyle = {
    background: "radial-gradient(50% 50% at 100% 50%,#6c1052 0,rgba(108,16,82,0) 100%)"
  }

  return (
    <div className="bg-gradient-to-b from-[#1c153f] to-[#1c153f] h-[1700px] overflow-hidden">
      <div className=" flex justify-center">
        <div
          style={gradientStyle}
          className="absolute w-11/12 lg:h-[900px] h-[600px]"
        ></div>
        <div
          style={gradientStyle}
          className="absolute w-11/12 lg:h-[900px] h-[600px]"
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center mt-28 gap-3">
        <h3 className="md:text-5xl text-3xl text-white font-medium text-center">
          Your trusted Esports <br className='lg:hidden'/> and Tech
        </h3>
        <h1 className="font-extrabold z-20">
          <span className="text-white lg:text-5xl text-3xl ">industry experts</span>
        </h1>
        <span className=" relative bottom-[17px]  border-4 border-[#be006b] md:w-[418px] w-[259px] "></span>
      </div>
      {/* Accourdion */}
        <div className=" flex justify-center mt-9">
        <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-9 gap-8">
            <div onMouseOver={() => setIsShowa(true)} onMouseOut={() => { setIsShowa(false) }}  data-aos="zoom-in" className='z-20 text-center'>
                {
                    !isShowa && <div><h3 className=" mb-6"><span className="text-6xl font-extrabold text-[#be006b]">3.24</span><sub className='text-xl text-white ml-4'>bln</sub></h3>
                <p className="text-3xl font-bold text-white z-30"><span>Event Daily</span></p></div>
                }               
                {
                    isShowa ? (<div className='text-left space-y-3'>
                    <p className="text-3xl font-bold text-white z-30"> 1.75 bln <span className='text-p'>Pc</span></p>
                    <p className="text-3xl font-bold text-white z-30"> 1.29 bln <span className='text-p'>Mobile</span></p>
                    <p className="text-3xl font-bold text-white z-30"> 0.29 bln <span className='text-p'>Consoles</span></p></div>)
                    : ""
                }
            </div>
            <div onMouseOver={() => setIsShowb(true)} onMouseOut={() => { setIsShowb(false) }}  data-aos="zoom-in" className='z-20 text-center'>
                {
                    !isShowb && <div><h3 className="mb-6"><span className="text-6xl font-extrabold text-[#be006b]">18.22</span><sub className='text-xl text-white ml-4'>mln</sub></h3>
                <p className="text-3xl font-bold text-white z-30"><span>Daily stream viewers</span></p></div>
                }               
                {
                    isShowb ? (<div className='text-left space-y-3'>
                    <p className="text-3xl font-bold text-white z-30">15 mln<span className='text-p'>Twitch</span></p>
                    <p className="text-3xl font-bold text-white z-30"> 2.84 mln <span className='text-p'>YouTube</span></p>
                    <p className="text-3xl font-bold text-white z-30"> 0.38 mln <span className='text-p'>Facebook</span></p></div>)
                    : ""
                }
            </div>
            <div onMouseOver={() => setIsShowc(true)} onMouseOut={() => { setIsShowc(false) }}  data-aos="zoom-in" className='z-20 text-center'>
                {
                    !isShowc && <div><h3 className="mb-6"><span className="text-6xl font-extrabold text-[#be006b]">1.48</span><sub className='text-xl text-white ml-4'>bln</sub></h3>
                <p className="text-3xl font-bold text-white z-30"><span>Global esports market</span></p></div>
                }               
                {
                    isShowc ? (<div className='text-left space-y-3'>
                    <p className="text-3xl font-bold text-white z-30"> $7.13 bln <span className='text-p'>2028</span></p>
                    <p className="text-3xl font-bold text-white z-30"> $4.41 bln <span className='text-p'>2026</span></p>
                    <p className="text-3xl font-bold text-white z-30"> $2.8 bln <span className='text-p'>2024</span></p></div>)
                    : ""
                }
            </div>

        </div>
        </div>
        {/* about scratch */}
        <div className="absolute w-full lg:top-[1270px] top-[836px] md:top-[1036px] md:h-72 h-64 z-10 lg:h-[500px]">
                <img src={aboutUp} alt="" className="w-full h-full"/>
        </div>
        <div className="absolute w-full lg:top-[1770px] top-[1092px] md:top-[1324px] md:h-72 h-64 z-10 lg:h-[500px]">
                <img src={aboutDown} alt="" className="w-full h-full"/>
        </div>
        {/* Gradiant on about section */}
        <div className='w-full flex justify-end items-end'>
        <div
          style={aboutGradientStyle}
          className="absolute w-11/12 lg:top-[1770px] top-[1192px] md:top-[1324px] lg:h-[900px] h-[400px]"
        ></div>
        </div>
        {/* About text */}

          <div className=' z-40 absolute hidden md:flex justify-start items-start lg:top-[1800px] top-[1092px] md:top-[1324px] lg:-left-30 md:-left-20 -left-14'>
            <h3 className=' transform -rotate-90 lg:text-9xl md:text-7xl text-6xl font-extrabold text-p'><span className='bg-gradient-to-t from-[#be006b] to-[#e33b54] text-transparent  bg-clip-text'>ABOUT</span></h3>
          </div>

        {/* About  */}
        <div className='z-40 absolute flex flex-col md:flex-row justify-start items-start lg:top-[1700px] top-[992px] md:top-[1274px] lg:left-52 md:left-28 left-3'>
          <div className=' lg:hidden border-2 rounded-lg border-[#be006b]'>
          <iframe  src="https://www.youtube.com/embed/LsiaQim9AiY?si=o86NvGLW7vIueZ18" title="" frameBorder="0" allow="" className='rounded-lg'></iframe>
          </div>
          <div className=' ml-2 hidden lg:block border-2 rounded-lg border-[#be006b]'>
          <iframe width="600px" height="340px" src="https://www.youtube.com/embed/LsiaQim9AiY?si=o86NvGLW7vIueZ18" title="" frameBorder="0" allow="" className='rounded-lg'></iframe>
          </div>
          <div className='md:px-7 px-3'>
                <h4 className=' text-xl lg:text-3xl text-white font-medium lg:px-4 text-justify'>Anubis is a fastest growing global esports and tech event management agency</h4>
                <p className='text-lg md:text-xs hidden md:block text-gray-300 font-medium px-4 mt-4 text-justify'>Industry leaders in the project management of esports. If you are a company looking for an esports marketing agency, <span className=' hidden lg:block'>with experience with the latest video games, our team is here to help: we’ve produced global esports tournaments across every continent, for 100 clients - from leading consumer brands, to the world’s biggest video game developers,</span> to global and local sporting organizations. Whichever industry you are in: we have proven experience to successfully introduce your business and services to gaming audiences.</p>
          </div>
        </div>
        <div className='z-40 absolute flex justify-start items-start lg:top-[2000px]  md:w-[500px] top-[1292px] md:top-[1490px] lg:left-[910px] md:left-[266px]'>
          <div>
            <img src={gamer} alt="" />
          </div>
        </div>
       
       {/* outServicer */}
       <div className=' z-30 absolute flex justify-start items-start lg:top-[2400px] top-[1692px] md:top-[2024px] lg:left-48 md:left-20 left-14 border-b-4 border-[#be006b]'>
            <h3 className=' transform text-center  lg:text-9xl md:text-7xl text-4xl font-extrabold text-white '> Our <br className='md:hidden'/> <span className='bg-gradient-to-r from-[#be006b] to-[#e33b54] text-transparent  bg-clip-text'>Services</span>
            </h3>
          </div>
    </div>
  );
};

export default Hero;
