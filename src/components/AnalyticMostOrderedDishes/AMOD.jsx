/* eslint-disable no-unused-vars */
import "./AMOD.scss";
import React, { useState } from "react";

const AMODChartSection = () => {
  const [timePeriod, setTimePeriod] = useState("1");

  const data = {
    1: [44, 55, 67], // Today
    2: [35, 40, 65], // This Week
    3: [50, 60, 70], // This Month
  };
  const customersData = {
    1: {
      dineIn: "200 customers",
      toGo: "122 customers",
      delivery: "264 customers",
    }, // Today
    2: {
      dineIn: "180 customers",
      toGo: "110 customers",
      delivery: "240 customers",
    }, // This Week
    3: {
      dineIn: "220 customers",
      toGo: "130 customers",
      delivery: "300 customers",
    }, // This Month
  };
  return (
    <section className="amod-tree">
      <div className="amod-tree__header">
        <h1 className="amod-head-text">Most Ordered </h1>
        <select className="amod-fitler" value={timePeriod}>
          <option value="1">Today</option>
          <option value="2">This Week</option>
          <option value="3">This Month</option>
        </select>
        <div className="divider"></div>
      </div>
    </section>
  );
};
export default AMODChartSection;
