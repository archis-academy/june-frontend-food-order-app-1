import MTOChartSection from "../../components/MostTypeOfDinner/MostTypeOfDinner";
import OrderReport from "../../components/OrderReport/OrderReport";
import "./dashboard.scss";

function DashBoard() {
  return (
    <div>
      <div className="order-col">
        <OrderReport />
      </div>

      <MTOChartSection />
    </div>
  );
}

export default DashBoard;
