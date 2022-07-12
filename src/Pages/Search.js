import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Card from "../Components/Card";

const Search = () => {
  
  const [categoryName, setCategoryName] = useState('')
  const [posts, setPosts] = useState([]);
    
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwtToken");
    const payload = sessionStorage.getItem("payload");
    if (!(jwt && payload)) {
      navigate("/login");
    }

    setCategoryName( category.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    }))

    async function fetchData() {
      if (categoryName !== "All") {
        const postsResponse = await fetch(
          `http://localhost:3000/api/posts/category/${categoryName}`
        );
        var postsJson = await postsResponse.json();
      } else {
        const postsResponse = await fetch(`http://localhost:3000/api/posts`);
        var postsJson = await postsResponse.json();
      }
      setPosts(postsJson);
    }

    fetchData();
  }, [category, posts]);

  const cards = [];

  for (var i = 0; i < posts.length; i += 4) {
    var cardRow = [];
    cards.push(cardRow);
    for (var j = i; j < i + 4 && posts[j] !== undefined; j++) {
      cardRow.push(posts[j]);
    }
  }

  return (
    <div>
      <Navbar />
      <Hero title={categoryName} />
      <div className="card-container">
        {cards.map((row, i) => (
          <div className="columns">
            {row.map((post, i) => (
              <Card post={post} key={i} />
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
