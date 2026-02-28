import React from "react";
import Mainroutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen h-screen py-10 px-[10%] text-white font-medium bg-gray-800">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
