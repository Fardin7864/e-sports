import { useContext } from "react";
import { AuthContext } from "../../providers/AuthanticationProvider";
import {FcGoogle} from "react-icons/fc"
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const{socilaLogin, google, successToast, faildToast} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const handlePopup = (provider) => { 
        socilaLogin(provider)
        .then(() => { 
            navigate(location?.state ? location.state : "/")
            successToast() })
        .catch(() => {
            faildToast()})
     }
    return (
        <div className=" mt-4">
            <button onClick={() => handlePopup(google)}  className="btn btn-primary w-full bg-gradient-to-r from-[#be006b] to-blue-700 text-transparent  bg-clip-text flex items-center"> <FcGoogle className=" text-xl"></FcGoogle>With Google</button>

        </div>
    );
};

export default SocialLogin;