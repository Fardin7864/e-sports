import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
    const services = useLoaderData();
    return (
        <div className=" bg-gradient-to-b from-[#1c153f] to-[#1c153f] overflow-hidden py-28">
           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 px-16 gap-y-10">
           {
                services.map(service => 
                    <Service
                    key={service}
                    service={service}
                    ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;