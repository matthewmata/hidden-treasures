import { useState } from "react";
import { useNavigate } from "react-router-dom";

import diamond from "../images/diamond.svg"


const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  const navigate = useNavigate();
  const tempCategories = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];


  return (
    <div className="nav-container">
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={diamond} alt="diamond" width="40" height="28" />
            <div className="nav-icon-text">Hidden Treasures</div>
          </div>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-main"
            href={() => false}
            onClick={() => setisActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbar-main"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a
              onClick={() => navigate("/")}
              className="navbar-item"
              href={() => false}
            >
              Home
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a
                onClick={() => navigate("/categories")}
                className="navbar-link"
                href={() => false}
              >
                Categories
              </a>
              {/* {!isActive ? (
                          <div className="navbar-dropdown">
              {tempCategories.map((element, index) => (
                <a className="navbar-item" key={index}>
                  {element}
                </a>
              ))}
            </div>
            ) : ""} */}
              <div className="navbar-dropdown">
                {tempCategories.map((element, index) => (
                  <a className="navbar-item" key={index} href={() => false}>
                    {element}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  onClick={() => navigate("/new-post")}
                  className="button is-primary"
                  href={() => false}
                >
                  <strong>New Post</strong>
                </a>
                <a
                  onClick={() => navigate("/profile/postings")}
                  className="button is-light"
                  href={() => false}
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
