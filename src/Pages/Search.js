import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Search = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwtToken");
    const payload = sessionStorage.getItem("payload");
    if (!(jwt && payload)) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Navbar />

      <div>Search</div>
      <a onClick={() => navigate("/post/:post_id")}>Post</a>
    </div>
  );
};

export default Search;
