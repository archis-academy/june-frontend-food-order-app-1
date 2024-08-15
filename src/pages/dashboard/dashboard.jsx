import MTOChartSection from "../../components/MostTypeOfDinner/MostTypeOfDinner";
import AmodTree from "../../components/AnalyticsMostOrderedDishes/Amod";
import Sidebar from "@/components/Sidebar/Sidebar";

import OrderReport from "../../components/OrderReport/OrderReport";
import "./dashboard.scss";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

function DashBoard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="left-side">
        <DashboardHeader />
        <div className="order-col"></div>
        <OrderReport />
      </div>
      <div className="right-side">
        <AmodTree />

        <MTOChartSection />
      </div>
    </div>
  );
}

export default DashBoard;
