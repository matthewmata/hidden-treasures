import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const AddInformation = () => {
    return (
      <div>
        <Navbar />
        <div>Information</div>
        <Link to="../new-post/add-picture">Next</Link>
      </div>
    );
};

export default AddInformation;
