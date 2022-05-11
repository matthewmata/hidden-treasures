import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Categories = () => {
  const navigate = useNavigate();
  const category_id = 1;

  return (
    <div>
      <Navbar />
      <a onClick={() => navigate(`/search/${category_id}`)}>Categories</a>
    </div>
  );
};

export default Categories;
