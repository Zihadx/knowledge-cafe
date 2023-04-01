import React from "react";

const SingleBlog = (props) => {
  // console.log(props)
  const { picture, img, author, date, read,title } = props.blog;
  // console.log(blog)
  return (
    <div className="p-4">
      <img className="w-full rounded-lg" src={picture} alt="" />
      <div className="md:flex justify-between items-center">
      <div className="mt-8 flex items-center gap-4">
        <img className="w-20 h-20 rounded-full" src={img} alt="" />
        <div className=" ">
          <h5 className="text-3xl font-bold">{author}</h5>
          <p>{date}</p>
        </div>
      </div>
      <div>
        <p>{read} minutes read</p>
      </div>
      </div>
      <h1 className="text-5xl font-semibold mb-8 mt-8">{title}</h1>
      <button className="text-2xl font-normal text-blue-600 underline hover:text-orange-400" href="">Mark as read</button>
    </div>
  );
};

export default SingleBlog;
