import React from "react";
import "./OrderReport.scss";

const OrderReport = () => {
  const orders = [
    {
      customer: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles",
      totalPayment: "$125",
      status: "Completed",
    },
    {
      customer: "Reiner Braunn",
      menu: "Salted Pasta with mushroom sauce",
      totalPayment: "$145",
      status: "Preparing",
    },
    {
      customer: "Levi Ackerman",
      menu: "Beef dumpling in hot and sour soup",
      totalPayment: "$105",
      status: "Pending",
    },
    {
      customer: "Historia Reiss",
      menu: "Hot spicy fried rice with omelet",
      totalPayment: "$45",
      status: "Completed",
    },
    {
      customer: "Hanji Zoe",
      menu: "Hot spicy fried rice with omelet",
      totalPayment: "$245",
      status: "Completed",
    },
    {
      customer: "Armin Arlart",
      menu: "Hot spicy fried rice with omelet",
      totalPayment: "$435",
      status: "Completed",
    },
  ];

  return (
    <div className="order-report">
      <h2>Order Report</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Menu</th>
            <th>Total Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.customer}</td>
              <td>{order.menu}</td>
              <td>{order.totalPayment}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderReport;
