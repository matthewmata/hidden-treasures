import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Item from "../Components/Item";
import Footer from "../Components/Footer";

const Post = () => {
  const [post_url_id, setPostURL] = useState(
    window.location.pathname.split("/").pop()
  );
  const [postInfo, setPostInfo] = useState({ title: 'loading',price: '...' });
  const [selectedImages, setSelectedImages] = useState([]);
  const [category, setCategory] = useState("");

  const handleFeaturedImage = (index) => {
    const nonFeaturedImages = selectedImages.slice(1);
    const newFeaturedImage = nonFeaturedImages.splice(index, 1);
    setSelectedImages([
      ...newFeaturedImage,
      selectedImages[0],
      ...nonFeaturedImages,
    ]);
  };


  const navigate = useNavigate();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwtToken");
    const payload = sessionStorage.getItem("payload");
    if (!(jwt && payload)) {
      navigate("/login");
    }

    async function fetchData() {
      const postInfoResponse = await fetch(
        `http://localhost:3000/api/posts/${post_url_id}`
      );
      const postInfoJson = await postInfoResponse.json();
      setPostInfo(postInfoJson[0]);
      const picturesResponse = await fetch(
        `http://localhost:3000/api/pictures/${postInfoJson[0].post_url_id}`
      );
      const picturesJson = await picturesResponse.json();
      const pictureUrls = [];
      for (let picture of picturesJson) {
        pictureUrls.push({ preview: `${picture.picture_url}.jpeg` });
      }
      setSelectedImages(pictureUrls);

      const categoryIDResponse = await fetch(
        `http://localhost:3000/api/categories/${postInfoJson[0].category_id}`
      );
      const categoryIDJson = await categoryIDResponse.json();
      setCategory(categoryIDJson[0].name);
    
    }

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero title={category} />
      <Item
        postInfo={postInfo}
        selectedImages={selectedImages}
        handleFeaturedImage={handleFeaturedImage}
      />
      <Footer />
    </div>
  );
};

export default Post;
