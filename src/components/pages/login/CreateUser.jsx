import { useState, useEffect } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";

function CreateUser() {
  // states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // functions
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleEye = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await createUser(email, password);

      // Makes sure the user account retrieves the username and a photo
      updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: "https://loremflickr.com/cache/resized/65535_52886923341_9db4d78a42_z_640_640_nofilter.jpg",
      }).then(() => {
        // redirecting to dashboard or sell page
        const currentPath = location.pathname;
        if (currentPath.includes("/sell")) {
          navigate("/sell");
        } else {
          navigate("/dashboard");
        }
      });
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
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Username/email"
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
          className="cta cta-primary"
          disabled={loading}>
          {loading ? "Loading..." : "Create user"}
        </button>
        {error}
      </form>
    </>
  );
}

export default CreateUser;
