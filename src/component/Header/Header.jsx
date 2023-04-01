import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg bg-sky-700">
        <div className="flex justify-between p-4 align-middle">
          <h1 className="text-3xl font-semibold text-yellow-50 pt-4">
            Knowledge Cafe
          </h1>
          <img
            className="w-20 h-20 rounded-full"
            src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=1060&t=st=1680325682~exp=1680326282~hmac=9c93a74a6d563feeca71170d8e906014d07d396da2d93772749a0bee6b911a97"
            alt=""
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
