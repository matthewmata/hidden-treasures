import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import ProgressBar from "../../Components/Progress-Bar";
import Hero from "../../Components/Hero"
import Footer from "../../Components/Footer";

const AddInformation = () => {
    return (
      <div>
        <Navbar />
        <Hero title="New Post" subTitle="Add Information" />
        <ProgressBar activeIndex={1} />
        <div>Add Information</div>
        {/* <div className="columns">
          <h2 className="new-post-title column">Please choose a category:</h2>
          <div className="buttons next-buttons next-buttons-top">
            <Link to="../new-post/add-information">
              <a className="button is-primary progress-button">
                <strong>Next Step</strong>
              </a>
            </Link>
          </div>
        </div>
         */}
        <Link to="../new-post/add-picture">Next</Link>
        <Footer />
      </div>
    );
};

export default AddInformation;
