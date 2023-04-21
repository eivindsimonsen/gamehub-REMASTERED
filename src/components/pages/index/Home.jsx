import React from "react";
import svg from "../../../assets/undraw_gaming_re_cma2.svg";

function Home() {
  return (
    <>
      <section className="home-intro">
        <img
          src={svg}
          alt="Man fitted into his chair with a VR headset attached to his head."
        />
        <h1>
          <span>The</span> <br />
          <span>universe</span> <br />
          <span>of</span> <br />
          <span>games</span>
        </h1>
      </section>
    </>
  );
}

export default Home;
