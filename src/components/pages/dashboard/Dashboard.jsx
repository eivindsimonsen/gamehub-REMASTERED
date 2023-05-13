import React from "react";

function Dashboard() {
  return (
    <section id="dashboard">
      <aside>
        <ul>
          <li>Your account</li>
          <li>Listed games</li>
          <li>App settings</li>
        </ul>
      </aside>
      <section className="dashboard-container">
        <section>Your account</section>
        <section>Listed games</section>
        <section>App settings</section>
      </section>
    </section>
  );
}

export default Dashboard;
