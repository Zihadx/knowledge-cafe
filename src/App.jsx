import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Header";
import CountTime from "./component/CountTime/CountTime";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main md:px-12 md:flex">
        <div className="blog-container grid grid-cols-1 md:grid-8 gap-4 ">
          <Blogs></Blogs>
        </div>
        <div className="sidebar md:grid-4">
          <div className="mt-8">
          <CountTime></CountTime>
          </div>
         <div className="mt-4 bg-gray-300 h-full rounded">
         <Sidebar></Sidebar>
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
