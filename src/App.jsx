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
import Dashboard from "./components/pages/dashboard/Dashboard";
import Details from "./components/pages/details/Details";
import Success from "./components/cart/Success";
import Canceled from "./components/cart/Canceled";
// context
import { AuthContextProvider } from "./context/AuthContext";
// components
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
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
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/*"
              element={<NotFound />}
            />
            <Route
              path="/details/:id"
              element={<Details />}
            />
            <Route
              path="/success"
              element={<Success />}
            />
            <Route
              path="/canceled"
              element={<Canceled />}
            />
          </Routes>
        </main>
        <footer>
          <FooterNav />
        </footer>
      </AuthContextProvider>
    </>
  );
}

export default App;
