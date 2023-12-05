
const BlogCompo = ({blog}) => {
    const {img, title, details} = blog;
    return (
        <div className="card bg-transparent shadow-xl text-white h-full flex flex-col justify-between">
        <figure className="  lg:h-64 md:h-96 h-52">
          <img
            src={img}
            alt="Shoes"
            className=" w-full h-full object-cover"
          />
        </figure>
          <div className=" md:px-6 mt-3">
          <h2 className="card-title">{title}</h2>
          <p className="text-sm text-gray-400 my-3">{details}</p>      
        </div>
      </div>
    );
};

export default BlogCompo;