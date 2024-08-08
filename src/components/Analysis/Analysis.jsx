import React from "react";
import "./Analysis.scss";

const Analysis = ({ data }) => {
  return (
    <div className="analysis">
      {data.map((item, index) => (
        <div key={index} className="analysis-item">
          <div className="icon">
            <img src={item.icon} alt={item.title} />
          </div>
          <div className="info">
            <p className="value">${item.value}</p>
            <p
              className="change"
              style={{ color: item.change > 0 ? "green" : "red" }}
            >
              {item.change > 0 ? +`${item.change}%` : `${item.change}%`}
              {item.change > 0 ? "↑" : "↓"}
            </p>
            <p className="title">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analysis;
