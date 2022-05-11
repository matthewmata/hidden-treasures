import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const ChooseCategory = () => {
  return (
    <div>
      <Navbar />
      <div>Please choose a category</div>
      <Link to="../new-post/add-information">
        Next
      </Link>
    </div>
  );
};

export default ChooseCategory;
