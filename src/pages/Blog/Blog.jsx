import { useEffect, useState } from "react";
import BlogCompo from "../../components/BlogCompo/BlogCompo";

const Blog = () => {
    const [blogs, setblogs] = useState();

    useEffect(() => { 
        const data = async () => { 
            await fetch('/blog.json')
            .then(res => res.json())
            .then(blogs => setblogs(blogs))
         }
         data();
     },[])

    return (
        <div className="bg-gradient-to-b from-[#1c153f] to-[#1c153f] overflow-hidden py-28">
       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 px-16 gap-y-10">
       {
           blogs?.map(blog => 
            <BlogCompo
            key={blog.img}
            blog={blog}
            ></BlogCompo>
            )
        }
       </div>
    </div>
    );
};

export default Blog;