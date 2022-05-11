import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const AddPicture = () => {
  return (
    <div>
      <Navbar/>
      <div>Add Picture</div>
      <Link to="../new-post/review">Next</Link>
    </div>
  );
};

export default AddPicture;
