import { useContext } from "react";
import { AuthContext } from "../../providers/AuthanticationProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext);
    const localtion = useLocation();

        if (isLoading) {
            return <div className=" flex justify-center items-center h-full"><span className="loading loading-spinner loading-lg mt-44"></span></div>
        }

        if (user) {
            return children;
        }
    
    return <Navigate state={localtion.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;