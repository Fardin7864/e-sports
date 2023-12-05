import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, img, description, price , rating, total_reviews, id} = service;

  return (
    <div className="card bg-transparent shadow-xl text-white h-full flex flex-col justify-between">
      <figure className="">
        <img
          src={img}
          alt="Shoes"
          className="w-full lg:h-64 md:h-96 h-52"
        />
      </figure>
        <div className=" md:px-6 mt-3">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-400 my-3">{description}</p>
          <div className=" flex justify-between ">
          <p className=" flex items-center justify-center gap-3">
          <Rating
            initialRating={rating}
            fullSymbol={<AiFillStar className=" text-yellow-400 text-xl"></AiFillStar>}
            emptySymbol={<AiOutlineStar className=" text-yellow-400 text-xl"></AiOutlineStar>}
          />{rating}<span className="text-gray-300">({total_reviews})</span>
          </p>
          <p>
           Price: $ <span className=" text-gray-500">{price}</span>
          </p>
        </div>      
      </div>
        <div className=" mt-5">
            <Link to={`/details/${id}`} className="btn btn-primary w-full bg-gradient-to-r from-[#be006b] to-[#e33b54] text-transparent  bg-clip-text ">View Details</Link>
        </div>
    </div>
  );
};

export default Service;
