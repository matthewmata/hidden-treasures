import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Card from "../Components/Card";

const Search = () => {
  const { category } = useParams();
  
  const [categoryName, setCategoryName] = useState(
    category.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    })
  );
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwtToken");
    const payload = sessionStorage.getItem("payload");
    if (!(jwt && payload)) {
      navigate("/login");
    }

    async function fetchData() {
      if (categoryName !== 'All') {
        const postsResponse = await fetch(
          `http://localhost:3000/api/posts/category/${categoryName}`
        );
        var postsJson = await postsResponse.json();
      } else {
        const postsResponse = await fetch(
          `http://localhost:3000/api/posts`
        );
        var postsJson = await postsResponse.json();
      }
      setPosts(postsJson);
    }

    fetchData();
  }, [category]);
  return (
    <div>
      <Navbar />
      <Hero title={categoryName} />
      <div className="columns">
        {posts.map((post, index) => (
          <Card className="column is-one-quarter" post={post} key={index}/>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
