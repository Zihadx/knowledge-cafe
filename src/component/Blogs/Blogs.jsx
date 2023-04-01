import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = ({handleReadTime}) => {
    const [blogs, setBlogs]= useState([]);
    useEffect(() =>{
        fetch("blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
    }, []);
    return (
        <div className='blog-container'>
           {blogs.map((blog) => (<SingleBlog handleReadTime={handleReadTime} blog={blog} key={blog.id}></SingleBlog>))}
            
        </div>
    );
};

export default Blogs;