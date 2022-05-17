// import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import ProgressBar from "../../Components/Progress-Bar";
import Footer from "../../Components/Footer";

const ChooseCategory = () => {
  const tempCategories = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div>
      <Navbar />
      <Hero title="New Post" subTitle="Choose Category" />
      <ProgressBar activeIndex={0} />
      <div className="new-post-container">
        <div className="columns">
          <h2 className="new-post-title column">Please choose a category:</h2>
          <div className="buttons next-buttons next-buttons-top">
            <Link to="../new-post/add-information">
              <a className="button is-primary progress-button" href="#">
                <strong>Next Step</strong>
              </a>
            </Link>
          </div>
        </div>
        {tempCategories.map((element, index) => (
          <div className="category-container" key={index}>
            <label className="radio">
              <input type="radio" name="answer" checked />
              {" " + element}
            </label>
          </div>
        ))}

        <div className="buttons next-buttons">
          <Link to="../new-post/add-information">
            <a className="button is-primary progress-button" href="#">
              <strong>Next Step</strong>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseCategory;
