import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Log in</div>
      <a onClick={() => navigate("/")}>Log In Here</a>
    </div>
  );
};

export default LogIn;
