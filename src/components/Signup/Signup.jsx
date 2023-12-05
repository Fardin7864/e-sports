import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthanticationProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        checkbox: false
    })
    const [ error, setError] = useState('');
    const{successToast, faildToast, networkFaildToast, creatUres} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // Form data input
    const handleFormData = (e) => { 
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        })
     }
    // form submit 
    const handleSubmit = (e) => { 
        setError('')
        e.preventDefault();
        if(formData.password.length < 6) {
            setError("Password must be 6 characters or more!")
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/.test(formData.password)) {
            setError("Password must need one uper case, one special character!")
            return;
        }else{
            // successToast();
            creatUres(formData.email, formData.password)
            .then(()=>{
                navigate(location?.state ? location.state : "/")
                successToast();
            })
            .catch(err => {
                if (err.message === "Firebase: Error (auth/email-already-in-use).") {
                    setError("This email already used!")
                    return
                }
                else if (err.message === "Firebase: Error (auth/network-request-failed).") {
                    networkFaildToast();
                }
                else{
                    faildToast();
                }
            })
        }
     }

    return (
        <div className="bg-gradient-to-b from-[#1c153f] to-[#1c153f] flex flex-col items-center pb-32">
            <div className=" md:mt-52 mt-32 border-none  p-5 text-white md:w-[500px] w-full rounded-xl px-9 py-11">
                <h3 className=" text-3xl font-bold text-white text-center pb-5">Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className=" flex flex-col gap-3 mt-3">
                        <label htmlFor="name" className="text-xl pl-3">Name</label>
                        <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleFormData}
                        required
                        className=" w-full text-xl py-2 bg-[#1c123f] border-2 border-gray-500 rounded-lg pl-4 [#be006b]"
                        />
                    </div>
                    <div className=" flex flex-col gap-3 mt-3">
                        <label htmlFor="email" className="text-xl pl-3">Email</label>
                        <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleFormData}
                        required
                        className=" w-full text-xl py-2 bg-[#1c123f] border-2 border-gray-500 rounded-lg pl-4 [#be006b]"
                        />
                    </div>
                    <div className=" flex flex-col gap-3 mt-3">
                        <label htmlFor="password" className="text-xl pl-3">Password</label>
                        <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleFormData}
                        required
                        className=" w-full text-xl py-2 bg-[#1c123f] border-2 border-gray-500 rounded-lg pl-4 [#be006b]"
                        />
                    </div>
                    <div className=" flex items-center gap-3 mt-3 px-3">
                        <input 
                        type="checkbox"
                        name="checkbox"
                        checked={formData.checkbox}
                        onChange={handleFormData}
                        required
                        className=""
                        />
                    <label htmlFor="checkbox" className="md:text-xl text-lg pl-3">Accept our Tarms & Conditions.</label>
                    </div>
                    {
                        error && <p className=" text-sm text-red-700">{error}</p>
                    }
                    <div>
                        <button type="submit" className="text-lg text-white font-bold bg-gradient-to-r from-[#be006b] to-[#e33b54] via-[#e33b44] py-3 px-3 rounded-lg w-full mt-4">Submit</button>
                    </div>
                    <div className=" mt-3 flex items-center justify-center">
                        <p className="text-sm text-white font-medium">Already have account? <Link to="/login" className="text-[#be006b]">Log In</Link></p>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;