import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
    const services = useLoaderData();
    return (
        <div className=" bg-gradient-to-b from-[#1c153f] to-[#1c153f] overflow-hidden py-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 md:px-16 gap-y-10 px-5">
           {
                services.map(service => 
                    <Service
                    key={service}
                    service={service}
                    ></Service>)
            }
        </div>
    );
};

export default Services;