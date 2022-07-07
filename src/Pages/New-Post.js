import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/Progress-Bar";
import Hero from "../Components/Hero";
import ChooseCategory from "../Components/Choose-Category";
import AddInformation from "../Components/Add-Information";
import AddPictures from "../Components/Add-Pictures";
import ReviewPost from "../Components/Review-Post";
import Footer from "../Components/Footer";

import S3BucketUpload from "../Components/S3-buckets";

const NewPost = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [postInfo, setPostInfo] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [user_id, setUser_id] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwtToken");
    const payload = sessionStorage.getItem("payload");
    setUser_id(payload);
    if (!(jwt && payload)) {
      navigate("/login");
    }
  }, []);

  const handleChange = (name) => (e) => {
    setPostInfo({ ...postInfo, [name]: e.target.value });
    console.log(postInfo);
  };

  // change localhosts after deployment
  const handleFormSubmit = (selectedImages) => {
    async function postData() {
      let post_url_id = uuidv4().replaceAll("-", "");

      await axios.post(`http://localhost:3000/api/posts`, {
        post_url_id,
        ...postInfo,
        user_id,
      });
      if (selectedImages.length > 0) {
        selectedImages.forEach(async (image) => {
          let image_uuid = uuidv4().replaceAll("-", "");
          await S3BucketUpload(image, `${image_uuid}.jpeg`);
          let picture_url = `https://hidden-treasures-images.s3.amazonaws.com/${image_uuid}`;
          // let picture_url = `https://${process.env.REACT_APP.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${image_uuid}`;
          await axios.post(`http://localhost:3000/api/pictures`, {
            post_url_id,
            picture_url,
          });
        });
      } else {
        await axios.post(`http://localhost:3000/api/pictures`, {
          post_url_id,
          picture_url:
            "https://hidden-treasures-images.s3.amazonaws.com/no-image",
        });
      }

      navigate(`/`);
    }
    postData();
  };

  const handleFeaturedImage = (index) => {
    const nonFeaturedImages = selectedImages.slice(1);
    const newFeaturedImage = nonFeaturedImages.splice(index, 1);
    setSelectedImages([
      ...newFeaturedImage,
      selectedImages[0],
      ...nonFeaturedImages,
    ]);
  };

  const steps = [
    {
      index: 0,
      label: "Choose Category",
    },
    {
      index: 1,
      label: "Add Information",
    },
    {
      index: 2,
      label: "Add Pictures",
    },
    {
      index: 3,
      label: "Review Post",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero title="New Post" subTitle={`${steps[activeIndex].label}`} />
      <ProgressBar activeIndex={activeIndex} steps={steps} />
      {
        {
          0: (
            <ChooseCategory
              setActiveIndex={setActiveIndex}
              postInfo={postInfo}
              handleChange={handleChange}
            />
          ),
          1: (
            <AddInformation
              setActiveIndex={setActiveIndex}
              postInfo={postInfo}
              handleChange={handleChange}
            />
          ),
          2: (
            <AddPictures
              setActiveIndex={setActiveIndex}
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
            />
          ),
          3: (
            <ReviewPost
              setActiveIndex={setActiveIndex}
              postInfo={postInfo}
              selectedImages={selectedImages}
              handleFormSubmit={handleFormSubmit}
              handleFeaturedImage={handleFeaturedImage}
            />
          ),
        }[activeIndex]
      }
      <Footer />
    </div>
  );
};

export default NewPost;
