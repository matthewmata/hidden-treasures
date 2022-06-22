import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Postings = () => {
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

      <a onClick={() => navigate("/profile/postings")}>Postings</a>
      <a onClick={() => navigate("/profile/drafts")}>Drafts</a>
      <a onClick={() => navigate("/profile/settings")}>Profile</a>
      <div>POSTINGS</div>
    </div>
  );
};

export default Postings;
