import React from "react";
import Analysis from "./Analysis";

const App = () => {
  const data = [
    {
      icon: "path/to/revenue-icon.png",
      value: "10,243.00",
      change: 32.4,
      title: "Total Revenue",
    },
    {
      icon: "path/to/orders-icon.png",
      value: "23,456",
      change: -12.4,
      title: "Total Dish Ordered",
    },
    {
      icon: "path/to/customers-icon.png",
      value: "1,234",
      change: 2.4,
      title: "Total Customer",
    },
  ];

  return (
    <div className="App">
      <h1>Restaurant Analytics</h1>
      <Analysis data={data} />
    </div>
  );
};

export default App;
