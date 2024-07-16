import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import "./HomePage.scss";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <Header />
      </div>
    </div>
  );
}

export default HomePage;
