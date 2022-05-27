import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

const Categories = () => {
  const navigate = useNavigate();
  const category_id = 1;
    const categories = [
      { name: "all",
        icon: <Hero />
    },
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
      <a onClick={() => navigate(`/search/${category_id}`)}>Categories</a>
    </div>
  );
};

export default Categories;
