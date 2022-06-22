import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Categories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwtToken");
    const payload = sessionStorage.getItem("payload");
    if (!(jwt && payload)) {
      navigate("/login");
    }
  }, []);

  const categories = [
    "all",
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
      <Hero title="Choose a Category" subTitle="Find your Treasure" />
      <div className="new-post-container">
        <h2 className="new-post-title column">Please choose a category</h2>
        <div>
          {categories.map((category, index) => (
            <div className="category-container" key={index}>
              <a onClick={() => navigate(`/search/${category}`)}>{category}</a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
