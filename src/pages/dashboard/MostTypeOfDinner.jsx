// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "./mto.scss";

const MostTypeOfDinner = () => {
  const progressContainerRef = useRef(null);
  const [data, setData] = useState([
    {
      id: "progress1",
      value: 65,
      range: [0, 100],
      color: "rgba(101, 176, 246, 1)",
      animation: {
        duration: "1s",
        style: "ease",
      },
    },
    {
      id: "progress2",
      value: 45,
      range: [0, 100],
      color: "rgba(255, 181, 114, 1)",
      animation: {
        duration: "1s",
        style: "ease",
      },
    },
    {
      id: "progress3",
      value: 55,
      range: [0, 100],
      color: "rgba(255, 124, 163, 1)",
      animation: {
        duration: "1s",
        style: "ease",
      },
    },
    {
      id: "progress4",
      value: 0,
      range: [0, 100],
      color: "#333",
      animation: {
        duration: "1s",
        style: "ease",
      },
    },
    {
      id: "progress5",
      value: 0,
      range: [0, 100],
      color: "#333",
      animation: {
        duration: "1s",
        style: "ease",
      },
    },
    {
      id: "progress6",
      value: 0,
      range: [0, 100],
      color: "#333",
      animation: {
        duration: "1s",
        style: "ease",
      },
    },
    {
      id: "progress7",
      value: 0,
      range: [0, 100],
      color: "#333",
      animation: {
        duration: "1s",
        style: "ease",
      },
    },
  ]);

  const todayData = [
    {
        id: "progress1",
        value: 65,
        range: [0, 100],
        color: "rgba(101, 176, 246, 1)",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress2",
        value: 45,
        range: [0, 100],
        color: "rgba(255, 181, 114, 1)",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress3",
        value: 55,
        range: [0, 100],
        color: "rgba(255, 124, 163, 1)",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress4",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress5",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress6",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress7",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    }
];
  const thisWeekData = [
    {
        id: "progress1",
        value: 35,
        range: [0, 100],
        color: "rgba(101, 176, 246, 1)",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress2",
        value: 65,
        range: [0, 100],
        color: "rgba(255, 181, 114, 1)",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress3",
        value: 75,
        range: [0, 100],
        color: "rgba(255, 124, 163, 1)",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress4",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress5",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress6",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress7",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    }
];

  const thisMonthData = [
    {
        id: "progress1",
        value: 45,
        range: [0, 100],
        color: "rgba(101, 176, 246, 1)",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress2",
        value: 55,
        range: [0, 100],
        color: "rgba(255, 181, 114, 1)",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress3",
        value: 85,
        range: [0, 100],
        color: "rgba(255, 124, 163, 1)",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress4",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress5",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress6",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    },
    {
        id: "progress7",
        value: 0,
        range: [0, 100],
        color: "#333",
        animation: {
            duration: "1s",
            style: "ease"
        }
    }
];

  useEffect(() => {
    $(progressContainerRef.current).radialMultiProgress({
      thickness: 8,
      "font-size": 10,
      "base-color": "#333",
      space: 1,
      antiAlias: false,
      scaleLabel: false,
      centerContent: "",
      responsive: true,
      innerFullCircle: true,
      data: data,
    });
  }, [data]);

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;

    switch (selectedValue) {
      case "1":
        setData(todayData);
        break;
      case "2":
        setData(thisWeekData);
        break;
      case "3":
        setData(thisMonthData);
        break;
      default:
        break;
    }
  };

  const updateText = (data) => {
    data.forEach((item, index) => {
      document.querySelectorAll(".mto__chart-info-text-under h3")[index].textContent = `${item.value} customers`;
    });
  };

  useEffect(() => {
    updateText(data);
  }, [data]);

  return (
    <section className="mto__tree">
      <div className="mto__head">
        <h1 className="mto__head-text">Most Type of Order</h1>
        <select className="mto__fitler" onChange={handleFilterChange}>
          <option value="1">Today</option>
          <option value="2">This Week</option>
          <option value="3">This Month</option>
        </select>
      </div>
      <div className="divider"></div>
      <div className="mto__chart-head">
        <div className="mto__chart">
          <div id="progress-container" className="progress-container" ref={progressContainerRef}></div>
          <div className="mto__chart-info">
            <div className="info__color">
              <div className="mto__chart-pink-info">
                <div className="mto__chart-info-text">
                  <h3 className="mto__chart-text">Dine In</h3>
                  <div className="mto__chart-info-text-under">
                    <h3 className="mto__chart-text">200 customers</h3>
                  </div>
                </div>
                <div className="mto__chart-yellow-info">
                  <div className="mto__chart-info-text">
                    <h3 className="mto__chart-text">To Go</h3>
                    <div className="mto__chart-info-text-under">
                      <h3 className="mto__chart-text">122 customers</h3>
                    </div>
                  </div>
                  <div className="mto__chart-blue-info">
                    <div className="mto__chart-info-text">
                      <h3 className="mto__chart-text">Delivery</h3>
                      <div className="mto__chart-info-text-under">
                        <h3 className="mto__chart-text">264 customers</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostTypeOfDinner;
