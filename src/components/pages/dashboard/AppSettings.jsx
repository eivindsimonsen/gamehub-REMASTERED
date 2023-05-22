import React from "react";

function AppSettings() {
  return (
    <>
      <section id="settings">
        <h1>App settings</h1>
        <form>
          <label htmlFor="notifications">
            Turn on notifications
            <input
              type="checkbox"
              id="notifications"
            />
          </label>
        </form>
      </section>
    </>
  );
}

export default AppSettings;
