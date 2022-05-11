// import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  //   const [isActive, setisActive] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a onClick={() => navigate("/")} className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-main"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-main" className="navbar-menu">
        <div className="navbar-start">
          <a onClick={() => navigate("/")} className="navbar-item">
            Home
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a onClick={() => navigate("/categories")} className="navbar-link">
              Categories
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                onClick={() => navigate("/new-post/choose-category")}
                className="button is-primary"
              >
                <strong>New Post</strong>
              </a>
              <a
                onClick={() => navigate("/profile/postings")}
                className="button is-light"
              >
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
