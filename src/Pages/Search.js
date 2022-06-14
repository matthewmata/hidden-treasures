import { useContext, useEffect } from "react";
import { AccountContext } from "../auth/Accounts";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Search = () => {
  const navigate = useNavigate();

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().catch(() => {
      navigate("/login");
    });
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
