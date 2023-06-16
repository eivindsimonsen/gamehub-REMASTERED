import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";

function SignIn() {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // functions
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = UserAuth();

  // toggles password visibility
  const toggleEye = () => {
    setShowPassword(!showPassword);
  };

  // what happens when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="right-side login-form">
        <label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i
            onClick={toggleEye}
            className={"fa-solid " + (showPassword ? "fa-eye" : "fa-eye-slash")}></i>
        </label>
        <button
          type="submit"
          className="cta cta-primary"
          disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
        {error}
      </form>
    </>
  );
}

export default SignIn;
