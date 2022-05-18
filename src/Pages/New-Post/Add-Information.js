// import { useReducer } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import ProgressBar from "../../Components/Progress-Bar";
import Hero from "../../Components/Hero";
import Footer from "../../Components/Footer";

const AddInformation = () => {
  // const [filterInput, setFilterInput] = useReducer(
  //   (state, newState) => ({ ...state, ...newState }),
  //   {
  //     name: "",
  //   }
  // );

  return (
    <div>
      <Navbar />
      <Hero title="New Post" subTitle="Add Information" />
      <ProgressBar activeIndex={1} />
      <div className="new-post-container">
        <div className="columns">
          <h2 className="new-post-title column">Post Information</h2>
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

        <div className="columns">
          <div className="column is-two-fifths">
            <div className="field">
              <label className="label">Posting Title</label>
              <input className="input" type="text" />
            </div>
          </div>
          <div className="column is-one-fifth">
            <div className="field">
              <label className="label">Price</label>
              <div className="field has-addons">
                <p className="control">
                  <span className="select">
                    <select>
                      <option value="$">$</option>
                      <option value="£">£</option>
                      <option value="€">€</option>
                    </select>
                  </span>
                </p>
                <p class="control">
                  <input class="input" type="text" />
                </p>
              </div>
            </div>
          </div>
          <div className="column is-one-fifth">
            <div className="field">
              <label className="label">City</label>
              <input className="input" type="text" />
            </div>
          </div>
          <div className="column is-one-fifth">
            <div className="field">
              <label className="label">Postal Code</label>
              <input className="input" type="text" />
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label className="label">Description</label>
            <textarea class="textarea"></textarea>
          </div>
        </div>

        <h2 className="new-post-title">Posting Details</h2>
        <div className="columns">
          <div className="column is-one-fourth">
            <label className="label">Make / Manufacturer</label>
            <input className="input" type="text" />
          </div>
          <div className="column is-one-fourth">
            <label className="label">Model Name / Number</label>
            <input className="input" type="text" />
          </div>
          <div className="column is-one-fourth">
            <label className="label">Size Dimensions</label>
            <input className="input" type="text" placeholder="L x W x H" />
          </div>
          <div className="column">
            <label className="label">Condition</label>
            <div className="field">
              <div className="control">
                <div className="select">
                  <select>
                    <option>-</option>
                    <option>New</option>
                    <option>Like New</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Salvage</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="new-post-title">Contact Info</h2>
        <div className="columns">
          <div className="column is-one-third">
            <label className="label">Contact Name</label>
            <input className="input" type="text" />
          </div>
          <div className="column is-one-third">
            <label className="label">Email</label>
            <input className="input" type="text" />
          </div>
          <div className="column is-one-third">
            <label className="label">Phone Number</label>
            <input className="input" type="text" />
          </div>
        </div>

        <div className="buttons next-buttons next-buttons-bottom">
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
      <Footer />
    </div>
  );
};

export default AddInformation;
