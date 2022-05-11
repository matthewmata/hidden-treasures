import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Sign Up</div>
      <a onClick={() => navigate("/")}>Sign Up Here</a>
    </div>
  );
};

export default SignUp;
