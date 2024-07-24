import React from "react";
import { Avatar } from "../Avatar/Avatar";
import imgOne from "../../assets/Avatar/1.png";
import imgTwo from "../../assets/Avatar/2.png";
import imgThree from "../../assets/Avatar/3.png";
import imgFour from "../../assets/Avatar/4.png";
import imgFive from "../../assets/Avatar/5.png";
import "./OrderReport.scss";

const OrderReport = () => {
  const orders = [
    {
      avatar: <Avatar bgColor={"red"} avatarImg={imgOne} />,
      customer: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles",
      totalPayment: "$125",
      status: "Completed",
    },
    {
      avatar: <Avatar bgColor={"blue"} avatarImg={imgTwo} />,
      customer: "Reiner Braunn",
      menu: "Salted Pasta with mushroom sauce",
      totalPayment: "$145",
      status: "Preparing",
    },
    {
      avatar: <Avatar bgColor={"purple"} avatarImg={imgThree} />,
      customer: "Levi Ackerman",
      menu: "Beef dumpling in hot and sour soup",
      totalPayment: "$105",
      status: "Pending",
    },
    {
      avatar: <Avatar bgColor={"green"} avatarImg={imgFour} />,
      customer: "Historia Reiss",
      menu: "Hot spicy fried rice with omelet",
      totalPayment: "$45",
      status: "Completed",
    },
    {
      avatar: <Avatar bgColor={"pink"} avatarImg={imgFive} />,
      customer: "Hanji Zoe",
      menu: "Hot spicy fried rice with omelet",
      totalPayment: "$245",
      status: "Completed",
    },
    {
      avatar: <Avatar bgColor={"yellow"} avatarImg={imgThree} />,
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
              <td>
                <div className="customer-cont">
                  {order.avatar}
                  {order.customer}
                </div>
              </td>
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
