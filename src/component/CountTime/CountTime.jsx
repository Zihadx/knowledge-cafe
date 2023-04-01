import React, { useEffect, useState } from "react";

const CountTime = ({ readTime }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
  }, [readTime]);
  return (
    <div className="bg bg-blue-200 h-full rounded-md border-2 border-blue-700 text-blue-800">
      <div className="text-center">
        <h1 className="text-2xl font-bold p-3">
          Spent time on read : 
          <input
            type="text"
            className="w-20 rounded text-center mr-2"
            value={time}
          />
          min
        </h1>
      </div>
    </div>
  );
};

export default CountTime;
