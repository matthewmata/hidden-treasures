import { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import Pool from "../auth/UserPool";

const ForgotPassword = ({ backToLogin }) => {
  const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool,
    });
  };

  const sendCode = (event) => {
    event.preventDefault();

    getUser().forgotPassword({
      onSuccess: (data) => {
        // console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        // console.error("onFailure:", err);
      },
      inputVerificationCode: (data) => {
        // console.log("Input code:", data);
        setStage(2);
      },
    });
  };

  const resetPassword = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError(" * Passwords are not the same *");
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: (data) => {
        backToLogin(1);
        // console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        // console.error("onFailure:", err);
      },
    });
  };

  return (
    <div>
      <h1 className="login-title">Forgot Password</h1>
      {stage === 1 && (
        <div className="login-input-container">
          <div className="field">
            <label>Email</label>
            <input
              className="input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="button button-container" onClick={sendCode}>
            <span>Send verification code</span>
          </button>
        </div>
      )}

      {stage === 2 && (
        <div className="login-input-container">
          <div className="field">
            <label>Reset Code</label>
            <input
              className="input"
              type="text"
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />
          </div>
          <div className="field">
            <label>New Password</label>
            <input
              className="input"
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="field">
            <label>Confirm New Password</label>
            <input
              className="input"
              type="text"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <strong className="require-popup">{passwordError}</strong>
          <button className="button button-container" onClick={resetPassword}>
            <span>Change password</span>
          </button>
        </div>
      )}
      <div className="columns">
        <div className="column">
          <a onClick={() => backToLogin(1)}>Log In</a>
        </div>
        <div className="column">
          <p>
            Don't have an account?{" "}
            <a onClick={() => navigate("../signup")}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
