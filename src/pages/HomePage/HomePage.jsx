import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import "./HomePage.scss";
import Menu from "../../components/DishesMenu/dishes";


function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <Header />
       <Menu />
      </div>
    </div>
  );
}

export default HomePage;
