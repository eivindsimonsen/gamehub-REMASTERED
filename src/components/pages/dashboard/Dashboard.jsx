import React from "react";

function Dashboard() {
  return (
    <section id="dashboard">
      <aside>
        <ul>
          <li>
            <i className="fa-solid fa-user"></i> <span>Your account</span>
          </li>
          <li>
            <i className="fa-solid fa-list"></i> <span>Listed games</span>
          </li>
          <li>
            <i class="fa-solid fa-gear"></i> <span>App settings</span>
          </li>
        </ul>
      </aside>
      <section className="dashboard-container">
        <div>Your account</div>
        <div>Listed games</div>
        <div>App settings</div>
      </section>
    </section>
  );
}

export default Dashboard;
