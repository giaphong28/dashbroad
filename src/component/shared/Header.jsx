import React from "react";
import { HiChartPie } from "react-icons/hi";

const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
      <div className="relative">
        <div className="flex">
          <HiChartPie fontSize={20} /> DashBoard
        </div>
      </div>
    </div>
  );
};

export default Header;
