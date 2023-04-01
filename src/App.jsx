import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main md:px-24">
        <div className="blog-container grid grid-cols-1 md:grid-8 ">
          <Blogs></Blogs>
        </div>
        <div className="sidebar grid grid-cols-4 border-spacing bg-gray-300 mt-4 rounded">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
