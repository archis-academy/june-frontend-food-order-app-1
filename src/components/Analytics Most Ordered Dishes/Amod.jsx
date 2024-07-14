/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './amod.scss'; 

const AmodTree = () => {
  const [timePeriod, setTimePeriod] = useState("1");

  const data = {
    "1": ["200 dishes ordered", "150 dishes ordered", "100 dishes ordered"], // Today
    "2": ["220 dishes ordered", "180 dishes ordered", "140 dishes ordered"], // This Week
    "3": ["250 dishes ordered", "200 dishes ordered", "160 dishes ordered"], // This Month
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <section className="amod-tree">
      <div className="amod-container">
        <h1>Most Ordered</h1>
        <select className="amod-filter" value={timePeriod} onChange={handleTimePeriodChange}>
          <option value="1">Today</option>
          <option value="2">This Week</option>
          <option value="3">This Month</option>
        </select>
      </div>
      <div className="amod-dvider"></div>
      <div className="amod-menu">
        <div className="amod-menu-item-container">
          <div className="amod-menu-item-noodles">
            <img src="./image/image-1.svg" alt="Noodles" />
            <div className="amod-menu-item-text">
              <p>Spicy seasoned seafood noodles</p>
              <p className="under">{data[timePeriod][0]}</p>
            </div>
          </div>
          <div className="amod-menu-item-mushroom">
            <img src="./image/image-2.svg" alt="Mushroom" />
            <div className="amod-menu-item-text">
              <p>Salted Fried Mushroom</p>
              <p className="under">{data[timePeriod][1]}</p>
            </div>
          </div>
          <div className="amod-menu-item-beef">
            <img src="./image/image-3.svg" alt="Beef" />
            <div className="amod-menu-item-text">
              <p>Beef Dumpling in Hot and Sour Soup</p>
              <p className="under">{data[timePeriod][2]}</p>
            </div>
          </div>
          <div className="amod-button">
            <button>View All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmodTree;
