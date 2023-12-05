import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToLocalStorage } from "../../components/LocalStorageManagment/localStorage";


const Details = () => {
    const [service, setService] = useState() || {};
    const [readMore, setReadMore] = useState(false);
    const id = useParams()
    useEffect(() => { 
        setReadMore(false);
        const fetchData = async () => { 
            await fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setService(data.find(event => event.id === id.id))
            })
         }
         fetchData();
     },[])

    const handlereadMore = () => { 
        setReadMore(true)
     }

     const handleAddCart = (id) => {
        addToLocalStorage(id);
  }

    
    const description = !readMore ? service?.details?.slice(0,1000) : service?.details
    
    return (
        <div className="bg-gradient-to-b from-[#1c153f] to-[#1c153f] flex flex-col items-center pb-32"> 
            <div className="w-3/4 pt-32">
                <img src={service?.img} alt="" className="rounded-lg w-full lg:h-[761.5px] h-[200px] md:h-[400px]"/>
            <div className="hero-overlay bg-opacity-60 absolute lg:top-[778px] md:top-[416px] top-[248px] md:h-28 h-20 rounded-b-lg w-3/4"></div>
            <div className=" relative md:-top-20 -top-16 left-5 md:left-16">
                <button onClick={() => handleAddCart(id.id)} className=" text-lg text-white font-bold bg-gradient-to-r from-[#be006b] to-[#e33b54] via-[#e33b44] py-3 px-3 rounded-lg">Booking Now</button>
            </div>
             </div> 
             <div className="w-3/4 flex flex-col md:items-center md:pt-10 ">
                <h3 className=" text-white text-3xl lg:text-7xl font-bold mb-5">{service?.title}</h3>
                <p className=" text-white md:text-xl text-sm leading-10">{description}{!readMore && <button onClick={handlereadMore} className=" text-p ml-3">Read More</button>} </p>
            </div>          
        </div>
    );
};

export default Details;