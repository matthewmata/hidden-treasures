import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const Search = () => {
  const [category, setCategory] = useState(
    capitalizeFirstLetter(
      window.location.pathname
        .split("/")
        .pop()
        .replaceAll("%20", " ")
        .replace(/(?:^|\s)\S/g, function (a) {
          return a.toUpperCase();
        })
    )
  );
  const[posts, setPosts] = useState([])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwtToken");
    const payload = sessionStorage.getItem("payload");
    if (!(jwt && payload)) {
      navigate("/login");
    }

    async function fetchData() {
      const categoryIDResponse = await fetch(
        `http://localhost:3000/api/categories`
      );
      const categoryIDJson = await categoryIDResponse.json();
      let categoryID = null;
      categoryIDJson.forEach((cat) => {
        if (cat.name === category) {
          categoryID = cat.category_id;
        }
      });
      
      const postsResponse = await fetch(
        `http://localhost:3000/api/categories/posts/${categoryID}`
      );
      const postsJson = await postsResponse.json();
      setPosts(postsJson);
      console.log(postsJson)
    }

    fetchData();

  }, []);
  return (
    <div>
      <Navbar />
      <Hero title={category} />
      {posts.map((post) => (
        <a onClick={() => navigate(`/post/${post.post_url_id}`)}>Post</a>
      ))}
      <Footer />
    </div>
  );
};

export default Search;
