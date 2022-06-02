import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../auth/Accounts";
import ChangeEmail from "../../Components/Change-Email";
import ChangePassword from "../../Components/Change-Password";

import Navbar from "../../Components/Navbar";

const Settings = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { getSession } = useContext(AccountContext);


  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <a onClick={() => navigate("/profile/postings")}>Postings</a>
      <a onClick={() => navigate("/profile/drafts")}>Drafts</a>
      <a onClick={() => navigate("/profile/settings")}>Profile</a>
      <div>Settings</div>
      {loggedIn && (
        <>
          <h1>Settings</h1>
          <ChangePassword />
          <ChangeEmail /> 
        </>
      )}
    </div>
  );
};

export default Settings;
