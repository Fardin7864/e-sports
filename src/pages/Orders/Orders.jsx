import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../components/LocalStorageManagment/localStorage";
import Order from "../../components/Order/Order";

const Orders = () => {
    const [orders, setOrders] = useState();
    const [isShowAll, setIsShowAll] = useState(false);
    const [render, setRender] = useState(false);
    
    useEffect(() => { 
        const data = async() =>{
            await fetch('/services.json')
            .then(res => res.json())
            .then(eventsData => {
                const savedEventsId = getFromLocalStorage();
                setOrders(eventsData.filter(event => savedEventsId?.includes(event.id)))
            })
            }
            data();
     },[render])

     const handleRender = () => { 
        setRender(!render)
      }
        let totalPrice = 0;
        let totalEvent = 0;
        {
            orders?.forEach(event => {
                totalPrice += event.price;
                totalEvent ++;
            })
        }

     const handleShowAll = () => { 
        setIsShowAll(!isShowAll)
      }

     

      const displayOrder = !isShowAll ? orders?.slice(0,2) :  orders || []

    return (
        <div className=" bg-gradient-to-b from-[#1c153f] to-[#1c153f] overflow-hidden py-32 flex flex-col items-center">
          <div className=" flex lg:flex-row flex-col-reverse gap-4 lg:px-10 items-center lg:items-start mb-4">
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 md:px-16 px-8 gap-y-10 ">
           {
                displayOrder?.map(event => 
                <Order
                key={event.id}
                event={event}
                handleRender={handleRender}
                ></Order>)
            }
           </div>
           <div className=" text-white lg:w-[500px] mb-5">
            <h3 className=" text-2xl font-bold">Order Summary</h3>
            <p className=" text-xl py-7">Total Event: <span className="text-p">{totalEvent} </span>events</p>
            <p className=" text-xl">Total Price: $<span className=" text-p">{totalPrice}</span> </p>
           </div>
          </div>
          { orders?.length > 2 ?
           ( !isShowAll ?
             <button onClick={handleShowAll} className="text-lg text-white font-bold bg-gradient-to-r from-[#be006b] to-[#e33b54] via-[#e33b44] py-3 px-3 rounded-lg w-[200px] mt-4">Show All</button>
             :
             <button onClick={handleShowAll} className="text-lg text-white font-bold bg-gradient-to-r from-[#be006b] to-[#e33b54] via-[#e33b44] py-3 px-3 rounded-lg  w-[200px] mt-4">Show Less</button>)
             : ""
          }
        </div>
    );
};

export default Orders;