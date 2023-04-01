import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    const [blogs, setBlogs]= useState([]);
    useEffect(() =>{
        fetch("blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
    }, []);
    return (
        <div className='blog-container'>
           {blogs.map((blog) => (<SingleBlog blog={blog}></SingleBlog>))}
            
        </div>
    );
};

export default Blogs;