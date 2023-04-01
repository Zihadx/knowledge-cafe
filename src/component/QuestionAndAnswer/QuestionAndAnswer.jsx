import React from "react";

const QuestionAndAnswer = () => {
  return (
    <div>
        <h1 className="text-5xl font-bold text-sky-700 text-center mt-12">QNA section</h1>
      <div>
        <h1 className="text-3xl font-bold mt-8">
          What is the difference between state and props in React?
        </h1>
        <p className="font-semibold text-xl mt-4">
         <span className="font-bold ms-8">Ans: </span> State and props are used to manage data and affect how components are
          rendered.State is an object that belongs to a specific component and
          is used to manage the component's internal data. Props are short for
          "properties" and are used to pass data from one component to another.
        </p>
      </div>

      <div className="mt-8">
        <h1 className="text-3xl font-bold mt-8">
         how does useState work in react?
        </h1>
        <p className="font-semibold text-xl mt-4">
         <span className="font-bold ms-8">Ans: </span> useState is a Hook that allows functional components to manage state.This is used to add state to a functional component, and the state can be updated using the set function that is returned by the Hook.
        </p>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold mt-8">
        Purpose of useEffect other than fetching data.
        </h1>
        <p className="font-semibold text-xl mt-4">
         <span className="font-bold ms-8">Ans: </span> useEffect is a Hook in React that allows you to perform side effects in function components. While useEffect is commonly used for fetching data, it can also be used for updating the title of the page, setting up event listeners, controlling component animations and others. Main purpose of useEffect- Allows to perform side effects in function components, and it can be used for many purposes beyond fetching data.
        </p>
      </div>
      


    </div>
  );
};

export default QuestionAndAnswer;
