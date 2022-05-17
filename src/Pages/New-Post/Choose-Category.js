// import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import ProgressBar from "../../Components/Progress-Bar";
import Footer from "../../Components/Footer";

const ChooseCategory = () => {
  const categories = [
    "appliances",
    "bikes",
    "boats",
    "books",
    "cars & trucks",
    "cell phones",
    "collectibles",
    "electronics",
    "furniture",
    "jewelry",
    "motorcycles",
    "musical intruments",
    "toys & games",
    "videogames",
  ];

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
              <a
                className="button is-primary progress-button"
                href={() => false}
              >
                <strong>Next Step</strong>
              </a>
            </Link>
          </div>
        </div>
        {categories.map((element, index) => (
          <div className="category-container" key={index}>
            <label className="radio">
              <input type="radio" name="answer" checked />
              {" " + element}
            </label>
          </div>
        ))}

        <div className="buttons next-buttons next-buttons-bottom">
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

export default ChooseCategory;
