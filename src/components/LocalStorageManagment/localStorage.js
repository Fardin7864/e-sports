import { toast } from "react-toastify";

const addToLocalStorage= id =>{
    const events = getFromLocalStorage()
    const exist = events.find(eventId => eventId === id);
    if (!exist) {
        success();
        events.push(id);
        setToLocalStorage(JSON.stringify(events)); 
    }else if(exist){
        duplicat();
    }

}

const getFromLocalStorage = () =>{
    const events = localStorage.getItem('anubis_event');
    return JSON.parse(events) || [];
}
const setToLocalStorage = (events) =>{
    localStorage.setItem('anubis_event',events);
}

const removeFromLocalStorage = (id) =>{
    const events = getFromLocalStorage();
    const removeEvent = events.filter(event=> event !== id);
    localStorage.setItem('anubis_event',JSON.stringify(removeEvent));

}

const success = () =>{
    toast(' Successfully add to order list!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
   const duplicat = () =>{
    toast('Already added this event!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
  

export {addToLocalStorage,getFromLocalStorage,setToLocalStorage,removeFromLocalStorage};