import MTOChartSection from "../../components/MostTypeOfDinner/MostTypeOfDinner";
import AmodTree from "../../components/AnalyticsMostOrderedDishes/Amod";
import Sidebar from "@/components/Sidebar/Sidebar";

import OrderReport from "../../components/OrderReport/OrderReport";
import "./dashboard.scss";

function DashBoard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="left-side">
        <div className="order-col"></div>
        <OrderReport />
      </div>
      <div className="right-side">
        <AmodTree />
      </div>
      <MTOChartSection />
    </div>
  );
}

export default DashBoard;
