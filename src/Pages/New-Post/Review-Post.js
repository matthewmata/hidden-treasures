import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import ProgressBar from "../../Components/Progress-Bar";
import Footer from "../../Components/Footer";

const Review = () => {
  return (
    <div>
      <Navbar />
      <Hero title="New Post" subTitle="Review Post" />
      <ProgressBar activeIndex={3} />
      <div>Review</div>
      <Link to="">Publish</Link>
      <Footer />
    </div>
  );
};

export default Review;
