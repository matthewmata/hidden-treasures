import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import UserPool from "../auth/UserPool";

import diamond from "../images/diamond.svg";
import pirateShip from "../images/pirate-ship-black.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleSignUp = () => {

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        setPasswordError(' * Password does not meet requirements *');
      } else {
        navigate("../");
      }
      
      //userSub is UUID
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
                <h1 className="login-title">Sign Up</h1>
                <div className="login-input-container">
                  <div className="field">
                    <label>Email</label>
                    <strong className="require-popup">
                      {errors.email?.message}
                    </strong>
                    <input
                      className="input"
                      type="text"
                      value={email}
                      {...register("email", {
                        required: " * Required *",
                      })}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <strong className="require-popup">
                      {errors.password?.message}
                      {errors.confirmPassword?.message}
                      {passwordError}
                    </strong>
                    <input
                      className="input"
                      type="text"
                      value={password}
                      {...register("password", {
                        required: " * Required *",
                      })}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label>Confirm Password</label>
                    <input
                      className="input"
                      type="text"
                      value={confirmPassword}
                      {...register("confirmPassword", {
                        validate: {
                          passwordEqual: (value) =>
                            value === getValues().password ||
                            " * Password need to match! *",
                        },
                      })}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className="button button-container"
                    onClick={handleSubmit(handleSignUp)}
                  >
                    <span>Sign Up</span>
                  </button>
                </div>
                <div className="columns">
                  <div className="column">
                    <p>
                      Have an account already?{" "}
                      <a onClick={() => navigate("../login")}>Log In</a>
                    </p>
                  </div>
                </div>
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

export default SignUp;
