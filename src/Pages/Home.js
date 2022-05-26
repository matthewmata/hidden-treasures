import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import diamond from "../images/diamond.svg"
import pirateShip from "../images/pirate-ship-black.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section class="hero is-fullheight is-info">
        <div class="hero-body">
          <div class="container">
            <div className="columns">
              <div className="hero-body column">
                <div className="container has-text-centered">
                  <p className="title">Hidden Treasures <img className="" src={diamond}></img></p>
                  <p className="subtitle">
                    Hidden Treasures is a website for viewing and posting local
                    advertisements. It works a lot like the Classifieds section
                    of a newspaper, and it's completely free to use. You can
                    find a listing for almost anything on Hidden Treasures
                    —bikes, electronics, videogames, used cars, jewelry, and a
                    whole lot more.
                  </p>
                  <p className="subtitle">
                    "One man's trash is another man's treasure" -Yotam
                    Ottolenghi
                  </p>
                </div>
              </div>
              <div className="column">
                <img src={pirateShip} />
                <p className="subtitle has-text-centered">
                  One man's trash is another man's treasure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
