import MTOChartSection from "../../components/MostTypeOfDinner/MostTypeOfDinner";
import AmodTree from "../../components/AnalyticsMostOrderedDishes/Amod";
import Sidebar from "@/components/Sidebar/Sidebar";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

function DashBoard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="left-side">
        <DashboardHeader />
      </div>
      <div className="right-side">
        <AmodTree />
        <MTOChartSection />
      </div>
    </div>
  );
}

export default DashBoard;
