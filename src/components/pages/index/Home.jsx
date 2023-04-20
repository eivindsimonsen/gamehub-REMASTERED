import React from "react";
import svg from "../../../assets/undraw_virtual_reality_re_yg8i.svg";

function Home() {
  return (
    <>
      <section className="home-intro">
        <h1>The universe of games</h1>
        <img
          src={svg}
          alt="Man fitted into his chair with a VR headset attached to his head."
        />
      </section>
    </>
  );
}

export default Home;
