import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AccountContext } from "../auth/Accounts";
import ForgotPassword from "../Components/Forgot-Password";

import diamond from "../images/diamond.svg";
import pirateShip from "../images/pirate-ship-black.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [stage, setStage] = useState(1);

  const navigate = useNavigate();

  const { authenticate, getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then(() => {
      navigate("/");
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
        navigate("../");
      })
      .catch((err) => {
        console.error("Failed to login!", err);
        setLoginError(" * Email or Password Incorrect *");
      });
  };

  return (
    <div>
      <section className="hero is-fullheight hero-color">
        <div className="hero-body-container">
          <div className="website-name-box">
            <p className="title login-hero-title">
              <span>
                <img alt="diamond" width="22" src={diamond}></img>
              </span>
              Hidden Treasures
            </p>
          </div>
          <div className="columns">
            <div className="hero-body-container hero-column">
              <div className="container has-text-centered">
                <div className="hero-body-container hero-column ship-left">
                  <img src={pirateShip} width="200" />
                </div>
                {stage === 1 && (
                  <div>
                    <h1 className="login-title">Log In</h1>
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
                      <div className="field">
                        <label>Password</label>
                        <input
                          className="input"
                          type="text"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <strong className="require-popup">{loginError}</strong>
                      <button
                        className="button button-container"
                        onClick={handleSubmit}
                      >
                        <span>Log In</span>
                      </button>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <a onClick={() => setStage(2)}>Forgot Password</a>
                      </div>
                      <div className="column">
                        <p>
                          Don't have an account?{" "}
                          <a onClick={() => navigate("../signup")}>Sign up</a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {stage === 2 && <ForgotPassword backToLogin={setStage} />}
              </div>
            </div>
            <div className="hero-body-container hero-column ship-right">
              <img src={pirateShip} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
