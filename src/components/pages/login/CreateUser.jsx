import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleEye = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form className="right-side login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
        />
        <input
          type="email"
          placeholder="Username/email"
          value={email}
        />
        <label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            /* value={password} */
          />
          <i
            onClick={toggleEye}
            className={"fa-solid " + (showPassword ? "fa-eye" : "fa-eye-slash")}></i>
        </label>

        <button
          type="submit"
          className="cta cta-primary">
          Create user
        </button>
      </form>
    </>
  );
}

export default CreateUser;
