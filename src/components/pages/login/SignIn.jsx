import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = UserAuth();

  const toggleEye = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      await signIn(email, password);
      const currentPath = location.pathname;
      if (currentPath.includes("/sell")) {
        navigate("/sell");
      } else {
        navigate("/dashboard");
      }
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="right-side login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            onClick={toggleEye}
            className={"fa-solid " + (showPassword ? "fa-eye" : "fa-eye-slash")}></i>
        </label>
        <button
          type="submit"
          className="cta cta-primary">
          Login
        </button>
        {error}
      </form>
    </>
  );
}

export default SignIn;
