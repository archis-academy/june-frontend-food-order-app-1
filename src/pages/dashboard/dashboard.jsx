import MTOChartSection from "../../components/MostTypeOfDinner/MostTypeOfDinner";
import AmodTree from "../../components/AnalyticsMostOrderedDishes/Amod";
import Sidebar from "@/components/Sidebar/Sidebar";
import Analytics from "../../components/Analytics/Analytics";

function DashBoard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="left-side">left side</div>
      <Analytics />
      <div className="right-side">
        <AmodTree />
        <MTOChartSection />
      </div>
    </div>
  );
}

export default DashBoard;
