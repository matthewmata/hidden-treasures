import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import diamond from "../images/diamond.svg";
import chest from "../images/chest.svg";
import pirateShip from "../images/pirate-ship-black.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <section class="hero is-fullheight is-info">
        <div class="hero-body">
          <div className="columns">
            <div className="hero-body column">
              <div className="container has-text-centered">
                <p className="title">Hidden Treasures</p>
                <p className="subtitle">
                  Hidden Treasures is a website for viewing and posting local
                  advertisements. It works a lot like the Classifieds section of
                  a newspaper, and it's completely free to use. You can find a
                  listing for almost anything on Hidden Treasures —bikes,
                  electronics, videogames, used cars, jewelry, and a whole lot
                  more.
                </p>
                <p className="subtitle">
                  "One man's trash is another man's treasure" -Yotam Ottolenghi
                </p>
                <div className="field is-grouped">
                  <p className="control">
                    <button
                      className="button"
                      onClick={() => navigate("/categories")}
                    >
                      <span className="icon is-small">
                        <img alt="chest" width="22" src={chest}></img>
                      </span>
                      <span>Search for Treasure</span>
                    </button>
                  </p>
                  <p className="control">
                    <button
                      className="button"
                      onClick={() => navigate("/new-post")}
                    >
                      <span className="icon is-small">
                        <img alt="diamond" width="22" src={diamond}></img>
                      </span>
                      <span>Create A New Post</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <img src={pirateShip} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
