// styles
import "./sass/style.scss";
// packages
import { Routes, Route } from "react-router-dom";
// pages
import HeaderNav from "./components/nav/HeaderNav";
import FooterNav from "./components/nav/FooterNav";
import Home from "./components/pages/index/Home";
import Games from "./components/pages/games/Games";
import Sell from "./components/pages/sell/Sell";
import Login from "./components/pages/login/Login";
import NotFound from "./components/pages/notfound/NotFound";
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/games"
            element={<Games />}
          />
          <Route
            path="/sell"
            element={<Sell />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/*"
            element={<NotFound />}
          />
        </Routes>
      </main>
      <footer>
        <FooterNav />
      </footer>
    </>
  );
}

export default App;
