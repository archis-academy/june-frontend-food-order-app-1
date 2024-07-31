import MTOChartSection from "../../components/MostTypeOfDinner/MostTypeOfDinner";
import AmodTree from "../../components/AnalyticsMostOrderedDishes/Amod";
import Sidebar from "@/components/Sidebar/Sidebar";

function DashBoard() {
  return (
    <div className="dashboard">
      <Sidebar/>
      <div className="left-side">
        left side
      </div>
      <div className="right-side">
      <AmodTree />
        <MTOChartSection />
      </div>
    </div>
  );
}

export default DashBoard;
