import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Header";
import CountTime from "./component/CountTime/CountTime";
import QuestionAndAnswer from "./component/QuestionAndAnswer/QuestionAndAnswer";

function App() {
  const [readTime, setReadTime] = useState("");
  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const presentReadTime = parseInt(previousReadTime + +time);
      localStorage.setItem("readTime", presentReadTime);
      setReadTime(presentReadTime);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="main md:px-12 md:flex">
        <div className="blog-container grid grid-cols-1 md:grid-8 gap-4 ">
          <Blogs handleReadTime={handleReadTime}></Blogs>
        </div>
        <div className="sidebar md:grid-4">
          <div className="mt-8">
            <CountTime readTime={readTime}></CountTime>
          </div>
          <div className="mt-4 bg-gray-300 h-3/4 rounded">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
      <div className="px-12 mt-8">
        <QuestionAndAnswer></QuestionAndAnswer>
      </div>
    </div>
  );
}

export default App;
