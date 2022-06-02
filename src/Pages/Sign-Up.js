import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserPool from "../auth/UserPool";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
      //userSub is UUID
    });
  };

  return (
    <div>
      <div>Signup</div>
      <div onClick={() => navigate("../login")}>To Login</div>
      <div className="field">
        <label className="label">
          Email
        </label>
        <input
          className="input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label className="label">
          Password
        </label>
        <input
          className="input"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUp;
