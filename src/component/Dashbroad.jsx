import React from "react";
import { Link } from "react-router-dom";
import DashboardStat from "./DashboardStat";
import TransactionChart from "./TransactionChart";
import DataPie from "./DataPie";

const Dashbroad = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStat />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <DataPie />
      </div>
    </div>
  );
};

export default Dashbroad;
