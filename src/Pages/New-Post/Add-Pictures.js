import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import ProgressBar from "../../Components/Progress-Bar";
import Footer from "../../Components/Footer";

const AddPicture = () => {
  return (
    <div>
      <Navbar />
      <Hero title="New Post" subTitle="Add Pictures" />
      <ProgressBar activeIndex={2} />
      <div className="new-post-container">
        <div className="columns">
          <h2 className="new-post-title column">Add Pictures</h2>
          <div className="buttons next-buttons next-buttons-top">
            <div className="previous-button">
              <Link to="../new-post/add-information">
                <a className="button is-light progress-button">Previous</a>
              </Link>
            </div>
            <Link to="../new-post/review-post">
              <a className="button is-primary progress-button">
                <strong>Next Step</strong>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddPicture;
