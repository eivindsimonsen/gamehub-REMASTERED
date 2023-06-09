// hooks
import { useState } from "react";
// components
import YourAccount from "./YourAccount";
import ListedGames from "./ListedGames";
import AppSettings from "./AppSettings";
// context
import { UserAuth } from "../../../context/AuthContext";

function Dashboard() {
  const { user } = UserAuth();
  const [selectedDashboard, setSelectedDashboard] = useState(0);

  return (
    <section id="dashboard">
      <aside>
        <ul>
          <li
            id={selectedDashboard === 0 ? "dashboard-active" : "false"}
            onClick={() => setSelectedDashboard(0)}>
            <i className="fa-solid fa-user"></i>
            <span>Your account</span>
          </li>
          <li
            id={selectedDashboard === 1 ? "dashboard-active" : "false"}
            onClick={() => setSelectedDashboard(1)}>
            <i className="fa-solid fa-list"></i>
            <span>Listed games</span>
          </li>
          <li
            id={selectedDashboard === 2 ? "dashboard-active" : "false"}
            onClick={() => setSelectedDashboard(2)}>
            <i className="fa-solid fa-gear"></i>
            <span>App settings</span>
          </li>
        </ul>
      </aside>
      <section className="dashboard-container">
        <div>
          {selectedDashboard === 0 && <YourAccount user={user} />}
          {selectedDashboard === 1 && <ListedGames />}
          {selectedDashboard === 2 && <AppSettings />}
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
