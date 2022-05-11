import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Search = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div>Search</div>
      <a onClick={() => navigate("/post/:post_id")}>Post</a>
    </div>
  );
};

export default Search;
