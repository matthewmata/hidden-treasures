import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import ProgressBar from "../../Components/Progress-Bar";
import Hero from "../../Components/Hero";
import Footer from "../../Components/Footer";

const AddInformation = () => {
  return (
    <div>
      <Navbar />
      <Hero title="New Post" subTitle="Add Information" />
      <ProgressBar activeIndex={1} />
      <div className="new-post-container">
        <div className="columns">
          <h2 className="new-post-title column">Please add information:</h2>
          <div className="buttons next-buttons next-buttons-top">
            <div className="previous-button">
              <Link to="../new-post/choose-category">
                <a className="button is-light progress-button">Previous</a>
              </Link>
            </div>
            <Link to="../new-post/add-picture">
              <a className="button is-primary progress-button">
                <strong>Next Step</strong>
              </a>
            </Link>
          </div>
        </div>
        <div className="buttons next-buttons next-buttons-bottom">
          <div className="previous-button">
            <Link to="../new-post/choose-category">
              <a className="button is-light progress-button">Previous</a>
            </Link>
          </div>
          <Link to="../new-post/add-information">
            <a className="button is-primary progress-button" href={() => false}>
              <strong>Next Step</strong>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddInformation;
