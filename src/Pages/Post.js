import { useContext, useEffect } from "react";
import { AccountContext } from "../auth/Accounts";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Post = () => {
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

      <div>Post</div>
    </div>
  );
};

export default Post;
