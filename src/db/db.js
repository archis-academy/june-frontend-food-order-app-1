import React from "react";
import revenueIcon from "../assets/Analytics/revenue-icon.png";
import ordersIcon from "../assets/Analytics/orders-icon.png";
import customersIcon from "../assets/Analytics/customers-icon.png";

export const analyticsData = [
  {
    icon: revenueIcon,
    value: "$10,243.00",
    change: "+32.40%",
    title: "Total Revenue",
    changeType: "up",
  },
  {
    icon: ordersIcon,
    value: "23,456",
    change: "-12.40%",
    title: "Total Dish Ordered",
    changeType: "down",
  },
  {
    icon: customersIcon,
    value: "1,234",
    change: "+2.40%",
    title: "Total Customer",
    changeType: "up",
  },
];
