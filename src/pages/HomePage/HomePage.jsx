import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import Payment from "../../components/Payment/Payment";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <h1 style={{ height: "200px" }}>Homepage example</h1>
        <Payment />
      </div>
    </div>
  );
}

export default HomePage;
