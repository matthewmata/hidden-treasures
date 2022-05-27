import { useState } from "react";

import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/Progress-Bar";
import Hero from "../Components/Hero";
import ChooseCategory from "../Components/Choose-Category";
import AddInformation from "../Components/Add-Information";
import AddPictures from "../Components/Add-Pictures";
import ReviewPost from "../Components/Review-Post";
import Footer from "../Components/Footer";

const NewPost = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [postInfo, setPostInfo] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);

  const handleChange = (name) => (e) => {
    setPostInfo({ ...postInfo, [name]: e.target.value });
    console.log(postInfo);
  };

  const handleFormSubmit = () => {

  }
  

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
            />
          ),
        }[activeIndex]
      }
      <Footer />
    </div>
  );
};

export default NewPost;
