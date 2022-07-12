import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwtToken");
    const payload = sessionStorage.getItem("payload");
    if (!(jwt && payload)) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <section className="hero is-large is-info">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">404</p>
            <p className="subtitle">Page Not Found</p>
            <p className="subtitle">
              The Page you are looking for doesn't exist or an other error
              occurred.
            </p>
            <p className="subtitle">
              Go back, or head over to the Hidden Treasures Home page to choose a new direction.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PageNotFound;
