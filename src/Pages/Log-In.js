import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AccountContext } from "../auth/Accounts";
import Status from "../auth/Status";
import ForgotPassword from "../Components/Forgot-Password";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { authenticate } = useContext(AccountContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
      })
      .catch((err) => {
        console.error("Failed to login!", err);
      });
  };

  // Success
  //   CognitoUserSession {idToken: CognitoIdToken, refreshToken: CognitoRefreshToken, accessToken: CognitoAccessToken, clockDrift: 0}
  // accessToken: CognitoAccessToken {jwtToken: 'eyJraWQiOiIza0tOUUlcL2JaendwdjZoOU5rc3N0ZmdnZ01Zej…7FVBgBbt_81WHYGni8k6V70dsgNltH3siKTJJCcLGuQKo3pQw', payload: {…}}
  // clockDrift: 0
  // idToken: CognitoIdToken {jwtToken: 'eyJraWQiOiJhZjIyaVVSVkc5SGpYd2ZRZ2JJcXRCUUlldE1GWW…UQG0aXvealSIN4vduHQXZoBC-t9SMgmDazp7Ky06RIb-3UcbQ', payload: {…}}
  // refreshToken: CognitoRefreshToken {token: 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUl…Lb2q84SnjUE88KwH9-y93NMV4s.aoti4MoH2Cb3-6ih2fGtgg'}
  // [[Prototype]]: Object

  return (
    <div>
      <Status />
      <div>Login</div>
      <div onClick={() => navigate("../signup")}>To Signup</div>
      <div className="field">
        <label className="label">Email</label>
        <input
          className="input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label className="label">Password</label>
        <input
          className="input"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>

      <ForgotPassword />
    </div>
  );
};

export default Login;
