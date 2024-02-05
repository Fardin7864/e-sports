import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthanticationProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);
  const handleSignOut = () => { 
    logOut();
   }
   const name = user?.displayName === null && (user?.email?.split("@")[0].toUpperCase() || '') || user?.displayName;

  const naveLinks = (
    <>
      <li className="font-normal text-base px-4 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-normal text-base px-4 ">
        <NavLink to="/order">Orders</NavLink>
      </li>
      <li className="font-normal text-base px-4 ">
        <NavLink to="/team">Team</NavLink>
      </li>
      <li className="font-normal text-base px-4 ">
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );



// const profilePic = user?.photoURL || ''
  return (
    <div className="navbar bg-transparent absolute text-white z-50 lg:px-36 pt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu bg-transparent menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {naveLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-5xl font-extrabold ">
          <span className="bg-gradient-to-r from-[#be006b] to-[#e33b54] text-transparent  bg-clip-text">
            A
          </span>
          NUBIS
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{naveLinks}</ul>
      </div>
      {
        user && <div className="navbar-end flex items-center gap-4">
          <img src={user?.photoURL ? user.photoURL : "https://i.ibb.co/5sBC2Hv/avatar-1295429-640.png"} alt=""  className=" w-7 h-7 rounded-full hidden md:block"/>
        <p className=" text-lg font-bold text-white hidden md:block">{name}</p>
        <button onClick={handleSignOut}  className="btn">Sign Out</button>
      </div> || <div className="md:navbar-end hidden md:flex">
        <Link to="/login" className="btn">Log In</Link>
        </div>
      }
      
    </div>
  );
};

export default Navbar;
